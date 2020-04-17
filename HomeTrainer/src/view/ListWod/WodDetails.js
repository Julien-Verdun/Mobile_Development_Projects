import React from "react";
import { Text, View, TextInput } from "react-native";
import { getStyle } from "../../style/ListWod/wodDetailsStyle.js";
import { buildStyleSheet, isNormalInteger } from "../../utils/functions.js";
import Button from "./../Other/Button.js";

import ForTime from "./WodType/ForTime.js";
import Amrap from "./WodType/Amrap.js";
import Emom from "./WodType/Emom.js";
import Classic from "./WodType/Classic.js";

class WodDetails extends React.Component {
  constructor(props) {
    super(props);
    this.wodDetailsStyle = buildStyleSheet(getStyle());
    this.bestTime = undefined;
    this.state = {
      bestTimePanel: undefined,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.checkFormatBestTime = this.checkFormatBestTime.bind(this);
  }

  handleChange(text) {
    this.bestTime = text;
  }

  handleSubmit() {
    //verification du format du temps renseigné
    if (this.checkFormatBestTime()) {
      this.setState({
        bestTimePanel: <Text>Meilleur temps : {this.bestTime} </Text>,
      });
    } else {
      //mauvais format renseigné
      this.setState({
        bestTimePanel: (
          <Text style={{ color: "red" }}>
            Erreur : {this.bestTime} n'est pas un temps valide{" "}
          </Text>
        ),
      });
      console.log("mauvais format renseigné");
    }
  }

  checkFormatBestTime() {
    // verification du format du temps hh:mm:ss avec des minutse et secondes < 60
    if (!this.bestTime.includes(":")) {
      return false;
    }
    let testFormat = true;
    this.bestTime.split(":").forEach((elt, index) => {
      if (!isNormalInteger(elt) || elt.length !== 2 || parseInt(elt) >= 60) {
        testFormat = false;
      }
    });
    return testFormat;
  }

  componentDidMount(prevProps, prevState) {}

  render() {
    let params = this.props.route.params;
    // faire un render par type et uniquement renvoyer le bon component
    let wodPanel;
    let buttonPanel;
    if (params.type == "For Time") {
      wodPanel = (
        <ForTime
          navigation={this.props.navigation}
          type={params.type}
          numberRounds={params.numberRounds}
          listTrainings={params.listTrainings}
          listReps={params.listReps}
          timeCap={params.timeCap}
        />
      );
      buttonPanel = (
        <Button
          title="Start the WOD"
          styles={{
            button: this.wodDetailsStyle.primaryButton,
            title: this.wodDetailsStyle.buttonWhiteText,
          }}
          onPress={() =>
            this.props.navigation.navigate("WodMonitoring", {
              type: params.type,
              numberRounds: params.numberRounds,
              listTrainings: params.listTrainings,
              listReps: params.listReps,
              timeCap: params.timeCap,
            })
          }
        />
      );
    } else if (params.type == "AMRAP") {
      wodPanel = (
        <Amrap
          navigation={this.props.navigation}
          type={params.type}
          numberRounds={params.numberRounds}
          listTrainings={params.listTrainings}
          listReps={params.listReps}
          timeCap={params.timeCap}
        />
      );
      buttonPanel = (
        <Button
          title="Start the WOD"
          styles={{
            button: this.wodDetailsStyle.primaryButton,
            title: this.wodDetailsStyle.buttonWhiteText,
          }}
          onPress={() =>
            this.props.navigation.navigate("WodMonitoring", {
              type: params.type,
              numberRounds: params.numberRounds,
              listTrainings: params.listTrainings,
              listReps: params.listReps,
              timeCap: params.timeCap,
            })
          }
        />
      );
    } else if (params.type == "EMOM") {
      wodPanel = (
        <Emom
          navigation={this.props.navigation}
          type={params.type}
          numberRounds={params.numberRounds}
          listTrainings={params.listTrainings}
          listReps={params.listReps}
          timeCap={params.timeCap}
        />
      );
      buttonPanel = (
        <Button
          title="Start the WOD"
          styles={{
            button: this.wodDetailsStyle.primaryButton,
            title: this.wodDetailsStyle.buttonWhiteText,
          }}
          onPress={() =>
            this.props.navigation.navigate("WodMonitoring", {
              type: params.type,
              numberRounds: params.numberRounds,
              listTrainings: params.listTrainings,
              listReps: params.listReps,
              timeCap: params.timeCap,
            })
          }
        />
      );
    } else if (params.type == "Classic") {
      wodPanel = (
        <Classic
          navigation={this.props.navigation}
          type={params.type}
          numberRounds={params.numberRounds}
          listTrainings={params.listTrainings}
          listReps={params.listReps}
          timeCap={params.timeCap}
        />
      );
      buttonPanel = (
        <Button
          title="Start the WOD"
          styles={{
            button: this.wodDetailsStyle.primaryButton,
            title: this.wodDetailsStyle.buttonWhiteText,
          }}
          onPress={() =>
            this.props.navigation.navigate("WodMonitoring", {
              type: params.type,
              numberRounds: params.numberRounds,
              listTrainings: params.listTrainings,
              listReps: params.listReps,
              timeCap: params.timeCap,
            })
          }
        />
      );
    } else {
      wodPanel = null;
      buttonPanel = null;
    }
    let bestTimePanel = null;
    if (params.type === "For Time") {
      bestTimePanel = (
        <View style={this.wodDetailsStyle.bestTimeForm}>
          <Text style={this.wodDetailsStyle.bestTimeLabel}>
            Best time (format hh:mm:ss)
          </Text>
          <View style={this.wodDetailsStyle.bestTimeView}>
            <TextInput
              style={this.wodDetailsStyle.bestTimeInput}
              ref={this.bestTimeInput}
              onChangeText={(text) => this.handleChange(text)}
              onSubmitEditing={this.handleSubmit}
              placeholder="hh:mm:ss"
              keyboardType="numeric"
            ></TextInput>
            <Button
              title="Submit"
              styles={{
                button: this.wodDetailsStyle.bestTimeButton,
                title: this.wodDetailsStyle.buttonWhiteText,
              }}
              onPress={this.handleSubmit}
            />
          </View>
          {this.state.bestTimePanel}
        </View>
      );
    }

    return (
      <View style={this.wodDetailsStyle.globalView}>
        <Text style={this.wodDetailsStyle.type}>{params.type}</Text>
        {wodPanel}
        {bestTimePanel}
        {buttonPanel}
      </View>
    );
  }
}

export default WodDetails;
