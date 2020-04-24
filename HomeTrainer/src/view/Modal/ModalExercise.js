import React from "react";
import { View, Modal, Text, Image, ScrollView } from "react-native";
import { getStyle } from "../../style/Modal/modalExerciseStyle.js";
import { buildStyleSheet } from "../../utils/functions.js";
import Button from "./../Other/Button.js";
import { getDescription, getImage } from "./../../../training/Description.js";

class ModalExercise extends React.Component {
  constructor(props) {
    super(props);
    this.modalExerciseStyle = buildStyleSheet(getStyle());
    this.state = {
      modalVisible: this.props.modalVisible,
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.modalVisible !== this.props.modalVisible) {
      this.setState({ modalVisible: this.props.modalVisible });
    }
  }

  render() {
    let exerciseDescription = getDescription(this.props.exerciseName),
      exerciseImagePath = getImage(this.props.exerciseName);
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
        <View style={this.modalExerciseStyle.centeredView}>
          <View style={this.modalExerciseStyle.modalView}>
            <Text style={this.modalExerciseStyle.modalExerciseName}>
              {this.props.exerciseName}
            </Text>
            <ScrollView style={this.modalExerciseStyle.scrollDescription}>
              <Text style={this.modalExerciseStyle.modalDescription}>
                {exerciseDescription}
              </Text>
            </ScrollView>

            <Image
              style={this.modalExerciseStyle.imageExercise}
              source={exerciseImagePath}
              resizeMethod={"resize"}
              resizeMode={"center"}
            />
            <Button
              title="Cancel"
              styles={{
                button: this.modalExerciseStyle.cancelButton,
                title: this.modalExerciseStyle.buttonWhiteText,
              }}
              onPress={() => {
                this.props.onCancelModal(false);
                this.setState({ modalVisible: !this.state.modalVisible });
              }}
            />
          </View>
        </View>
      </Modal>
    );
  }
}

export default ModalExercise;
