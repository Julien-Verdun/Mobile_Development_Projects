import React from "react";
import { View, Text, SafeAreaView, FlatList } from "react-native";
import { getStyle } from "../../style/ListWod/myListWodStyle.js";
import { buildStyleSheet } from "../../utils/functions.js";
import WodPanel from "./WodPanel.js";
import Button from "./../Other/Button.js";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return { myTrainings: state.myTrainings };
};

class MyListWod extends React.Component {
  constructor(props) {
    super(props);
    this.myListWodStyle = buildStyleSheet(getStyle());
    this.state = {
      myTrainings: this.props.myTrainings.myTrainings,
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.myTrainings.myTrainings !== this.props.myTrainings.myTrainings
    ) {
      this.setState({ myTrainings: this.props.myTrainings.myTrainings });
    }
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
              myTraining={true}
              numberRounds={item.numberRounds}
              listTrainings={item.listTrainings}
              listReps={item.listReps}
              timeCap={item.timeCap}
            ></WodPanel>
          )}
          keyExtractor={(item) => item.exerciseId}
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

export default connect(mapStateToProps)(MyListWod);
