import React from "react";
import { View, Modal, Text, TextInput } from "react-native";
import { getStyle } from "../../style/Modal/modalIntervalTimerStyle.js";
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

class ModalIntervalTimer extends React.Component {
  constructor(props) {
    super(props);
    this.modalIntervalTimerStyle = buildStyleSheet(getStyle());
    this.state = {
      modalVisible: this.props.modalVisible,
      intervalPanel: null,
      trainingTime: this.props.timer.intervalTime.trainingTime,
      restTime: this.props.timer.intervalTime.restTime,
      totalTime: this.props.timer.intervalTime.totalTime,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.checkIntervals = this.checkIntervals.bind(this);
    this.toggleTime = this.toggleTime.bind(this);
    this.handleChangeTrainingTime = this.handleChangeTrainingTime.bind(this);
    this.handleChangeRestTime = this.handleChangeRestTime.bind(this);
    this.handleChangeTotalTime = this.handleChangeTotalTime.bind(this);
  }
  toggleTime() {
    this.props.dispatch({
      type: "TOGGLE_INTERVAL_TIME",
      value: {
        intervalTime: {
          trainingTime: normaliseTime(this.state.trainingTime),
          restTime: normaliseTime(this.state.restTime),
          totalTime: normaliseTime(this.state.totalTime),
        },
      },
    });
  }

  handleChangeTrainingTime(trainingTime) {
    this.setState({ trainingTime });
  }
  handleChangeRestTime(restTime) {
    this.setState({ restTime });
  }
  handleChangeTotalTime(totalTime) {
    this.setState({ totalTime });
  }

  checkIntervals() {
    // verification du format du temps hh:mm:ss avec des minutse et secondes < 60
    let testFormat = true;
    normaliseTime(this.state.trainingTime)
      .split(":")
      .forEach((elt) => {
        if (!isNormalInteger(elt) || elt.length !== 2 || parseInt(elt) >= 60) {
          testFormat = false;
        }
      });
    normaliseTime(this.state.restTime)
      .split(":")
      .forEach((elt) => {
        if (!isNormalInteger(elt) || elt.length !== 2 || parseInt(elt) >= 60) {
          testFormat = false;
        }
      });
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
    if (this.checkIntervals()) {
      this.props.onCancelModal(false);
      this.toggleTime();
      this.setState({ modalVisible: !this.state.modalVisible });
    } else {
      //mauvais format renseigné
      this.setState({
        intervalPanel: (
          <Text style={this.modalIntervalTimerStyle.intervalPanel}>
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
        <View style={this.modalIntervalTimerStyle.centeredView}>
          <View style={this.modalIntervalTimerStyle.modalView}>
            <Text style={this.modalIntervalTimerStyle.modalText}>
              Interval timer parameters
            </Text>
            {this.state.intervalPanel}

            <View style={this.modalIntervalTimerStyle.intervalTimerForm}>
              <Text
                style={this.modalIntervalTimerStyle.intervalTimerInputLabel}
              >
                Training time
              </Text>
              <TextInput
                style={this.modalIntervalTimerStyle.intervalTimerInput}
                defaultValue={normaliseTime(
                  this.props.timer.intervalTime.trainingTime
                )}
                onChangeText={(text) => this.handleChangeTrainingTime(text)}
                placeholder="hh:mm:ss"
                keyboardType="numeric"
              ></TextInput>
              <Text
                style={this.modalIntervalTimerStyle.intervalTimerInputLabel}
              >
                Rest time{" "}
              </Text>

              <TextInput
                style={this.modalIntervalTimerStyle.intervalTimerInput}
                defaultValue={normaliseTime(
                  this.props.timer.intervalTime.restTime
                )}
                onChangeText={(text) => this.handleChangeRestTime(text)}
                placeholder="hh:mm:ss"
                keyboardType="numeric"
              ></TextInput>
              <Text
                style={this.modalIntervalTimerStyle.intervalTimerInputLabel}
              >
                Total time
              </Text>

              <TextInput
                style={this.modalIntervalTimerStyle.intervalTimerInput}
                defaultValue={normaliseTime(
                  this.props.timer.intervalTime.totalTime
                )}
                onChangeText={(text) => this.handleChangeTotalTime(text)}
                placeholder="hh:mm:ss"
                keyboardType="numeric"
              ></TextInput>
            </View>
            <View style={this.modalIntervalTimerStyle.buttonView}>
              <Button
                title="Cancel"
                styles={{
                  button: this.modalIntervalTimerStyle.cancelButton,
                  title: this.modalIntervalTimerStyle.buttonWhiteText,
                }}
                onPress={() => {
                  this.props.onCancelModal(false);
                  this.setState({ modalVisible: !this.state.modalVisible });
                }}
              />
              <Button
                title="Submit"
                styles={{
                  button: this.modalIntervalTimerStyle.intervalTimerButton,
                  title: this.modalIntervalTimerStyle.buttonWhiteText,
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

export default connect(mapStateToProps)(ModalIntervalTimer);
