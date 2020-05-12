import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  Image,
  ActivityIndicator,
} from "react-native";
import { getStyle } from "./../../style/ExerciseInformations/exerciseInformationsStyle.js";
import { buildStyleSheet } from "../../utils/functions.js";
import { SearchBar } from "react-native-elements";
import {
  getAllExerciseDescriptions,
  getAllImagePath,
} from "./../../../API/homeTrainerApi.js";

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
      allDescription: {},
      // the list of exercise's descriptions displayed
      descriptionList: [],
      allImage: {},
      isNetworkConnection: true,
      isLoading: true,
    };
    this.handleChange = this.handleChange.bind(this);
  }
  // when the textinput is changed, this function modifies the variable nameExercise with the new input content
  // and list of descriptions displayed.
  handleChange(nameExercise) {
    let descriptionList = Object.keys(this.state.allDescription).filter(
      (exercise) => {
        return exercise.includes(nameExercise);
      }
    );

    this.setState({ nameExercise, descriptionList });
  }

  componentDidMount() {
    getAllExerciseDescriptions().then((allDescription) => {
      getAllImagePath().then((allImage) => {
        this.setState({
          allDescription,
          descriptionList: Object.keys(allDescription),
          allImage: allImage,
          isLoading: false,
        });
      });
    });
  }

  render() {
    let activityIndicator = this.state.isLoading ? (
      <View style={this.exerciseInformationsStyle.loadingContainer}>
        <ActivityIndicator size="large" />
      </View>
    ) : null;
    return (
      <View style={this.exerciseInformationsStyle.globalView}>
        <SearchBar
          lightTheme
          placeholder="Exercise name..."
          onChangeText={(text) => this.handleChange(text)}
          value={this.state.nameExercise}
          icon={{ type: "font-awesome", name: "search" }}
          containerStyle={
            this.exerciseInformationsStyle.containerExerciseInputName
          }
          inputContainerStyle={
            this.exerciseInformationsStyle.inputContainerExerciseInputName
          }
          inputStyle={this.exerciseInformationsStyle.inputExerciseInputName}
        />

        {activityIndicator}

        <SafeAreaView style={this.exerciseInformationsStyle.listExercises}>
          <FlatList
            data={this.state.descriptionList}
            renderItem={({ item }) => (
              <View style={this.exerciseInformationsStyle.exercisePanel}>
                <Text style={this.exerciseInformationsStyle.titleExercise}>
                  {item}
                </Text>
                <Text
                  style={this.exerciseInformationsStyle.descriptionExercise}
                >
                  {this.state.allDescription[item]}
                </Text>
                <Image
                  style={this.exerciseInformationsStyle.imageExercise}
                  source={this.state.allImage[item]} //
                  resizeMethod={"resize"}
                  resizeMode={"stretch"}
                />
              </View>
            )}
            keyExtractor={(item) =>
              this.state.descriptionList.indexOf(item).toString()
            }
          />
        </SafeAreaView>
      </View>
    );
  }
}

export default ExerciseInformations;
