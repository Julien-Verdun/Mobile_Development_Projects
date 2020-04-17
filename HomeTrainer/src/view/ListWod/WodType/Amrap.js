import React from "react";
import { Text, View, ScrollView } from "react-native";
import { getStyle } from "../../../style/ListWod/WodType/amrapStyle.js";
import { buildStyleSheet } from "../../../utils/functions.js";

class WodDetails extends React.Component {
  constructor(props) {
    super(props);
    this.amrapStyle = buildStyleSheet(getStyle());
    this.state = {};
  }

  componentDidMount(prevProps, prevState) {}

  render() {
    return (
      <View style={this.amrapStyle.globalView}>
        <View style={this.amrapStyle.globalText}>
          <Text style={this.amrapStyle.timeCap}>
            {this.props.timeCap} minutes of :
          </Text>
          <ScrollView style={this.amrapStyle.textView}>
            <Text style={this.amrapStyle.listTrainings}>
              {this.props.listTrainings.map((training, index) => {
                return (
                  this.props.listReps[index] + " reps : " + training + "\n"
                );
              })}
            </Text>
          </ScrollView>
        </View>
      </View>
    );
  }
}

export default WodDetails;
