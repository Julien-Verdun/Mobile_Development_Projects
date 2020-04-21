import React from "react";
import { Text, View, SafeAreaView, FlatList } from "react-native";
import { getStyle } from "../../../style/ListWod/WodType/classicStyle.js";
import { buildStyleSheet } from "../../../utils/functions.js";
import Exercise from "./../Exercise.js";

class Classic extends React.Component {
  constructor(props) {
    super(props);
    this.classicStyle = buildStyleSheet(getStyle());
  }

  render() {
    return (
      <View style={this.classicStyle.globalView}>
        <View style={this.classicStyle.globalText}>
          <Text style={this.classicStyle.numberRounds}>
            {this.props.numberRounds +
              (this.props.numberRounds === 1 ? " round " : " rounds ")}
            of :
          </Text>

          <SafeAreaView style={this.classicStyle.wodView}>
            <FlatList
              data={this.props.listTrainings}
              renderItem={({ item, index }) => (
                <Exercise
                  type={this.props.type}
                  numberRep={this.props.listReps[index]}
                  exerciceName={item}
                ></Exercise>
              )}
              keyExtractor={(item) =>
                this.props.listTrainings.indexOf(item).toString()
              }
            />
          </SafeAreaView>
        </View>
      </View>
    );
  }
}

export default Classic;
