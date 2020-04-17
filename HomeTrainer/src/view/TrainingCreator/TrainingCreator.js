import React from "react";
import { View, Text, SafeAreaView, FlatList } from "react-native";
import { getStyle } from "../../style/TrainingCreator/trainingCreatorStyle.js";
import { buildStyleSheet } from "../../utils/functions.js";
import Button from "./../Other/Button.js";

class TrainingCreator extends React.Component {
  constructor(props) {
    super(props);
    this.trainingCreatorStyle = buildStyleSheet(getStyle());
    this.state = {};
  }

  componentDidMount(prevProps, prevState) {}

  render() {
    return (
      <View style={this.trainingCreatorStyle.globalView}>
        <Text style={this.trainingCreatorStyle.title}>
          Quel WOD vas-te faire perler aujourd'hui ?
        </Text>
      </View>
    );
  }
}

export default TrainingCreator;
