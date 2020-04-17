import React from "react";
import { Text, View, ScrollView } from "react-native";
import { getStyle } from "../../../style/ListWod/WodType/forTimeStyle.js";
import { buildStyleSheet } from "../../../utils/functions.js";

class WodDetails extends React.Component {
  constructor(props) {
    super(props);
    this.forTimeStyle = buildStyleSheet(getStyle());
    this.state = {};
  }

  componentDidMount(prevProps, prevState) {}

  render() {
    return (
      <View style={this.forTimeStyle.globalView}>
        <Text style={this.forTimeStyle.numberRounds}>
          Number Round : {this.props.numberRounds}
        </Text>
        <Text style={this.forTimeStyle.timeCap}>
          Time Cap : {this.props.timeCap}
        </Text>
        <ScrollView style={this.forTimeStyle.textView}>
          <Text style={this.forTimeStyle.listTrainings}>
            {this.props.listTrainings.map((training, index) => {
              return this.props.listReps[index] + " reps : " + training + "\n";
            })}
          </Text>
        </ScrollView>
      </View>
    );
  }
}

export default WodDetails;
