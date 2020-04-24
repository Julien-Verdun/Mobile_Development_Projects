import React from "react";
import { View, Text, ScrollView } from "react-native";
import { getStyle } from "../../style/Error/errorStyle.js";
import { buildStyleSheet } from "../../utils/functions.js";

class Error extends React.Component {
  constructor(props) {
    super(props);
    this.errorStyle = buildStyleSheet(getStyle());
  }

  render() {
    let backgroundColor, borderColor, color;
    if (this.props.typeError === "Alert") {
      backgroundColor = "#fff3cd";
      borderColor = "#ffeeba";
      color = "#856404";
    } else if (this.props.typeError === "Warning") {
      backgroundColor = "#f8d7da";
      borderColor = "#f5c6cb";
      color = "#721c24";
    } else {
      backgroundColor = "#d4edda";
      borderColor = "#c3e6cb";
      color = "#155724";
    }
    return (
      <View
        style={[
          this.errorStyle.globalView,
          {
            backgroundColor: backgroundColor,
            borderColor: borderColor,
          },
        ]}
      >
        <ScrollView>
          <Text style={[this.errorStyle.errorText, { color: color }]}>
            {this.props.errorText}
          </Text>
        </ScrollView>
      </View>
    );
  }
}

export default Error;
