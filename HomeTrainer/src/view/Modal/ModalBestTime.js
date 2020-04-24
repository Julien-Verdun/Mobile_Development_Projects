import React from "react";
import { View, Modal, Text, Alert, TextInput } from "react-native";
import { getStyle } from "../../style/Modal/modalBestTimeStyle.js";
import { buildStyleSheet, isNormalInteger } from "../../utils/functions.js";
import Button from "./../Other/Button.js";

class ModalBestime extends React.Component {
  constructor(props) {
    super(props);
    this.modalBestTimeStyle = buildStyleSheet(getStyle());
    this.bestTime = undefined;
    this.state = {
      bestTimePanel: undefined,
      modalVisible: this.props.modalVisible,
    };
    // this.bestTimeInput = React.createRef();
    this.handleBestTime = this.handleBestTime.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.checkFormatBestTime = this.checkFormatBestTime.bind(this);
  }

  handleBestTime(bestTime) {
    this.bestTime = bestTime;
  }

  handleChange(text) {
    this.bestTime = text;
    // this.bestTimeInput.current = text;
  }

  checkFormatBestTime() {
    // verification du format du temps hh:mm:ss avec des minutse et secondes < 60
    if (!this.bestTime.includes(":")) {
      return false;
    }
    let testFormat = true;
    this.bestTime.split(":").forEach((elt, index) => {
      if (!isNormalInteger(elt) || elt.length !== 2 || parseInt(elt) >= 60) {
        testFormat = false;
      }
    });
    return testFormat;
  }

  handleSubmit() {
    //verification du format du temps renseigné
    if (this.checkFormatBestTime()) {
      this.props.onSubmitBestTime(this.bestTime);
      this.props.onCancelModal(false);
      this.setState({ modalVisible: !this.state.modalVisible });
    } else {
      //mauvais format renseigné
      this.setState({
        bestTimePanel: (
          <Text style={this.modalBestTimeStyle.bestTimePanel}>
            Erreur : {this.bestTime} n'est pas un temps valide
          </Text>
        ),
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.modalVisible !== this.props.modalVisible) {
      this.setState({ modalVisible: this.props.modalVisible });
    }
  }

  render() {
    // component permettant de renseigner le meilleur score (form)
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
        <View style={this.modalBestTimeStyle.centeredView}>
          <View style={this.modalBestTimeStyle.modalView}>
            <Text style={this.modalBestTimeStyle.modalText}>
              Best time (format hh:mm:ss)
            </Text>

            <View style={this.modalBestTimeStyle.bestTimeForm}>
              <View style={this.modalBestTimeStyle.bestTimeView}>
                <TextInput
                  style={this.modalBestTimeStyle.bestTimeInput}
                  ref={this.bestTimeInput}
                  onChangeText={(text) => this.handleChange(text)}
                  onSubmitEditing={this.handleSubmit}
                  placeholder="hh:mm:ss"
                  keyboardType="numeric"
                ></TextInput>
                <Button
                  title="Submit"
                  styles={{
                    button: this.modalBestTimeStyle.bestTimeButton,
                    title: this.modalBestTimeStyle.buttonWhiteText,
                  }}
                  onPress={this.handleSubmit}
                />
              </View>
              {this.state.bestTimePanel}
            </View>

            <Button
              title="Cancel"
              styles={{
                button: this.modalBestTimeStyle.cancelButton,
                title: this.modalBestTimeStyle.buttonWhiteText,
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

export default ModalBestime;
