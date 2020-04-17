import React from "react";
import { TouchableOpacity, Text, Image } from "react-native";
import { getStyle } from "./../style/Navigation/navigationBarSyle.js";
import { buildStyleSheet } from "./../utils/functions.js";

class NavigationBar extends React.Component {
  constructor(props) {
    super(props);
    this.navigationBarStyle = buildStyleSheet(getStyle());
    this.state = {};
  }

  componentDidMount(prevProps, prevState) {}

  render() {
    return (
      <TouchableOpacity
        onPress={() => {}}
        style={this.navigationBarStyle.globalView}
        onPress={() => this.props.navigation.navigate("Home")}
      >
        <Image
          style={this.navigationBarStyle.logo}
          source={require("../../assets/logoApp.png")}
        />
        <Text style={this.navigationBarStyle.title}>{this.props.title}</Text>
      </TouchableOpacity>
    );
  }
}

export default NavigationBar;
