import React from "react";
import { View, Modal, Text, Alert, TextInput } from "react-native";
import { getStyle } from "../../style/Modal/modalNewTrainingStyle.js";
import { buildStyleSheet } from "../../utils/functions.js";
import Button from "./../Other/Button.js";

class ModalNewTraining extends React.Component {
  constructor(props) {
    super(props);
    this.modalNewTrainingStyle = buildStyleSheet(getStyle());
    this.training = undefined;
    this.rep = undefined;
    this.state = {
      errorPanel: null,
      modalVisible: this.props.modalVisible,
    };
    this.handleChangeTraining = this.handleChangeTraining.bind(this);
    this.handleChangeRep = this.handleChangeRep.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeTraining(text) {
    this.training = text;
  }
  handleChangeRep(text) {
    this.rep = text;
  }

  handleSubmit() {
    if (
      this.training !== undefined &&
      this.rep !== undefined &&
      this.training !== "" &&
      this.rep !== ""
    ) {
      this.props.onSelectTraining(this.training, this.rep);
      this.props.onCancelModal(false);
      this.setState({ modalVisible: !this.state.modalVisible });
    } else {
      let errorPanel = (
        <Text style={this.modalNewTrainingStyle.errorPanel}>
          Erreur dans la complétion des données
        </Text>
      );
      this.setState({ errorPanel });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.modalVisible !== this.props.modalVisible) {
      this.setState({ modalVisible: this.props.modalVisible });
    }
  }

  render() {
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
              <TextInput
                style={this.modalNewTrainingStyle.newTrainingInput}
                ref={this.newTrainingInput}
                onChangeText={(text) => this.handleChangeTraining(text)}
                onSubmitEditing={this.handleSubmit}
                placeholder="Training Name"
                keyboardType="default"
              ></TextInput>
              <TextInput
                style={this.modalNewTrainingStyle.newTrainingInput}
                ref={this.newTrainingInput}
                onChangeText={(text) => this.handleChangeRep(text)}
                onSubmitEditing={this.handleSubmit}
                placeholder="Number rep or time (in s)"
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
              {this.state.errorPanel}
            </View>
          </View>
        </View>
      </Modal>
    );
  }
}

export default ModalNewTraining;
