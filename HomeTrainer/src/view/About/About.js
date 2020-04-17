import React from "react";
import { View, Text, Image } from "react-native";
import { getStyle } from "../../style/About/aboutStyle.js";
import { buildStyleSheet } from "../../utils/functions.js";

class About extends React.Component {
  constructor(props) {
    super(props);
    this.aboutStyle = buildStyleSheet(getStyle());
    this.state = {};
  }

  componentDidMount(prevProps, prevState) {}

  render() {
    return (
      <View style={this.aboutStyle.globalView}>
        <Text style={this.aboutStyle.title}>
          HomeTrainer, you're fitness application
        </Text>
        <Image
          style={this.aboutStyle.logo}
          source={require("../../../assets/logoApp.png")}
        />
        <View style={this.aboutStyle.textView}>
          <Text style={this.aboutStyle.mainText}>
            Developped by Julien Verdun
          </Text>
          <Text style={this.aboutStyle.mainText}>13/04/2020</Text>
        </View>
      </View>
    );
  }
}

export default About;
