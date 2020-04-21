import React from "react";
import { Text, View } from "react-native";
import { getStyle } from "../../style/ListWod/wodDetailsStyle.js";
import { buildStyleSheet } from "../../utils/functions.js";
import Button from "./../Other/Button.js";
import ModalBestTime from "./../Modal/ModalBestTime.js";

import ForTime from "./WodType/ForTime.js";
import Amrap from "./WodType/Amrap.js";
import Emom from "./WodType/Emom.js";
import Classic from "./WodType/Classic.js";

import { storeData, fetchData } from "./../../utils/dataStorage.js";

class WodDetails extends React.Component {
  constructor(props) {
    super(props);
    this.wodDetailsStyle = buildStyleSheet(getStyle());
    this.state = {
      modalVisible: false,
      bestTime: null,
    };
    this.handleBestTime = this.handleBestTime.bind(this);
    this.handleModalVsible = this.handleModalVsible.bind(this);
  }

  handleModalVsible(modalVisible) {
    this.setState({ modalVisible });
  }

  handleBestTime(bestTime) {
    this.setState({ bestTime });
    storeData("@MySuperStore:bestTime", bestTime).then(
      console.log("Best time registered")
    );
  }

  componentDidMount() {
    fetchData("@MySuperStore:bestTime").then((bestTime) => {
      this.setState({ bestTime });
    });
  }

  render() {
    let params = this.props.route.params;
    // faire un render par type et uniquement renvoyer le bon component
    let wodPanel;
    let buttonPanel = (
      <Button
        title="Start the WOD"
        styles={{
          button: this.wodDetailsStyle.primaryButton,
          title: this.wodDetailsStyle.buttonWhiteText,
        }}
        onPress={() => {
          this.props.navigation.navigate(
            params.type === "Classic"
              ? "TimeModeMonitoring"
              : "RepModeMonitoring",
            {
              type: params.type,
              numberRounds: params.numberRounds,
              listTrainings: params.listTrainings,
              listReps: params.listReps,
              timeCap: params.timeCap,
            }
          );
        }}
      />
    );
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
    } else {
      wodPanel = null;
      buttonPanel = null;
    }
    let modalBestTime = null,
      bestTimeForm = null;
    if (params.type === "For Time") {
      // composant contenant le modal affiché pour renseigner le score
      modalBestTime = (
        <ModalBestTime
          modalVisible={this.state.modalVisible}
          onSubmitBestTime={this.handleBestTime}
          onCancelModal={this.handleModalVsible}
        ></ModalBestTime>
      );
      //component contenant le meilleur temps et le bouton pour meilleure temps
      bestTimeForm = (
        <View style={this.wodDetailsStyle.bestTime}>
          <Text style={this.wodDetailsStyle.bestTimeLabel}>
            {this.state.bestTime !== null
              ? "Best time : " + this.state.bestTime
              : ""}
          </Text>
          <Button
            title="Add my score"
            styles={{
              button: this.wodDetailsStyle.bestTimeButton,
              title: this.wodDetailsStyle.buttonWhiteText,
            }}
            onPress={() => {
              this.setState({ modalVisible: true });
            }}
          />
        </View>
      );
    }

    return (
      <View style={this.wodDetailsStyle.globalView}>
        {modalBestTime}
        <Text style={this.wodDetailsStyle.type}>{params.type}</Text>
        {wodPanel}
        {bestTimeForm}
        {buttonPanel}
      </View>
    );
  }
}

export default WodDetails;
