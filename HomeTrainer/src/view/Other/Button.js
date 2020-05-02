import React from "react";
import { TouchableHighlight, Text } from "react-native";
import { getStyle } from "../../style/Other/buttonStyle.js";
import { buildStyleSheet } from "../../utils/functions.js";

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.buttonStyle = buildStyleSheet(getStyle());
  }

  getContent() {
    if (this.props.children) {
      return this.props.children;
    }
    return <Text style={this.props.styles.title}>{this.props.title}</Text>;
  }
  render() {
    return (
      <TouchableHighlight
        underlayColor="#ccc"
        onPress={this.props.onPress}
        style={[
          this.props.noDefaultStyles ? "" : this.buttonStyle.button,
          this.props.styles ? this.props.styles.button : "",
        ]}
      >
        {this.getContent()}
      </TouchableHighlight>
    );
  }
}

export default Button;
