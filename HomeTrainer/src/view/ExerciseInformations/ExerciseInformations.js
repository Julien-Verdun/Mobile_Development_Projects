import React from "react";
import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  FlatList,
  Image,
} from "react-native";
import { getStyle } from "./../../style/ExerciseInformations/exerciseInformationsStyle.js";
import { buildStyleSheet } from "../../utils/functions.js";
import { Description, getImage } from "./../../../training/Description.js";

class ExerciseInformations extends React.Component {
  /*
    This class is the component displayed to search a particular exercise documentation among the list of all exercise documentation.
    It includes an input text to seek the exercise user are looking for, and the list of exercise'names and documentations.
     */

  constructor(props) {
    super(props);
    this.exerciseInformationsStyle = buildStyleSheet(getStyle());
    this.state = {
      // the content of the input text
      nameExercise: "",
      // the list of exercise's descriptions displayed
      descriptionList: Description,
    };
    this.handleChange = this.handleChange.bind(this);
  }
  // when the textinput is changed, this function modifies the variable nameExercise with the new input content
  // and list of descriptions displayed.
  handleChange(nameExercise) {
    let descriptionList = {};
    Object.keys(Description)
      .filter((exercise) => {
        return exercise.includes(nameExercise);
      })
      .forEach(
        (exercise) => (descriptionList[exercise] = Description[exercise])
      );

    this.setState({ nameExercise, descriptionList });
  }

  render() {
    return (
      <View style={this.exerciseInformationsStyle.globalView}>
        <TextInput
          style={this.exerciseInformationsStyle.exerciseInputName}
          ref={this.exerciseInputName}
          onChangeText={(text) => this.handleChange(text)}
          onSubmitEditing={this.handleSubmit}
          placeholder="Exercise name..."
        ></TextInput>

        <SafeAreaView style={this.exerciseInformationsStyle.listExercises}>
          <FlatList
            data={Object.keys(this.state.descriptionList)}
            renderItem={({ item }) => (
              <View style={this.exerciseInformationsStyle.exercisePanel}>
                <Text style={this.exerciseInformationsStyle.titleExercise}>
                  {item}
                </Text>
                <Text
                  style={this.exerciseInformationsStyle.descriptionExercise}
                >
                  {Description[item] === ""
                    ? "No description available for this exercise, you can check on the internet :)"
                    : Description[item]}
                </Text>
                <Image
                  style={this.exerciseInformationsStyle.imageExercise}
                  source={getImage(item)}
                  resizeMethod={"resize"}
                  resizeMode={"stretch"}
                />
              </View>
            )}
            keyExtractor={(item) =>
              Object.keys(Description).indexOf(item).toString()
            }
          />
        </SafeAreaView>
      </View>
    );
  }
}

export default ExerciseInformations;
