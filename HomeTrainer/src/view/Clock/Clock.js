import React from "react";
import { View, Text, SafeAreaView, FlatList } from "react-native";
import { getStyle } from "../../style/Clock/clockStyle.js";
import {
  buildStyleSheet,
  secToTime,
  timeToSec,
} from "../../utils/functions.js";
import Button from "../Other/Button.js";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.clockStyle = buildStyleSheet(getStyle());
    this.timer = undefined;
    this.state = {
      isStarted: false,
      time: undefined, // temps au format Date de référence de début de chrono
      displayTime: "00:00:00", // temps affiché sur l'ecran
      storeTime: 0, //temps en sec enregistré lors de l'appui sur Stop
      lapList: [],
      lapFlatList: null,
    };
    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
    this.reload = this.reload.bind(this);
    this.saveLap = this.saveLap.bind(this);
    this.increaseTime = this.increaseTime.bind(this);
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
    }
  }

  start() {
    // si le chrono n'est pas deja en route
    if (!this.state.isStarted) {
      this.timer = setInterval(this.increaseTime, 250);
      this.setState({ isStarted: true, time: new Date() });
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
      <SafeAreaView style={this.clockStyle.listWod}>
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
    return (
      <View style={this.clockStyle.globalView}>
        <Text style={this.clockStyle.title}>Clock ! </Text>
        <Text style={this.clockStyle.time}> {this.state.displayTime}</Text>
        <View style={this.clockStyle.buttons}>
          <Button
            title="Start"
            styles={{
              button: [
                this.clockStyle.button,
                {
                  backgroundColor: this.state.isStarted ? "#6c757d" : "#34A853",
                },
              ],
              title: this.clockStyle.buttonWhiteText,
            }}
            onPress={this.start}
          />
          <Button
            title="Stop"
            styles={{
              button: [
                this.clockStyle.button,
                {
                  backgroundColor: this.state.isStarted ? "#dc3545" : "#6c757d",
                },
              ],
              title: this.clockStyle.buttonWhiteText,
            }}
            onPress={this.stop}
          />
          <Button
            title="Reload"
            styles={{
              button: [
                this.clockStyle.button,
                {
                  backgroundColor: "#007bff",
                },
              ],
              title: this.clockStyle.buttonWhiteText,
            }}
            onPress={this.reload}
          />
        </View>

        <Button
          title="Save Round"
          styles={{
            button: this.clockStyle.buttonSave,
            title: this.clockStyle.buttonWhiteText,
          }}
          onPress={this.saveLap}
        />
        {this.state.lapFlatList}
      </View>
    );
  }
}

export default Clock;
