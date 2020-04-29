import React from "react";
import { View, Text } from "react-native";
import { getStyle } from "../../style/Settings/settingsStyle.js";
import { buildStyleSheet } from "../../utils/functions.js";
import { removeAllData } from "../../../DataStorage/dataStorage.js";
import Button from "../Other/Button.js";

class Settings extends React.Component {
  constructor(props) {
    super(props);
    this.settingsStyle = buildStyleSheet(getStyle());
  }

  render() {
    return (
      <View style={this.settingsStyle.globalView}>
        <Text style={this.settingsStyle.title}>Settings ! </Text>
        <View style={this.settingsStyle.buttons}>
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
