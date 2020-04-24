import React from "react";
import { View, Text } from "react-native";
import { getStyle } from "../../style/Home/homeStyle.js";
import { buildStyleSheet } from "../../utils/functions.js";
import { getAllKeys, removeData, fetchData } from "../../utils/dataStorage.js";
import Button from "../Other/Button.js";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.homeStyle = buildStyleSheet(getStyle());
  }

  render() {
    return (
      <View style={this.homeStyle.globalView}>
        <Text style={this.homeStyle.title}>Welcome ! </Text>
        <View style={this.homeStyle.buttons}>
          <Button
            title="Clock"
            styles={{
              button: this.homeStyle.primaryButton,
              title: this.homeStyle.buttonWhiteText,
            }}
            onPress={() => this.props.navigation.navigate("Clock")}
          />
          <Button
            title="WOD"
            styles={{
              button: this.homeStyle.primaryButton,
              title: this.homeStyle.buttonWhiteText,
            }}
            onPress={() => this.props.navigation.navigate("ListWod")}
          />
          <Button
            title="About"
            styles={{
              button: this.homeStyle.primaryButton,
              title: this.homeStyle.buttonWhiteText,
            }}
            onPress={() => this.props.navigation.navigate("About")}
          />
          <Button
            title="Exercise Informations"
            styles={{
              button: this.homeStyle.primaryButton,
              title: this.homeStyle.buttonWhiteText,
            }}
            onPress={() =>
              this.props.navigation.navigate("ExerciseInformations")
            }
          />
          <Button
            title="Delete data"
            styles={{
              button: this.homeStyle.primaryButton,
              title: this.homeStyle.buttonWhiteText,
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
