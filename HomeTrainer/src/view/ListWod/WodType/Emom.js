import React from "react";
import { Text, View, ScrollView } from "react-native";
import { getStyle } from "../../../style/ListWod/WodType/emomStyle.js";
import { buildStyleSheet } from "../../../utils/functions.js";

class Emom extends React.Component {
  constructor(props) {
    super(props);
    this.emomStyle = buildStyleSheet(getStyle());
    this.state = {};
  }

  componentDidMount(prevProps, prevState) {}

  render() {
    return (
      <View style={this.emomStyle.globalView}>
        <View style={this.emomStyle.globalText}>
          <Text style={this.emomStyle.numberRounds}>
            During {this.props.numberRounds} minutes, every minutes :
          </Text>
          <Text style={this.emomStyle.numberRounds}>
            {this.props.listTrainings.map((training, index) => {
              return this.props.listReps[index] + " reps : " + training + "\n";
            })}
          </Text>
        </View>
      </View>
    );
  }
}

export default Emom;
