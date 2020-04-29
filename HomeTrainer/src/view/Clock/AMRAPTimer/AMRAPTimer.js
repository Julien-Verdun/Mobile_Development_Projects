import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { getStyle } from "../../../style/Clock/AMRAPTimer/amrapTimerStyle.js";
import {
  buildStyleSheet,
  secToTime,
  timeToSec,
} from "../../../utils/functions.js";
import { Icon } from "react-native-elements";
import { connect } from "react-redux";
import { Audio } from "expo-av";
import Button from "../../Other/Button.js";
import ModalAmrapTimer from "./../../Modal/ModalAmrapTimer.js";

const mapStateToProps = (state) => {
  return { timer: state.timer };
};

// verifier que le changement des temps est OK
// ecrire automatiquement les temps dans le modale si il existe -> le faire pour bsetTime
// pouruqoi ça bug quand on clique sur stop et qu'on relance ?

class AMRAPTimer extends React.Component {
  constructor(props) {
    super(props);
    this.amrapTimerStyle = buildStyleSheet(getStyle());
    this.timer = undefined;
    this.sound = undefined;
    this.ring = require("./../../../../assets/Sound/ring.mp3");
    this.state = {
      isStarted: false,
      time: undefined, // temps au format Date de référence de début de chrono
      displayTime: "00:00:00", // temps affiché sur l'ecran
      storeTime: 0, //temps en sec enregistré lors de l'appui sur Stop
      lapList: [],
      lapFlatList: null,
      modalVisible: false,
      totalTime: timeToSec(this.props.timer.amrapTime.totalTime),
      backgroundColorChgt: "#fff0",
    };
    console.log("STATE  : ", this.props);
    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
    this.reload = this.reload.bind(this);
    this.saveLap = this.saveLap.bind(this);
    this.increaseTime = this.increaseTime.bind(this);
    this.handleModalVsible = this.handleModalVsible.bind(this);
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
    // change currentState from training to rest when it is time, ring the bell, and change background color
    if (
      this.state.storeTime + parseInt((currentTime - this.state.time) / 1000) >=
      this.state.totalTime
    ) {
      this.stop();
      this.setState({ backgroundColorChgt: "#ff1a1a" });
      this.playSound().then(console.log("Sound played !"));
    }
  }

  start() {
    // si le chrono n'est pas deja en route
    if (!this.state.isStarted) {
      this.timer = setInterval(this.increaseTime, 250);
      this.setState({
        isStarted: true,
        time: new Date(),
        backgroundColorChgt: "#fff0",
      });
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
      backgroundColorChgt: "#fff0",
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

  buildFlatList(lapList) {
    return (
      <SafeAreaView style={this.amrapTimerStyle.listWod}>
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
    if (prevProps.timer.amrapTime !== this.props.timer.amrapTime) {
      this.setState({
        totalTime: timeToSec(this.props.timer.amrapTime.totalTime),
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
          this.amrapTimerStyle.globalView,
          { backgroundColor: this.state.backgroundColorChgt },
        ]}
      >
        <ModalAmrapTimer
          modalVisible={this.state.modalVisible}
          onCancelModal={this.handleModalVsible}
        ></ModalAmrapTimer>

        <TouchableOpacity
          onPress={() => {
            this.setState({ modalVisible: true });
          }}
          style={this.amrapTimerStyle.icon}
        >
          <Icon name={"timer"} size={40} color="#808080" />
        </TouchableOpacity>

        <View style={this.amrapTimerStyle.timeItemContainer}>
          <Icon name={"all-inclusive"} size={25} color="#808080" />

          <Text style={this.amrapTimerStyle.timeResumeText}>
            {secToTime(this.state.totalTime)}
          </Text>
        </View>

        <Text style={this.amrapTimerStyle.time}> {this.state.displayTime}</Text>
        <View style={this.amrapTimerStyle.buttons}>
          <Button
            title="Start"
            styles={{
              button: [
                this.amrapTimerStyle.button,
                {
                  backgroundColor: this.state.isStarted ? "#6c757d" : "#34A853",
                },
              ],
              title: this.amrapTimerStyle.buttonWhiteText,
            }}
            onPress={this.start}
          />
          <Button
            title="Stop"
            styles={{
              button: [
                this.amrapTimerStyle.button,
                {
                  backgroundColor: this.state.isStarted ? "#dc3545" : "#6c757d",
                },
              ],
              title: this.amrapTimerStyle.buttonWhiteText,
            }}
            onPress={this.stop}
          />
          <Button
            title="Reload"
            styles={{
              button: [
                this.amrapTimerStyle.button,
                {
                  backgroundColor: "#007bff",
                },
              ],
              title: this.amrapTimerStyle.buttonWhiteText,
            }}
            onPress={this.reload}
          />
        </View>

        <Button
          title="Save Round"
          styles={{
            button: this.amrapTimerStyle.buttonSave,
            title: this.amrapTimerStyle.buttonWhiteText,
          }}
          onPress={this.saveLap}
        />
        {this.state.lapFlatList}
      </View>
    );
  }
}

export default connect(mapStateToProps)(AMRAPTimer);
