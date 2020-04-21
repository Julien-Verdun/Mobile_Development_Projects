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
    this.state = {};
  }

  componentDidMount(prevProps, prevState) {
    // chose à faire au chargement de la page
  }

  componentDidUpdate(prevProps, prevState) {
    //chose à faire à la modification du state
    // faire attention a bien comparé les elements du state que l'on souhaite
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
