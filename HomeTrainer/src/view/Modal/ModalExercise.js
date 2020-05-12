import React from "react";
import {
  View,
  Modal,
  Text,
  Image,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { getStyle } from "../../style/Modal/modalExerciseStyle.js";
import { buildStyleSheet } from "../../utils/functions.js";
import Button from "./../Other/Button.js";
import {
  getImagePath,
  getExerciseDescription,
} from "./../../../API/homeTrainerApi.js";

class ModalExercise extends React.Component {
  constructor(props) {
    super(props);
    this.modalExerciseStyle = buildStyleSheet(getStyle());
    this.state = {
      modalVisible: this.props.modalVisible,
      isLoading: true,
      exerciseDescription: null,
      exerciseImagePath: null,
    };
  }

  componentDidMount() {
    getExerciseDescription(this.props.exerciseName).then(
      (exerciseDescription) => {
        getImagePath(this.props.exerciseName).then((exerciseImagePath) => {
          this.setState({
            exerciseDescription,
            exerciseImagePath,
            isLoading: false,
          });
        });
      }
    );
  }

  componentDidUpdate(prevProps) {
    if (prevProps.modalVisible !== this.props.modalVisible) {
      this.setState({ modalVisible: this.props.modalVisible });
    }
  }

  render() {
    let activityIndicator = this.state.isLoading ? (
      <View style={this.modalExerciseStyle.loadingContainer}>
        <ActivityIndicator size="large" />
      </View>
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
        <View style={this.modalExerciseStyle.centeredView}>
          <View style={this.modalExerciseStyle.modalView}>
            <Text style={this.modalExerciseStyle.modalExerciseName}>
              {this.props.exerciseName}
            </Text>

            <ScrollView style={this.modalExerciseStyle.scrollDescription}>
              <Text style={this.modalExerciseStyle.modalDescription}>
                {this.state.exerciseDescription}
              </Text>
            </ScrollView>
            {activityIndicator}
            <Image
              style={this.modalExerciseStyle.imageExercise}
              source={this.state.exerciseImagePath}
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
