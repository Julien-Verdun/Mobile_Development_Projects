import React from "react";
import { View, Text, SafeAreaView, FlatList } from "react-native";
import { getStyle } from "../../style/ListWod/listWodStyle.js";
import { buildStyleSheet } from "../../utils/functions.js";
import { getTraining } from "../../../training/Training.js";
import WodPanel from "./WodPanel.js";

class ListWod extends React.Component {
  constructor(props) {
    super(props);
    this.listWodStyle = buildStyleSheet(getStyle());
    this.state = {
      trainings: [],
    };
  }

  componentDidMount() {
    this.setState({ trainings: getTraining() });
  }

  render() {
    let listWod = (
      <SafeAreaView style={this.listWodStyle.listWod}>
        <FlatList
          data={this.state.trainings}
          renderItem={({ item }) => (
            <WodPanel
              navigation={this.props.navigation}
              type={item.type}
              numberRounds={item.numberRounds}
              listTrainings={item.listTrainings}
              listReps={item.listReps}
              timeCap={item.timeCap}
            ></WodPanel>
          )}
          keyExtractor={(item) => this.state.trainings.indexOf(item).toString()}
        />
      </SafeAreaView>
    );
    return (
      <View style={this.listWodStyle.globalView}>
        <Text style={this.listWodStyle.title}>Workout of the Day !</Text>
        {listWod}
      </View>
    );
  }
}

export default ListWod;
