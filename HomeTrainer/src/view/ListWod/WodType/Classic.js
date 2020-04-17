import React from "react";
import { Text, View, ScrollView } from "react-native";
import { getStyle } from "../../../style/ListWod/WodType/classicStyle.js";
import { buildStyleSheet } from "../../../utils/functions.js";

class Classic extends React.Component {
  constructor(props) {
    super(props);
    this.classicStyle = buildStyleSheet(getStyle());
    this.state = {};
  }

  componentDidMount(prevProps, prevState) {}

  render() {
    return (
      <View style={this.classicStyle.globalView}>
        <View style={this.classicStyle.globalText}>
          <Text style={this.classicStyle.numberRounds}>
            {this.props.numberRounds +
              (this.props.numberRounds === 1 ? " round " : " rounds ")}
            of :
          </Text>
          <ScrollView style={this.classicStyle.textView}>
            <Text style={this.classicStyle.listTrainings}>
              {this.props.listTrainings.map((training, index) => {
                return (
                  parseInt(this.props.listReps[index] * 60) +
                  " sec : " +
                  training +
                  "\n"
                );
              })}
            </Text>
          </ScrollView>
        </View>
      </View>
    );
  }
}

export default Classic;
