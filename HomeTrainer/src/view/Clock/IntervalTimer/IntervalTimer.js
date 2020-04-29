import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { getStyle } from "../../../style/Clock/IntervalTimer/intervalTimerStyle.js";
import {
  buildStyleSheet,
  secToTime,
  timeToSec,
} from "../../../utils/functions.js";
import { Icon } from "react-native-elements";
import { connect } from "react-redux";
import { Audio } from "expo-av";
import Button from "../../Other/Button.js";
import ModalIntervalTimer from "./../../Modal/ModalIntervalTimer.js";

const mapStateToProps = (state) => {
  return { timer: state.timer };
};

const backgroundColorTraining = "#ff1a1a",
  backgroundColorRest = "#1aff1a",
  backgroundColorDefault = "#0000";

// verifier que le changement des temps est OK
// ecrire automatiquement les temps dans le modale si il existe -> le faire pour bsetTime
// pouruqoi ça bug quand on clique sur stop et qu'on relance ?

class IntervalTimer extends React.Component {
  constructor(props) {
    super(props);
    this.intervalTimerStyle = buildStyleSheet(getStyle());
    this.timer = undefined;
    this.sound = undefined;
    this.ring = require("./../../../../assets/Sound/ring.mp3");
    this.state = {
      isStarted: false,
      time: undefined, // temps au format Date de référence de début de chrono
      displayTime: "00:00:00", // temps affiché sur l'ecran
      storeTime: 0, //temps en sec enregistré lors de l'appui sur Stop
      nextSumPassedRound: 0, // temps en sec qui correspond au prochain changement training - rest
      lapList: [],
      lapFlatList: null,
      modalVisible: false,
      trainingTime: timeToSec(this.props.timer.intervalTime.trainingTime),
      restTime: timeToSec(this.props.timer.intervalTime.restTime),
      totalTime: timeToSec(this.props.timer.intervalTime.totalTime),
      currentState: "training",
      backgroundColorChgt: backgroundColorDefault,
    };
    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
    this.reload = this.reload.bind(this);
    this.saveLap = this.saveLap.bind(this);
    this.increaseTime = this.increaseTime.bind(this);
    this.handleModalVsible = this.handleModalVsible.bind(this);
    this.changeColorBackground = this.changeColorBackground.bind(this);
    this.checkChange = this.checkChange.bind(this);
    this.playSound = this.playSound.bind(this);
  }

  async playSound() {
    if (this.sound === undefined) {
      this.sound = new Audio.Sound();
      try {
        await this.sound.loadAsync(this.ring);
      } catch (error) {
        console.log(error);
      }
    }
    try {
      console.log(this.sound.getStatusAsync);
      await this.sound.playFromPositionAsync(0);
      // Your sound is playing!
    } catch (error) {
      console.log(error);
    }
  }

  handleModalVsible(modalVisible) {
    this.setState({ modalVisible });
  }

  increaseTime() {
    let currentTime = new Date();
    if (
      timeToSec(this.state.displayTime) !==
      this.state.storeTime + parseInt(currentTime - this.state.time) / 1000
    ) {
      this.setState({
        displayTime: secToTime(
          this.state.storeTime + parseInt(currentTime - this.state.time) / 1000
        ),
      });
      // check if it is time to ring and pass from training to break
      this.checkChange();
    }
  }

  checkChange() {
    let currentTime = new Date();
    // if it is not the end of the wod
    if (
      this.state.storeTime + parseInt((currentTime - this.state.time) / 1000) <
      this.state.totalTime
    ) {
      // change currentState from training to rest when it is time, ring the bell, and change background color
      if (
        this.state.storeTime +
          parseInt((currentTime - this.state.time) / 1000) >=
        this.state.nextSumPassedRound
      ) {
        this.playSound().then(console.log("Sound played !"));
        this.changeColorBackground(
          this.state.currentState === "training" ? "rest" : "training"
        );
        this.setState({
          nextSumPassedRound:
            this.state.nextSumPassedRound +
            (this.state.currentState === "training"
              ? this.state.restTime
              : this.state.trainingTime),
          currentState:
            this.state.currentState === "training" ? "rest" : "training",
        });
      }
    }
    // else we stop
    else {
      this.stop();
      this.setState({
        backgroundColorChgt: backgroundColorTraining,
        currentState: "End of the training",
      });
      this.playSound().then(console.log("Sound played !"));
    }
  }

  changeColorBackground(state) {
    let backgroundColorChgt;
    if (state === "training") {
      backgroundColorChgt = backgroundColorTraining;
    } else if (state === "rest") {
      backgroundColorChgt = backgroundColorRest;
    } else {
      backgroundColorChgt = backgroundColorDefault;
    }
    this.setState({ backgroundColorChgt });
  }

  start() {
    // si le chrono n'est pas deja en route
    if (!this.state.isStarted) {
      this.timer = setInterval(this.increaseTime, 250);
      this.setState({
        isStarted: true,
        time: new Date(),
        currentState: "training",
        nextSumPassedRound: this.state.trainingTime,
      });
      this.changeColorBackground("training");
    }
  }

  reload() {
    clearInterval(this.timer);
    this.setState({
      isStarted: false,
      displayTime: "00:00:00",
      storeTime: 0,
      lapList: [],
      lapFlatList: null,
      nextSumPassedRound: this.state.restTime,
    });
    this.changeColorBackground("default");
  }

  stop() {
    if (this.state.isStarted) {
      clearInterval(this.timer);
      this.setState({
        isStarted: false,
        storeTime: timeToSec(this.state.displayTime),
      });
      this.changeColorBackground("default");
    }
  }

  buildFlatList(lapList) {
    return (
      <SafeAreaView style={this.intervalTimerStyle.listWod}>
        <FlatList
          data={lapList}
          renderItem={({ item, index }) => (
            <Text>
              {index} : {item}
            </Text>
          )}
          keyExtractor={(item) => lapList.indexOf(item).toString()}
        />
      </SafeAreaView>
    );
  }

  saveLap() {
    if (
      this.state.isStarted ||
      (!this.state.isStarted &&
        this.state.lapList[this.state.lapList.length - 1] !==
          this.state.displayTime)
    ) {
      let lapList = this.state.lapList.concat(this.state.displayTime);
      let lapFlatList = this.buildFlatList(lapList);
      this.setState({ lapList, lapFlatList });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.timer.intervalTime !== this.props.timer.intervalTime) {
      this.setState({
        trainingTime: timeToSec(this.props.timer.intervalTime.trainingTime),
        restTime: timeToSec(this.props.timer.intervalTime.restTime),
        totalTime: timeToSec(this.props.timer.intervalTime.totalTime),
      });
    }
  }

  componentWillUnmount() {
    if (this.timer != undefined) {
      clearInterval(this.timer);
    }
  }

  render() {
    return (
      <View
        style={[
          this.intervalTimerStyle.globalView,
          { backgroundColor: this.state.backgroundColorChgt },
        ]}
      >
        <ModalIntervalTimer
          modalVisible={this.state.modalVisible}
          onCancelModal={this.handleModalVsible}
        ></ModalIntervalTimer>

        <TouchableOpacity
          onPress={() => {
            this.setState({ modalVisible: true });
          }}
          style={this.intervalTimerStyle.icon}
        >
          <Icon name={"timer"} size={40} color="#808080" />
        </TouchableOpacity>

        <View style={this.intervalTimerStyle.timeResume}>
          <View style={this.intervalTimerStyle.timeItemContainer}>
            <Icon name={"fitness-center"} size={25} color="#808080" />

            <Text style={this.intervalTimerStyle.timeResumeText}>
              {secToTime(this.state.trainingTime)}
            </Text>
          </View>

          <View style={this.intervalTimerStyle.timeItemContainer}>
            <Icon name={"weekend"} size={25} color="#808080" />

            <Text style={this.intervalTimerStyle.timeResumeText}>
              {secToTime(this.state.restTime)}
            </Text>
          </View>

          <View style={this.intervalTimerStyle.timeItemContainer}>
            <Icon name={"all-inclusive"} size={25} color="#808080" />

            <Text style={this.intervalTimerStyle.timeResumeText}>
              {secToTime(this.state.totalTime)}
            </Text>
          </View>
        </View>

        <Text style={this.intervalTimerStyle.order}>
          {this.state.currentState === "training" ? "Train" : "Rest"}
        </Text>
        <Text style={this.intervalTimerStyle.time}>
          {" "}
          {this.state.displayTime}
        </Text>
        <View style={this.intervalTimerStyle.buttons}>
          <Button
            title="Start"
            styles={{
              button: [
                this.intervalTimerStyle.button,
                {
                  backgroundColor: this.state.isStarted ? "#6c757d" : "#34A853",
                },
              ],
              title: this.intervalTimerStyle.buttonWhiteText,
            }}
            onPress={this.start}
          />
          <Button
            title="Stop"
            styles={{
              button: [
                this.intervalTimerStyle.button,
                {
                  backgroundColor: this.state.isStarted ? "#dc3545" : "#6c757d",
                },
              ],
              title: this.intervalTimerStyle.buttonWhiteText,
            }}
            onPress={this.stop}
          />
          <Button
            title="Reload"
            styles={{
              button: [
                this.intervalTimerStyle.button,
                {
                  backgroundColor: "#007bff",
                },
              ],
              title: this.intervalTimerStyle.buttonWhiteText,
            }}
            onPress={this.reload}
          />
        </View>

        <Button
          title="Save Round"
          styles={{
            button: this.intervalTimerStyle.buttonSave,
            title: this.intervalTimerStyle.buttonWhiteText,
          }}
          onPress={this.saveLap}
        />
        {this.state.lapFlatList}
      </View>
    );
  }
}

export default connect(mapStateToProps)(IntervalTimer);
