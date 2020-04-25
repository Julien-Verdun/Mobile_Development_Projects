import React from "react";
import { View, Text } from "react-native";
import { getStyle } from "../../style/Settings/settingsStyle.js";
import { buildStyleSheet } from "../../utils/functions.js";
import { getAllKeys, removeData, fetchData } from "../../utils/dataStorage.js";
import Button from "../Other/Button.js";

class Home extends React.Component {
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
              getAllKeys().then((keys) => {
                console.log(keys);
                removeData(keys).then(() => {
                  console.log("Data removed");
                  fetchData(keys).then((data) => {
                    console.log(data);
                  });
                });
              });
            }}
          />
        </View>
      </View>
    );
  }
}

export default Home;
