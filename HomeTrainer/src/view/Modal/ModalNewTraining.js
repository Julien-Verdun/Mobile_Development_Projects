import React from "react";
import { View, Modal, Text, TextInput, TouchableOpacity } from "react-native";
import { getStyle } from "../../style/Modal/modalNewTrainingStyle.js";
import { buildStyleSheet, isNormalInteger } from "../../utils/functions.js";
import Button from "./../Other/Button.js";
import Error from "./../Error/Error.js";
import { getExerciseNames } from "../../../training/Training.js";
import Autocomplete from "react-native-autocomplete-input";

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
    getExerciseNames().then((exerciseNames) => {
      this.exerciseNames = exerciseNames;
    });
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

              <Autocomplete
                data={this.exerciseNames.filter((exercise) =>
                  exercise.includes(this.state.training)
                )}
                containerStyle={
                  this.modalNewTrainingStyle.newTrainingInputContainer
                }
                listContainerStyle={
                  this.modalNewTrainingStyle.newTrainingListContainer
                }
                defaultValue={this.state.training}
                onChangeText={(text) => this.handleChangeTraining(text, false)}
                hideResults={
                  this.state.training.length < 1 || this.state.hideCompletion
                }
                renderItem={({ item }) => (
                  <TouchableOpacity
                    onPress={() => {
                      this.handleChangeTraining(item, true);
                    }}
                    style={
                      this.modalNewTrainingStyle.newTrainingTouchableOpacity
                    }
                  >
                    <Text style={this.modalNewTrainingStyle.newTrainingText}>
                      {item}
                    </Text>
                  </TouchableOpacity>
                )}
              />

              <TextInput
                style={this.modalNewTrainingStyle.newTrainingInput}
                ref={this.newTrainingInput}
                onChangeText={(text) => this.handleChangeRep(text)}
                onSubmitEditing={this.handleSubmit}
                placeholder={
                  this.props.type === "Classic" ? "Time (in s)" : "Rep number"
                }
                keyboardType="number-pad"
              ></TextInput>
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
