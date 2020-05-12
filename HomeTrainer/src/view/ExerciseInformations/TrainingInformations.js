import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { getStyle } from "../../style/ExerciseInformations/trainingInformationsStyle.js";
import { buildStyleSheet } from "../../utils/functions.js";
import { getAllTrainingTypesDescription } from "./../../../API/homeTrainerApi.js";

class TrainingInformations extends React.Component {
  /*
    This class is the component displayed to search a particular exercise documentation among the list of all exercise documentation.
    It includes an input text to seek the exercise user are looking for, and the list of exercise'names and documentations.
     */

  constructor(props) {
    super(props);
    this.trainingInformationsStyle = buildStyleSheet(getStyle());
    this.state = {
      trainingTypeDescription: [],
      isLoading: true,
    };
  }

  componentDidMount() {
    getAllTrainingTypesDescription().then((trainingTypeDescription) => {
      this.setState({ trainingTypeDescription, isLoading: false });
    });
  }

  render() {
    let activityIndicator = this.state.isLoading ? (
      <View style={this.trainingInformationsStyle.loadingContainer}>
        <ActivityIndicator size="large" />
      </View>
    ) : null;
    return (
      <View style={this.trainingInformationsStyle.globalView}>
        {activityIndicator}
        <SafeAreaView style={this.trainingInformationsStyle.listTypeTrainings}>
          <FlatList
            data={Object.keys(this.state.trainingTypeDescription)}
            renderItem={({ item }) => (
              <View style={this.trainingInformationsStyle.typeTrainingPanel}>
                <Text style={this.trainingInformationsStyle.titleTypeTraining}>
                  {item}
                </Text>
                <Text
                  style={this.trainingInformationsStyle.descriptionTypeTraining}
                >
                  {this.state.trainingTypeDescription[item]}
                </Text>
              </View>
            )}
            keyExtractor={(item) =>
              Object.keys(this.state.trainingTypeDescription)
                .indexOf(item)
                .toString()
            }
          />
        </SafeAreaView>
      </View>
    );
  }
}

export default TrainingInformations;
