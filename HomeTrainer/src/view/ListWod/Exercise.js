import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { getStyle } from "../../style/ListWod/exerciseStyle.js";
import { buildStyleSheet } from "../../utils/functions.js";
import ModalExercise from "./../Modal/ModalExercise.js";

class Exercise extends React.Component {
  constructor(props) {
    super(props);
    this.exerciseStyle = buildStyleSheet(getStyle());
    this.state = { modalVisible: false };
    this.handleModalVsible = this.handleModalVsible.bind(this);
  }
  handleModalVsible(modalVisible) {
    this.setState({ modalVisible });
  }

  render() {
    let modalExercise = (modalExercise = (
      <ModalExercise
        modalVisible={this.state.modalVisible}
        exerciseName={this.props.exerciceName}
        onCancelModal={this.handleModalVsible}
      ></ModalExercise>
    ));
    return (
      <TouchableOpacity
        onPress={() => {
          //affichage du modal
          this.setState({ modalVisible: true });
        }}
        style={this.exerciseStyle.globalView}
      >
        {modalExercise}
        <View style={this.exerciseStyle.globalContent}>
          <Text style={this.exerciseStyle.numberRep}>
            {this.props.type === "Classic"
              ? parseInt(60 * this.props.numberRep) + " secs : "
              : this.props.numberRep + " reps : "}
          </Text>

          <Text style={this.exerciseStyle.exerciceName}>
            {this.props.exerciceName}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

export default Exercise;
