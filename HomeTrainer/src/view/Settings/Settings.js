import React from "react";
import { View, Text, Switch } from "react-native";
import { getStyle } from "../../style/Settings/settingsStyle.js";
import { buildStyleSheet } from "../../utils/functions.js";
import { removeAllData, removeData } from "../../../DataStorage/dataStorage.js";
import Button from "../Other/Button.js";
import { AirbnbRating } from "react-native-elements";

class Settings extends React.Component {
  constructor(props) {
    super(props);
    this.settingsStyle = buildStyleSheet(getStyle());
    this.state = { langageSwitchValue: true };
    this.toggleSwitch = this.toggleSwitch.bind(this);
  }

  toggleSwitch() {
    this.setState({ langageSwitchValue: !this.state.langageSwitchValue });
  }
  render() {
    return (
      <View style={this.settingsStyle.globalView}>
        <Text style={this.settingsStyle.title}>Settings ! </Text>
        <Text>Choose language </Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={this.state.langageSwitchValue ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={this.toggleSwitch}
          value={this.state.langageSwitchValue}
        />
        <Text>{this.state.langageSwitchValue ? "Français" : "English"}</Text>
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
          <Button
            title="Delete time data"
            styles={{
              button: this.settingsStyle.primaryButton,
              title: this.settingsStyle.buttonWhiteText,
            }}
            onPress={() => {
              removeData("@MySuperStore:intervaltimer");
            }}
          />
          <Button
            title="Delete training data"
            styles={{
              button: this.settingsStyle.primaryButton,
              title: this.settingsStyle.buttonWhiteText,
            }}
            onPress={() => {
              removeData("@MySuperStore:trainings");
            }}
          />

          <Button
            title="Delete user data"
            styles={{
              button: this.settingsStyle.primaryButton,
              title: this.settingsStyle.buttonWhiteText,
            }}
            onPress={() => {
              removeData("@MySuperStore:user");
            }}
          />

          <Button
            title="Delete data"
            styles={{
              button: this.settingsStyle.primaryButton,
              title: this.settingsStyle.buttonWhiteText,
            }}
            onPress={() => {
              removeAllData();
            }}
          />
        </View>
      </View>
    );
  }
}

export default Settings;
