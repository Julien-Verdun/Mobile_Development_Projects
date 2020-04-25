import React from "react";
import { View, Text, SafeAreaView, FlatList } from "react-native";
import { getStyle } from "../../style/ExerciseInformations/trainingInformationsStyle.js";
import { buildStyleSheet } from "../../utils/functions.js";
import {
  TrainingTypeDescription,
  getTrainingTypeDescription,
} from "./../../../training/TrainingTypeDescription.js";

class TrainingInformations extends React.Component {
  /*
    This class is the component displayed to search a particular exercise documentation among the list of all exercise documentation.
    It includes an input text to seek the exercise user are looking for, and the list of exercise'names and documentations.
     */

  constructor(props) {
    super(props);
    this.trainingInformationsStyle = buildStyleSheet(getStyle());
    this.trainingTypeDescription = TrainingTypeDescription;
  }

  render() {
    return (
      <View style={this.trainingInformationsStyle.globalView}>
        <SafeAreaView style={this.trainingInformationsStyle.listTypeTrainings}>
          <FlatList
            data={Object.keys(this.trainingTypeDescription)}
            renderItem={({ item }) => (
              <View style={this.trainingInformationsStyle.typeTrainingPanel}>
                <Text style={this.trainingInformationsStyle.titleTypeTraining}>
                  {item}
                </Text>
                <Text
                  style={this.trainingInformationsStyle.descriptionTypeTraining}
                >
                  {getTrainingTypeDescription(item)}
                </Text>
              </View>
            )}
            keyExtractor={(item) =>
              Object.keys(this.trainingTypeDescription).indexOf(item).toString()
            }
          />
        </SafeAreaView>
      </View>
    );
  }
}

export default TrainingInformations;
