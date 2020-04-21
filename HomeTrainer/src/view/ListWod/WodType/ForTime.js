import React from "react";
import { Text, View, SafeAreaView, FlatList } from "react-native";
import { getStyle } from "../../../style/ListWod/WodType/forTimeStyle.js";
import { buildStyleSheet } from "../../../utils/functions.js";
import Exercise from "./../Exercise.js";

class WodDetails extends React.Component {
  constructor(props) {
    super(props);
    this.forTimeStyle = buildStyleSheet(getStyle());
  }

  render() {
    return (
      <View style={this.forTimeStyle.globalView}>
        <Text style={this.forTimeStyle.numberRounds}>
          Number Round : {this.props.numberRounds}
        </Text>
        <Text style={this.forTimeStyle.timeCap}>
          Time Cap : {this.props.timeCap}
        </Text>

        <SafeAreaView style={this.forTimeStyle.wodView}>
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
    );
  }
}

export default WodDetails;
