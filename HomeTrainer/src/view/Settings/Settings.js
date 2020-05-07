import React from "react";
import { View, Text, Switch } from "react-native";
import { getStyle } from "../../style/Settings/settingsStyle.js";
import { buildStyleSheet } from "../../utils/functions.js";
import Button from "../Other/Button.js";
import { AirbnbRating } from "react-native-elements";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return { myTrainings: state.myTrainings, historic: state.historic };
};

class Settings extends React.Component {
  constructor(props) {
    super(props);
    this.settingsStyle = buildStyleSheet(getStyle());
    this.toggleTraining = this.toggleTraining.bind(this);
    this.toggleHistoric = this.toggleHistoric.bind(this);
  }

  toggleTraining() {
    this.props.dispatch({
      type: "RESET_TRAINING",
    });
  }

  toggleHistoric() {
    this.props.dispatch({
      type: "RESET_HISTORIC",
    });
  }

  render() {
    return (
      <View style={this.settingsStyle.globalView}>
        <Text style={this.settingsStyle.title}>Settings ! </Text>

        <Text>Rate the app </Text>
        <AirbnbRating
          count={7}
          reviews={[
            "Terrible",
            "Bad",
            "OK",
            "Good",
            "Very Good",
            "Amazing",
            "Unbelievable",
          ]}
          defaultRating={4}
          size={20}
        />

        <View style={this.settingsStyle.buttons}>
          {/* <Button
            title="Delete time data"
            styles={{
              button: this.settingsStyle.primaryButton,
              title: this.settingsStyle.buttonWhiteText,
            }}
            onPress={() => {}}
          /> */}
          <Button
            title="Delete training data"
            styles={{
              button: this.settingsStyle.primaryButton,
              title: this.settingsStyle.buttonWhiteText,
            }}
            onPress={this.toggleTraining}
          />

          <Button
            title="Delete historic data"
            styles={{
              button: this.settingsStyle.primaryButton,
              title: this.settingsStyle.buttonWhiteText,
            }}
            onPress={this.toggleTraining}
          />
        </View>
      </View>
    );
  }
}

export default connect(mapStateToProps)(Settings);
