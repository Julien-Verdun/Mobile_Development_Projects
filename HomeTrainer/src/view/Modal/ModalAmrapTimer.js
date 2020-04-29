import React from "react";
import { View, Modal, Text, TextInput } from "react-native";
import { getStyle } from "../../style/Modal/modalAmrapTimerStyle.js";
import {
  buildStyleSheet,
  isNormalInteger,
  normaliseTime,
} from "../../utils/functions.js";
import { connect } from "react-redux";
import Button from "./../Other/Button.js";

const mapStateToProps = (state) => {
  return { timer: state.timer };
};

class ModalAmrapTimer extends React.Component {
  constructor(props) {
    super(props);
    this.modalAmrapTimerStyle = buildStyleSheet(getStyle());
    this.state = {
      modalVisible: this.props.modalVisible,
      amrapPanel: null,
      totalTime: this.props.timer.amrapTime.totalTime,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.checkTime = this.checkTime.bind(this);
    this.toggleTime = this.toggleTime.bind(this);
    this.handleChangeTotalTime = this.handleChangeTotalTime.bind(this);
  }
  toggleTime() {
    this.props.dispatch({
      type: "TOGGLE_AMRAP_TIME",
      value: {
        amrapTime: {
          totalTime: normaliseTime(this.state.totalTime),
        },
      },
    });
  }

  handleChangeTotalTime(totalTime) {
    this.setState({ totalTime });
  }

  checkTime() {
    // verification du format du temps hh:mm:ss avec des minutse et secondes < 60
    let testFormat = true;

    normaliseTime(this.state.totalTime)
      .split(":")
      .forEach((elt) => {
        if (!isNormalInteger(elt) || elt.length !== 2 || parseInt(elt) >= 60) {
          testFormat = false;
        }
      });

    return testFormat;
  }

  handleSubmit() {
    //verification du format du temps renseigné
    if (this.checkTime()) {
      this.props.onCancelModal(false);
      this.toggleTime();
      this.setState({ modalVisible: !this.state.modalVisible });
    } else {
      //mauvais format renseigné
      this.setState({
        amrapPanel: (
          <Text style={this.modalAmrapTimerStyle.amrapPanel}>
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
        <View style={this.modalAmrapTimerStyle.centeredView}>
          <View style={this.modalAmrapTimerStyle.modalView}>
            <Text style={this.modalAmrapTimerStyle.modalText}>
              AMRAP timer parameters
            </Text>
            {this.state.amrapPanel}

            <View style={this.modalAmrapTimerStyle.amrapTimerForm}>
              <Text style={this.modalAmrapTimerStyle.amrapTimerInputLabel}>
                Total time
              </Text>

              <TextInput
                style={this.modalAmrapTimerStyle.amrapTimerInput}
                defaultValue={normaliseTime(
                  this.props.timer.amrapTime.totalTime
                )}
                onChangeText={(text) => this.handleChangeTotalTime(text)}
                placeholder="hh:mm:ss"
                keyboardType="numeric"
              ></TextInput>
            </View>
            <View style={this.modalAmrapTimerStyle.buttonView}>
              <Button
                title="Cancel"
                styles={{
                  button: this.modalAmrapTimerStyle.cancelButton,
                  title: this.modalAmrapTimerStyle.buttonWhiteText,
                }}
                onPress={() => {
                  this.props.onCancelModal(false);
                  this.setState({ modalVisible: !this.state.modalVisible });
                }}
              />
              <Button
                title="Submit"
                styles={{
                  button: this.modalAmrapTimerStyle.amrapTimerButton,
                  title: this.modalAmrapTimerStyle.buttonWhiteText,
                }}
                onPress={this.handleSubmit}
              />
            </View>
          </View>
        </View>
      </Modal>
    );
  }
}

export default connect(mapStateToProps)(ModalAmrapTimer);
