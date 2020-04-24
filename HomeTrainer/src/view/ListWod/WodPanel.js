import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { getStyle } from "../../style/ListWod/wodPanelStyle.js";
import { buildStyleSheet } from "../../utils/functions.js";

class WodPanel extends React.Component {
  constructor(props) {
    super(props);
    this.wodPanelStyle = buildStyleSheet(getStyle());
    this.backgroundColorPanel;
    if (this.props.type === "For Time") {
      this.backgroundColorPanel = "#ffff00";
    } else if (this.props.type === "EMOM") {
      this.backgroundColorPanel = "#43f30a";
    } else if (this.props.type === "AMRAP") {
      this.backgroundColorPanel = "#99bbff";
    } else if (this.props.type === "Classic") {
      this.backgroundColorPanel = "#0044ff";
    } else {
      this.backgroundColorPanel = "#4f1600";
    }
    this.state = {};
  }

  componentDidMount(prevProps, prevState) {}

  render() {
    return (
      <TouchableOpacity
        onPress={() =>
          this.props.navigation.navigate("WodDetails", {
            type: this.props.type,
            listTrainings: this.props.listTrainings,
            numberRounds: this.props.numberRounds,
            listReps: this.props.listReps,
            timeCap: this.props.timeCap,
          })
        }
        style={[
          this.wodPanelStyle.globalView,
          { backgroundColor: this.backgroundColorPanel },
        ]}
      >
        <Text style={this.wodPanelStyle.type}>{this.props.type}</Text>
        <Text style={this.wodPanelStyle.listTrainings}>
          {this.props.listTrainings.join("\n")}
        </Text>
      </TouchableOpacity>
    );
  }
}

export default WodPanel;
