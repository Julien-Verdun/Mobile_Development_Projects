import React from "react";
import { View, Text } from "react-native";
import { getStyle } from "../../style/WodMonitoring/wodMonitoringStyle.js";
import {
  buildStyleSheet,
  sum,
  timeToSec,
  secToTime,
} from "../../utils/functions.js";
import Button from "../Other/Button.js";
// import { Audio } from "expo-av";

/*
Ce component est la page permettant de suivre un WOD choisi ou créé 
et de suivre sa progression en temps réel
*/

class WodMonitoring extends React.Component {
  constructor(props) {
    super(props);
    this.wodMonitoringStyle = buildStyleSheet(getStyle());
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
      trainingLeftTime: parseInt(this.props.route.params.listReps[0] * 60),
    };
    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
    this.reload = this.reload.bind(this);
    this.increaseTime = this.increaseTime.bind(this);
    this.changeTraining = this.changeTraining.bind(this);
    this.changeColorBackground = this.changeColorBackground.bind(this);

    // this.playSound = this.playSound.bind(this);
  }

  // async playSound() {
  //   if (this.sound === undefined) {
  //     this.sound = new Audio.Sound();
  //     try {
  //       await this.sound.loadAsync(require("./../../../assets/Sound/ring.mp3"));
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  //   try {
  //     console.log(this.sound.getStatusAsync);
  //     await this.sound.playFromPositionAsync(0);
  //     // Your sound is playing!
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  increaseTime() {
    // mise a jour du temps affiche et du temps restant
    let currentTime = new Date();
    // si changement du temps
    if (
      timeToSec(this.state.displayTime) !==
      this.state.storeTime + parseInt((currentTime - this.state.time) / 1000)
    ) {
      // changement d'entrainement si besoin
      this.changeTraining();
      let trainingLeftTime =
        this.state.trainingLeftTime === 0
          ? parseInt(
              this.props.route.params.listReps[this.state.indexTraining] * 60
            ) - 1
          : this.state.trainingLeftTime - 1;
      if (trainingLeftTime === 0) {
        this.changeColorBackground();
      }

      this.setState({
        displayTime: secToTime(
          this.state.storeTime + parseInt(currentTime - this.state.time) / 1000
        ),
        trainingLeftTime,
      });
    }
  }

  changeColorBackground() {
    //play music and screen background color
    this.backgroundColorChgt = "#ff222288";
    setTimeout(() => {
      this.backgroundColorChgt = "#0000";
    }, 1000);
  }

  start() {
    // si le chrono n'est pas deja en route
    if (!this.state.isStarted && !this.state.isEndWod) {
      this.timer = setInterval(this.increaseTime, 250);
      this.setState({ isStarted: true, time: new Date() });
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
      trainingLeftTime: parseInt(this.props.route.params.listReps[0] * 60),
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

  changeTraining() {
    let params = this.props.route.params;
    let timeNextTraining =
      this.state.round * sum(params.listReps) +
      sum(params.listReps.slice(0, this.state.indexTraining + 1));
    // si changement d'entrainement
    if (parseInt(timeNextTraining * 60) === timeToSec(this.state.displayTime)) {
      //changement du couleur de fond de l'appli
      // on change d'exos
      let nextIndexTraining =
        this.state.indexTraining === params.listTrainings.length - 1
          ? 0
          : (this.state.indexTraining += 1);
      // et on ring
      // this.playSound().then(console.log("Sound played !"));
      // si debut d'un nouveau round
      if (nextIndexTraining === 0) {
        let nextRound,
          endWodPanel,
          isEndWod = false,
          trainingLeftTime = this.state.trainingLeftTime;
        // si fin des rounds, on annonce la fin
        if (this.state.round === params.numberRounds - 1) {
          isEndWod = true;
          trainingLeftTime = "-";
          endWodPanel = (
            <Text style={this.wodMonitoringStyle.endWod}>FIN DU WOD</Text>
          );
          this.stop();
          // sinon on reprend au debut du round
        } else {
          nextRound = this.state.round + 1;
        }
        this.setState({
          indexTraining: nextIndexTraining,
          round: nextRound,
          endWodPanel,
          isEndWod,
        });
      } else {
        this.setState({
          indexTraining: nextIndexTraining,
        });
      }
    }
  }

  componentDidMount(prevProps, prevState) {
    // chose à faire au chargement de la page
  }

  componentDidUpdate(prevProps, prevState) {
    //chose à faire à la modification du state
    // faire attention a bien comparé les elements du state que l'on souhaite
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
          this.wodMonitoringStyle.globalView,
          { backgroundColor: this.backgroundColorChgt },
        ]}
      >
        <Text style={this.wodMonitoringStyle.type}>{params.type}</Text>

        <Text style={this.wodMonitoringStyle.round}>
          Round : {this.state.round}
        </Text>

        <Text style={this.wodMonitoringStyle.time}>
          {this.state.displayTime}
        </Text>

        <Text style={this.wodMonitoringStyle.leftTime}>
          {this.state.trainingLeftTime}
        </Text>
        {this.state.endWodPanel}
        <Text style={this.wodMonitoringStyle.training}>
          {params.listTrainings[this.state.indexTraining]}
        </Text>

        <View style={this.wodMonitoringStyle.buttons}>
          <Button
            title="Start"
            styles={{
              button: [
                this.wodMonitoringStyle.button,
                {
                  backgroundColor:
                    this.state.isStarted || this.state.isEndWod
                      ? "#6c757d"
                      : "#34A853",
                },
              ],
              title: this.wodMonitoringStyle.buttonWhiteText,
            }}
            onPress={this.start}
          />
          <Button
            title="Stop"
            styles={{
              button: [
                this.wodMonitoringStyle.button,
                {
                  backgroundColor: this.state.isStarted ? "#dc3545" : "#6c757d",
                },
              ],
              title: this.wodMonitoringStyle.buttonWhiteText,
            }}
            onPress={this.stop}
          />
          <Button
            title="Reload"
            styles={{
              button: [
                this.wodMonitoringStyle.button,
                {
                  backgroundColor: "#007bff",
                },
              ],
              title: this.wodMonitoringStyle.buttonWhiteText,
            }}
            onPress={this.reload}
          />
        </View>
      </View>
    );
  }
}

export default WodMonitoring;
