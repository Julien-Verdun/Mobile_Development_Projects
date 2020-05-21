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
  getAllExerciseDescriptionsPerPage,
  getAllImagePathPerPage,
} from "./../../../API/homeTrainerApi.js";

class ExerciseInformations extends React.Component {
  /*
    This class is the component displayed to search a particular exercise documentation among the list of all exercise documentation.
    It includes an input text to seek the exercise user are looking for, and the list of exercise'names and documentations.
     */

  constructor(props) {
    super(props);
    this.exerciseInformationsStyle = buildStyleSheet(getStyle());
    this.page = 0;
    this.total_pages = 0;
    // the content of the input text
    this.nameExercise = "";
    this.showLoading = false;
    // monitor input change
    this.firstChange = false;
    this.secondChange = false;
    this.state = {
      allDescription: {},
      // the list of exercise's descriptions displayed
      descriptionList: [],
      allImage: {},
      apiResults: true,
      isLoading: true,
    };
    this.handleChange = this.handleChange.bind(this);
  }
  // when the textinput is changed, this function modifies the variable nameExercise with the new input content
  // and list of descriptions displayed.
  handleChange(nameExercise) {
    this.showLoading = true;
    this.nameExercise = nameExercise;
    this.loadDescription(0);
  }

  loadDescription(page) {
    this.setState({ isLoading: true });
    getAllExerciseDescriptionsPerPage(
      this.nameExercise !== "" ? this.nameExercise : " ",
      page
    ).then((allDescription) => {
      getAllImagePathPerPage(
        this.nameExercise !== "" ? this.nameExercise : " ",
        page
      ).then((allImage) => {
        let apiResults;
        if (allDescription.apiResults && allImage.apiResults) {
          apiResults = true;
          this.page = allDescription.page;
          this.total_pages = allDescription.total_pages;
          let allDescriptionObj = {},
            allImageObj = {};
          allDescription.data.forEach((description, index) => {
            allDescriptionObj[description.exercise] = description.description;
            allImageObj[allImage.data[index].exercise] = {
              uri: allImage.data[index].uri,
            };
          });
          this.showLoading = false;
          if (page === 0) {
            this.setState({
              descriptionList: [...Object.keys(allDescriptionObj)],
              allDescription: Object.assign({}, allDescriptionObj),
              allImage: Object.assign({}, allImageObj),
              apiResults,
              isLoading: false,
            });
          } else {
            this.setState({
              descriptionList: this.state.descriptionList.concat(
                Object.keys(allDescriptionObj)
              ),
              allDescription: Object.assign(
                {},
                this.state.allDescription,
                allDescriptionObj
              ),
              allImage: Object.assign({}, this.state.allImage, allImageObj),
              apiResults,
              isLoading: false,
            });
          }
        } else {
          this.showLoading = false;
          apiResults = false;
          this.setState({
            descriptionList: [
              ...Object.keys(allDescription.data).filter(
                (exercise) =>
                  this.nameExercise === "" ||
                  exercise
                    .toLowerCase()
                    .includes(this.nameExercise.toLowerCase())
              ),
            ],
            allDescription: Object.assign({}, allDescription.data),
            allImage: Object.assign({}, allImage.data),
            apiResults,
            isLoading: false,
          });
        }
      });
    });
  }

  componentDidMount() {
    this.loadDescription(this.page);
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
          value={this.nameExercise}
          showLoading={this.showLoading}
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
            keyExtractor={(item) => item}
            onEndReachedThreshold={0.25}
            onEndReached={() => {
              if (this.state.apiResults && this.page < this.total_pages) {
                this.loadDescription(this.page + 1);
              }
            }}
          />
        </SafeAreaView>
      </View>
    );
  }
}

export default ExerciseInformations;
