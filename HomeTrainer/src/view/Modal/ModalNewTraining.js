import React from "react";
import {
  View,
  Modal,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
} from "react-native";
import { getStyle } from "../../style/Modal/modalNewTrainingStyle.js";
import { buildStyleSheet, isNormalInteger } from "../../utils/functions.js";
import Button from "./../Other/Button.js";
import Error from "./../Error/Error.js";
import { getTraining } from "../../../training/Training.js";
// import Autocomplete from "react-native-autocomplete-input";

function getExerciseNames() {
  let data = getTraining(),
    exerciseNames = [];
  data.forEach((wod) => {
    let listTrainings = wod.areDifficulties
      ? wod.training["easy"].listTrainings
      : wod.training.listTrainings;
    listTrainings.forEach((exercise) => {
      if (!exerciseNames.includes(exercise)) {
        exerciseNames.push(exercise);
      }
    });
  });
  return exerciseNames;
}

class ModalNewTraining extends React.Component {
  constructor(props) {
    super(props);
    this.modalNewTrainingStyle = buildStyleSheet(getStyle());
    this.rep = undefined;
    this.state = {
      training: "",
      modalVisible: this.props.modalVisible,
      errorTextExerciseName: "",
      errorTextRepTime: "",
      hideCompletion: false,
    };
    this.exerciseNames = [];
    this.handleChangeTraining = this.handleChangeTraining.bind(this);
    this.handleChangeRep = this.handleChangeRep.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.checkTraining = this.checkTraining.bind(this);
    this.checkRep = this.checkRep.bind(this);
  }

  handleChangeTraining(training, hideCompletion) {
    console.log(training);
    this.setState({ training, hideCompletion });
  }

  handleChangeRep(text) {
    this.rep = text;
  }

  checkTraining(training) {
    if (training !== undefined && training !== "") {
      return true;
    }
    this.setState({
      errorTextExerciseName: "- Please fill in the exercise name",
    });
    return false;
  }

  checkRep(rep) {
    if (rep !== undefined && rep !== "") {
      if (isNormalInteger(rep)) {
        return true;
      }
      this.setState({
        errorTextRepTime:
          "- The " +
          (this.props.type === "Classic" ? "time" : "repetition number") +
          " filled in is not a number",
      });
      return false;
    }
    this.setState({
      errorTextRepTime:
        "Please fill in the " +
        (this.props.type === "Classic" ? "time" : "repetition number"),
    });
    return false;
  }

  handleSubmit() {
    if (this.checkTraining(this.state.training) && this.checkRep(this.rep)) {
      this.props.onSelectTraining(
        this.state.training,
        this.props.type === "Classic" ? this.rep / 60 : this.rep
      );
      this.props.onCancelModal(false);
      this.setState({
        modalVisible: !this.state.modalVisible,
        training: "",
        rep: undefined,
      });
    }
  }

  componentDidMount() {
    this.exerciseNames = getExerciseNames();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.modalVisible !== this.props.modalVisible) {
      this.setState({ modalVisible: this.props.modalVisible });
    }
  }

  render() {
    let errorPanel =
      this.state.errorTextExerciseName !== "" ||
      this.state.errorTextRepTime !== "" ? (
        <Error
          typeError={"Warning"}
          errorText={
            this.state.errorTextExerciseName +
            (this.state.errorTextExerciseName === "" ? "" : "\n") +
            this.state.errorTextRepTime
          }
        ></Error>
      ) : null;

    let autocompletion =
      !this.state.hideCompletion && this.state.training.length > 0 ? (
        <SafeAreaView style={this.modalNewTrainingStyle.autocompleteList}>
          <FlatList
            data={this.exerciseNames.filter((exercise) =>
              exercise.includes(this.state.training)
            )}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => {
                  this.handleChangeTraining(item, true);
                }}
                style={this.modalNewTrainingStyle.newTrainingTouchableOpacity}
              >
                <Text style={this.modalNewTrainingStyle.newTrainingText}>
                  {item}
                </Text>
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item}
          />
        </SafeAreaView>
      ) : null;

    console.log(
      this.exerciseNames.filter((exercise) =>
        exercise.includes(this.state.training)
      ),
      autocompletion
    );
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={this.state.modalVisible}
        onRequestClose={() => {
          this.props.onCancelModal(false);
          this.setState({ modalVisible: !this.state.modalVisible });
        }}
      >
        <View style={this.modalNewTrainingStyle.centeredView}>
          <View style={this.modalNewTrainingStyle.modalView}>
            <Text style={this.modalNewTrainingStyle.modalText}>
              New training
            </Text>
            <View style={this.modalNewTrainingStyle.newTrainingForm}>
              {errorPanel}

              <TextInput
                style={this.modalNewTrainingStyle.newRepInput}
                onChangeText={(text) => this.handleChangeRep(text)}
                onSubmitEditing={this.handleSubmit}
                placeholder={
                  this.props.type === "Classic" ? "Time (in s)" : "Rep number"
                }
                keyboardType="number-pad"
              ></TextInput>
              <View>
                <TextInput
                  style={this.modalNewTrainingStyle.newTrainingInput}
                  value={this.state.training}
                  onChangeText={(text) =>
                    this.handleChangeTraining(text, false)
                  }
                  onSubmitEditing={this.handleSubmit}
                  placeholder={"Exercise"}
                  keyboardType="number-pad"
                ></TextInput>
                {autocompletion}
              </View>

              <View style={this.modalNewTrainingStyle.newTrainingView}>
                <Button
                  title="Cancel"
                  styles={{
                    button: this.modalNewTrainingStyle.cancelButton,
                    title: this.modalNewTrainingStyle.buttonWhiteText,
                  }}
                  onPress={() => {
                    this.props.onCancelModal(false);
                    this.setState({ modalVisible: !this.state.modalVisible });
                  }}
                />
                <Button
                  title="Submit"
                  styles={{
                    button: this.modalNewTrainingStyle.newTrainingButton,
                    title: this.modalNewTrainingStyle.buttonWhiteText,
                  }}
                  onPress={this.handleSubmit}
                />
              </View>
            </View>
          </View>
        </View>
      </Modal>
    );
  }
}

export default ModalNewTraining;
