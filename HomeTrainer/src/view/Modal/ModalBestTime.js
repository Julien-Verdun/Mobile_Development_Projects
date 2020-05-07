import React from "react";
import { View, Modal, Text, TextInput } from "react-native";
import { getStyle } from "../../style/Modal/modalBestTimeStyle.js";
import {
  buildStyleSheet,
  isNormalInteger,
  normaliseTime,
  bestTimeArray,
} from "../../utils/functions.js";
import Button from "./../Other/Button.js";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return { historic: state.historic };
};

class ModalBestime extends React.Component {
  constructor(props) {
    super(props);
    this.modalBestTimeStyle = buildStyleSheet(getStyle());
    (this.bestTime =
      this.props.historic.historic[this.props.exerciseId].length !== 0
        ? bestTimeArray(
            this.props.historic.historic[this.props.exerciseId].map(
              (elt) => elt.split(";")[1]
            )
          )
        : ""),
      (this.state = {
        bestTimePanel: undefined,
        modalVisible: this.props.modalVisible,
      });
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.checkFormatBestTime = this.checkFormatBestTime.bind(this);
    this.toggleHistoric = this.toggleHistoric.bind(this);
  }

  toggleHistoric() {
    let date = new Date();
    this.props.dispatch({
      type: "TOGGLE_ADD_TIME",
      value: {
        exerciseId: this.props.exerciseId,
        newTime:
          (date.getDate().toString().length === 1 ? "0" : "") +
          date.getDate() +
          "/" +
          (date.getMonth().toString().length === 1 ? "0" : "") +
          date.getMonth() +
          "/" +
          date.getFullYear() +
          ";" +
          this.bestTime,
      },
    });
  }

  handleChange(text) {
    this.bestTime = text;
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
      this.bestTime = normaliseTime(this.bestTime);
      this.props.onCancelModal(false);
      this.toggleHistoric();
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
                  defaultValue={this.bestTime}
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

export default connect(mapStateToProps)(ModalBestime);
