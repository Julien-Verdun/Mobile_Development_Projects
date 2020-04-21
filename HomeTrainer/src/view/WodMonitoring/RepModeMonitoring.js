import React from "react";
import { View, Text } from "react-native";
import { getStyle } from "../../style/WodMonitoring/repModeMonitoringStyle.js";
import {
  buildStyleSheet,
  sum,
  timeToSec,
  secToTime,
} from "../../utils/functions.js";
import Button from "../Other/Button.js";

/*
Ce component est la page permettant de suivre un WOD choisi ou créé 
et de suivre sa progression en temps réel
*/

class WodMonitoring extends React.Component {
  constructor(props) {
    super(props);
    this.repModeMonitoringStyle = buildStyleSheet(getStyle());
    this.timer = undefined;
    this.ring = "./../../../assets/Sound/ring.mp3";
    this.sound = undefined;
    this.backgroundColorChgt = "#ffffff00";
    this.state = {
      isStarted: false,
      isEndWod: false,
      time: undefined, // temps au format Date de référence de début de chrono
      displayTime: "00:00:00", // temps affiché sur l'ecran
      storeTime: 0, //temps en sec enregistré lors de l'appui sur Stop
      indexTraining: 0,
      endWodPanel: null,
      round: 0,
      trainingRepNumber: this.props.route.params.listReps[0],
    };
    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
    this.reload = this.reload.bind(this);
    this.increaseTime = this.increaseTime.bind(this);
    this.changeTraining = this.changeTraining.bind(this);
    this.previousTraining = this.previousTraining.bind(this);
    this.nextTraining = this.nextTraining.bind(this);
  }

  start() {
    // si le chrono n'est pas deja en route
    if (!this.state.isStarted && !this.state.isEndWod) {
      this.timer = setInterval(this.increaseTime, 250);
      this.setState({ isStarted: true, time: new Date() });
    }
  }

  increaseTime() {
    // mise a jour du temps affiche et du temps restant
    let currentTime = new Date();
    // si changement du temps
    if (
      timeToSec(this.state.displayTime) !==
      this.state.storeTime + parseInt((currentTime - this.state.time) / 1000)
    ) {
      this.setState({
        displayTime: secToTime(
          this.state.storeTime + parseInt(currentTime - this.state.time) / 1000
        ),
      });
    }
  }

  reload() {
    clearInterval(this.timer);
    this.setState({
      isStarted: false,
      isEndWod: false,
      displayTime: "00:00:00",
      storeTime: 0,
      indexTraining: 0,
      endWodPanel: null,
    });
  }

  stop() {
    if (this.state.isStarted) {
      clearInterval(this.timer);
      this.setState({
        isStarted: false,
        storeTime: timeToSec(this.state.displayTime),
      });
    }
  }

  previousTraining() {
    this.changeTraining(false);
  }

  nextTraining() {
    this.changeTraining(true);
  }

  changeTraining(sensChange) {
    let params = this.props.route.params;
    let nextIndexTraining = this.state.indexTraining,
      nextRound = this.state.round,
      endWodPanel = null,
      isEndWod = false;
    // if next training
    if (sensChange) {
      if (nextIndexTraining === params.listTrainings.length - 1) {
        // if it is the end of the training
        if (this.state.round === params.numberRounds - 1) {
          isEndWod = true;
          endWodPanel = (
            <Text style={this.repModeMonitoringStyle.endWod}>
              End of the training
            </Text>
          );
          this.stop();
        } else {
          nextIndexTraining = 0;
          nextRound += 1;
        }
      } else {
        nextIndexTraining += 1;
      }
    }
    // if previous training
    else {
      if (nextIndexTraining === 0) {
        if (nextRound > 0) {
          nextIndexTraining = params.listTrainings.length - 1;
          nextRound -= 1;
        } else {
          console.log("Impossible");
        }
      } else {
        nextIndexTraining -= 1;
      }
    }
    this.setState({
      indexTraining: nextIndexTraining,
      trainingRepNumber: params.listReps[nextIndexTraining],
      round: nextRound,
      endWodPanel,
      isEndWod,
    });
  }

  componentWillUnmount() {
    if (this.timer != undefined) {
      clearInterval(this.timer);
    }
  }

  render() {
    let params = this.props.route.params;
    return (
      <View
        style={[
          this.repModeMonitoringStyle.globalView,
          { backgroundColor: this.backgroundColorChgt },
        ]}
      >
        <Text style={this.repModeMonitoringStyle.type}>{params.type}</Text>
        <Text style={this.repModeMonitoringStyle.round}>
          Round : {this.state.round}
        </Text>

        <Text style={this.repModeMonitoringStyle.time}>
          {this.state.displayTime}
        </Text>

        <Text style={this.repModeMonitoringStyle.numberRep}>
          {this.state.trainingRepNumber}
        </Text>
        {this.state.endWodPanel}
        <Text style={this.repModeMonitoringStyle.training}>
          {params.listTrainings[this.state.indexTraining]}
        </Text>

        <View style={this.repModeMonitoringStyle.buttonsChange}>
          <Button
            title="Previous"
            styles={{
              button: [
                this.repModeMonitoringStyle.button,
                {
                  backgroundColor:
                    this.state.round === 0 && this.state.indexTraining === 0
                      ? "#6c757d"
                      : "red",
                },
              ],
              title: this.repModeMonitoringStyle.buttonWhiteText,
            }}
            onPress={this.previousTraining}
          />
          <Button
            title="Next"
            styles={{
              button: [
                this.repModeMonitoringStyle.button,
                {
                  backgroundColor: this.state.isEndWod ? "#6c757d" : "red",
                },
              ],
              title: this.repModeMonitoringStyle.buttonWhiteText,
            }}
            onPress={this.nextTraining}
          />
        </View>

        <View style={this.repModeMonitoringStyle.buttons}>
          <Button
            title="Start"
            styles={{
              button: [
                this.repModeMonitoringStyle.button,
                {
                  backgroundColor:
                    this.state.isStarted || this.state.isEndWod
                      ? "#6c757d"
                      : "#34A853",
                },
              ],
              title: this.repModeMonitoringStyle.buttonWhiteText,
            }}
            onPress={this.start}
          />
          <Button
            title="Stop"
            styles={{
              button: [
                this.repModeMonitoringStyle.button,
                {
                  backgroundColor: this.state.isStarted ? "#dc3545" : "#6c757d",
                },
              ],
              title: this.repModeMonitoringStyle.buttonWhiteText,
            }}
            onPress={this.stop}
          />
          <Button
            title="Reload"
            styles={{
              button: [
                this.repModeMonitoringStyle.button,
                {
                  backgroundColor: "#007bff",
                },
              ],
              title: this.repModeMonitoringStyle.buttonWhiteText,
            }}
            onPress={this.reload}
          />
        </View>
      </View>
    );
  }
}

export default WodMonitoring;
