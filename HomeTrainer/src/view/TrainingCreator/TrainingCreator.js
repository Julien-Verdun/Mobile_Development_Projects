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
      console.log("Entrainement valide");
      return true;
    }
    console.log("Entrainement invalide");
    return false;
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
      fetchData("@MySuperStore:trainings").then((historicTrainings) => {
        storeData(
          "@MySuperStore:trainings",
          historicTrainings + "*-*" + trainingToString
        ).then(console.log("Entrainement registered"));
      });
    }
  }

  handleChangeRound(round) {
    if (isNormalInteger(round)) {
      this.round = round;
    } else {
      console.log("Round n'est pas un nombre entier");
      /*
      prevenir de l'erreur
      */
    }
  }

  addExercise(training, rep) {
    console.log(this.state);
    this.setState({
      listTrainings: this.state.listTrainings.concat(training),
      listReps: this.state.listReps.concat(rep),
    });
  }

  render() {
    return (
      <View style={this.trainingCreatorStyle.globalView}>
        <ModalNewTraining
          modalVisible={this.state.modalVisible}
          onSelectTraining={this.addExercise}
          onCancelModal={this.handleModalVsible}
        ></ModalNewTraining>

        <Text style={this.trainingCreatorStyle.title}>
          Quel WOD vas-te faire perler aujourd'hui ?
        </Text>
        <View style={this.trainingCreatorStyle.typeChoice}>
          <Text style={this.trainingCreatorStyle.textTypeChoice}>
            Choix du type
          </Text>
          <Picker
            selectedValue={this.state.type}
            style={this.trainingCreatorStyle.pickerTypeChoice}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({ type: itemValue })
            }
          >
            <Picker.Item label="Classic" value="Clasic" />
            <Picker.Item label="For Time" value="For Time" />
            <Picker.Item label="AMRAP" value="AMRAP" />
            <Picker.Item label="EMOM" value="EMOM" />
          </Picker>
        </View>
        <View style={this.trainingCreatorStyle.roundChoice}>
          <Text style={this.trainingCreatorStyle.textRoundChoice}>
            Nombre de round
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
            Liste des exos:
          </Text>
          <Text>
            Ajouter un exercice (nom de l'exercice, temps, nombre de rep)
          </Text>

          <SafeAreaView style={this.trainingCreatorStyle.listExercises}>
            <FlatList
              data={this.state.listTrainings}
              renderItem={({ item, index }) => (
                <Text>{this.state.listReps[index] + " : " + item} </Text>
              )}
              keyExtractor={(item) =>
                this.state.listTrainings.indexOf(item).toString()
              }
            />
          </SafeAreaView>

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
        </View>
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
