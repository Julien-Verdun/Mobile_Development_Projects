import React from "react";
import { TouchableOpacity, Text, Image } from "react-native";
import { getStyle } from "./../style/Navigation/navigationBarStyle.js";
import { buildStyleSheet } from "./../utils/functions.js";

class NavigationBar extends React.Component {
  constructor(props) {
    super(props);
    this.navigationBarStyle = buildStyleSheet(getStyle());
  }

  render() {
    return (
      <TouchableOpacity
        onPress={() => {}}
        style={this.navigationBarStyle.globalView}
        onPress={() => this.props.navigation.openDrawer()}
      >
        <Image
          style={this.navigationBarStyle.logo}
          source={require("../../assets/homeTrainerLogoApp.png")}
        />
        <Text style={this.navigationBarStyle.title}>{this.props.title}</Text>
      </TouchableOpacity>
    );
  }
}

export default NavigationBar;
