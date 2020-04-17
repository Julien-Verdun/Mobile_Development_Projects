import React from "react";
import { TouchableHighlight, Text } from "react-native";
import { getStyle } from "../../style/Other/buttonStyle.js";
import { buildStyleSheet } from "../../utils/functions.js";

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.buttonStyle = buildStyleSheet(getStyle());
    this.state = {};
  }

  componentDidMount(prevProps, prevState) {
    // chose à faire au chargement de la page
    // this.setState({ buttonStyle: buildStyleSheet(getStyle()) });
  }

  componentDidUpdate(prevProps, prevState) {
    //chose à faire à la modification du state
    // faire attention a bien comparé les elements du state que l'on souhaite
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
