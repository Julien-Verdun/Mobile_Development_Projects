import React from "react";
import { Text, View, SafeAreaView, FlatList } from "react-native";
import { getStyle } from "../../../style/ListWod/WodType/amrapStyle.js";
import { buildStyleSheet } from "../../../utils/functions.js";
import Exercise from "./../Exercise.js";

class WodDetails extends React.Component {
  constructor(props) {
    super(props);
    this.amrapStyle = buildStyleSheet(getStyle());
  }

  render() {
    return (
      <View style={this.amrapStyle.globalView}>
        <Text style={this.amrapStyle.timeCap}>
          {this.props.timeCap} minutes of :
        </Text>
        <SafeAreaView style={this.amrapStyle.wodView}>
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
