import React from "react";
import { Text, View, SafeAreaView, FlatList } from "react-native";
import { getStyle } from "../../../style/ListWod/WodType/emomStyle.js";
import { buildStyleSheet } from "../../../utils/functions.js";
import Exercise from "./../Exercise.js";

class Emom extends React.Component {
  constructor(props) {
    super(props);
    this.emomStyle = buildStyleSheet(getStyle());
  }

  render() {
    return (
      <View style={this.emomStyle.globalView}>
        <View style={this.emomStyle.globalText}>
          <Text style={this.emomStyle.numberRounds}>
            During {this.props.numberRounds} minutes, every minutes :
          </Text>

          <SafeAreaView style={this.emomStyle.wodView}>
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

export default Emom;
