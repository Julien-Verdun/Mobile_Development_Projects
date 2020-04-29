import React from "react";
import { View, Text, SafeAreaView, FlatList } from "react-native";
import { getStyle } from "../../style/ListWod/myListWodStyle.js";
import { buildStyleSheet } from "../../utils/functions.js";
import { getMyTraining, getTraining } from "../../../training/Training.js";
import WodPanel from "./WodPanel.js";
import Button from "./../Other/Button.js";

class MyListWod extends React.Component {
  constructor(props) {
    super(props);
    this.myListWodStyle = buildStyleSheet(getStyle());
    this.state = {
      myTrainings: [],
    };
  }

  componentDidMount() {
    getMyTraining().then((myTrainings) => {
      this.setState({ myTrainings });
    });
  }

  render() {
    let listWod = (
      <SafeAreaView style={this.myListWodStyle.listWod}>
        <FlatList
          data={this.state.myTrainings}
          renderItem={({ item }) => (
            <WodPanel
              navigation={this.props.navigation}
              exerciseId={item.exerciseId}
              type={item.type}
              numberRounds={item.numberRounds}
              listTrainings={item.listTrainings}
              listReps={item.listReps}
              timeCap={item.timeCap}
            ></WodPanel>
          )}
          keyExtractor={this.state.myTrainings.exerciseId}
        />
      </SafeAreaView>
    );
    return (
      <View style={this.myListWodStyle.globalView}>
        <Text style={this.myListWodStyle.title}>My workout of the Day !</Text>
        {listWod}
        <Button
          title="Create my training"
          styles={{
            button: this.myListWodStyle.primaryButton,
            title: this.myListWodStyle.buttonWhiteText,
          }}
          onPress={() => this.props.navigation.navigate("TrainingCreator")}
        />
      </View>
    );
  }
}

export default MyListWod;
