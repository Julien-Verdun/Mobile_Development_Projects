import React from "react";
import { View, Text, SafeAreaView, FlatList } from "react-native";
import { getStyle } from "../../style/ListWod/listWodStyle.js";
import { buildStyleSheet } from "../../utils/functions.js";
import { getTraining } from "../../../training/Training.js";
import WodPanel from "./WodPanel.js";
import Button from "./../Other/Button.js";

class ListWod extends React.Component {
  constructor(props) {
    super(props);
    this.listWodStyle = buildStyleSheet(getStyle());
    this.state = {
      trainings: [],
    };
  }

  componentDidMount() {
    getTraining().then((trainings) => {
      this.setState({ trainings });
    });
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
        <Text style={this.listWodStyle.title}>Choisis ton WOD !</Text>
        {listWod}
        <Button
          title="Create my training"
          styles={{
            button: this.listWodStyle.primaryButton,
            title: this.listWodStyle.buttonWhiteText,
          }}
          onPress={() => this.props.navigation.navigate("TrainingCreator")}
        />
      </View>
    );
  }
}

export default ListWod;
