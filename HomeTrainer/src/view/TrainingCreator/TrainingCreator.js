import React from "react";
import {
  View,
  Text,
  TextInput,
  Picker,
  SafeAreaView,
  FlatList,
} from "react-native";
import { getStyle } from "../../style/TrainingCreator/trainingCreatorStyle.js";
import { buildStyleSheet, isNormalInteger } from "../../utils/functions.js";
import Button from "./../Other/Button.js";
import { storeData, fetchData } from "./../../utils/dataStorage.js";
import ModalNewTraining from "./../Modal/ModalNewTraining.js";
import Error from "./../Error/Error.js";

class TrainingCreator extends React.Component {
  constructor(props) {
    super(props);
    this.trainingCreatorStyle = buildStyleSheet(getStyle());
    this.round = 0;
    this.state = {
      type: "Classic",
      listTrainings: [],
      listReps: [],
      modalVisible: false,
      errorTextTraining: "",
      errorTextRound: "",
    };
    this.checkTraining = this.checkTraining.bind(this);
    this.createTheTraining = this.createTheTraining.bind(this);
    this.handleChangeRound = this.handleChangeRound.bind(this);
    this.addExercise = this.addExercise.bind(this);
    this.modalNewTraining;
    this.handleModalVsible = this.handleModalVsible.bind(this);
  }

  handleModalVsible(modalVisible) {
    this.setState({ modalVisible });
  }

  checkTraining() {
    if (
      !this.state.type.includes(";") &&
      this.round > 0 &&
      this.state.listTrainings.length > 0
    ) {
      this.setState({
        errorTextTraining: "",
      });
      return true;
    } else {
      this.setState({
        errorTextTraining: "- Training doesn't respect the rules",
      });
      return false;
    }
  }

  createTheTraining() {
    //verifier que les champs sont bien remplis
    if (this.checkTraining()) {
      let trainingToString =
        this.state.type +
        "*;*" +
        this.round +
        "*;*" +
        this.state.listTrainings.toString() +
        "*;*" +
        this.state.listReps.toString();
      console.log("Creation de l'entrainement : ", trainingToString);
      fetchData("@MySuperStore:trainings").then((historicTrainings) => {
        storeData(
          "@MySuperStore:trainings",
          historicTrainings + "*-*" + trainingToString
        ).then(console.log("Entrainement registered"));
      });
      this.props.navigation.navigate("ListWod");
    }
  }

  handleChangeRound(round) {
    if (isNormalInteger(round)) {
      this.round = round;
      this.setState({
        errorTextRound: "",
      });
    } else {
      this.setState({
        errorTextRound: "- Round n'est pas un nombre entier",
      });
    }
  }

  addExercise(training, rep) {
    this.setState({
      listTrainings: this.state.listTrainings.concat(training),
      listReps: this.state.listReps.concat(rep),
    });
  }

  render() {
    let errorPanel =
      this.state.errorTextRound !== "" ||
      this.state.errorTextTraining !== "" ? (
        <Error
          typeError={"Warning"}
          errorText={
            this.state.errorTextRound +
            (this.state.errorTextRound === "" ? "" : "\n") +
            this.state.errorTextTraining
          }
        ></Error>
      ) : null;
    return (
      <View style={this.trainingCreatorStyle.globalView}>
        <ModalNewTraining
          modalVisible={this.state.modalVisible}
          onSelectTraining={this.addExercise}
          onCancelModal={this.handleModalVsible}
          type={this.state.type}
        ></ModalNewTraining>

        <Text style={this.trainingCreatorStyle.title}>
          Create your own training !
        </Text>
        {errorPanel}
        <View style={this.trainingCreatorStyle.typeChoice}>
          <Text style={this.trainingCreatorStyle.textTypeChoice}>
            Training type
          </Text>
          <Picker
            selectedValue={this.state.type}
            style={this.trainingCreatorStyle.pickerTypeChoice}
            onValueChange={(itemValue) => this.setState({ type: itemValue })}
          >
            <Picker.Item label="Classic" value="Classic" />
            <Picker.Item label="For Time" value="For Time" />
            <Picker.Item label="AMRAP" value="AMRAP" />
            <Picker.Item label="EMOM" value="EMOM" />
          </Picker>
        </View>
        <View style={this.trainingCreatorStyle.roundChoice}>
          <Text style={this.trainingCreatorStyle.textRoundChoice}>
            Nummber of rounds
          </Text>
          <TextInput
            style={this.trainingCreatorStyle.roundInput}
            ref={this.bestTimeInput}
            onChangeText={(text) => this.handleChangeRound(text)}
            placeholder="0"
            keyboardType="numeric"
          ></TextInput>
        </View>
        <View style={this.trainingCreatorStyle.listTraining}>
          <Text style={this.trainingCreatorStyle.listTrainingTitle}>
            Exercises list :
          </Text>
          <Text style={this.trainingCreatorStyle.listTrainingPrecision}>
            Add the exercices one by one (exercise name and time or repetition
            number)
          </Text>

          <SafeAreaView style={this.trainingCreatorStyle.listExercises}>
            <FlatList
              data={this.state.listTrainings}
              renderItem={({ item, index }) => (
                <Text style={this.trainingCreatorStyle.exerciseItem}>
                  {(this.state.type === "Classic"
                    ? parseInt(this.state.listReps[index] * 60) + " sec"
                    : this.state.listReps[index] + " rep") +
                    " : " +
                    item}{" "}
                </Text>
              )}
              keyExtractor={(item) =>
                this.state.listTrainings.indexOf(item).toString()
              }
            />
          </SafeAreaView>
        </View>
        <Button
          title="Add an exercise"
          styles={{
            button: this.trainingCreatorStyle.addExerciseButton,
            title: this.trainingCreatorStyle.buttonWhiteText,
          }}
          onPress={() => {
            this.setState({ modalVisible: true });
          }}
        />
        <Button
          title="Create the training"
          styles={{
            button: this.trainingCreatorStyle.primaryButton,
            title: this.trainingCreatorStyle.buttonWhiteText,
          }}
          onPress={() => this.createTheTraining()}
        />
      </View>
    );
  }
}

export default TrainingCreator;
