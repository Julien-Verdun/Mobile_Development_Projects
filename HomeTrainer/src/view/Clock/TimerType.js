/*
This component allows user to choose between different type of timer :
    - classic timer : timer continues until it is stop
    - AMRAP time : user defines the total duration and starts the clock
    - Programmable timer (EMOM, Tabata) : user choose a training time, a rest time and a total duration or not
*/

import React from "react";
import { View, Text } from "react-native";
import { getStyle } from "../../style/Clock/timerTypeStyle.js";
import { buildStyleSheet } from "../../utils/functions.js";
import Button from "../Other/Button.js";

class TimerType extends React.Component {
  constructor(props) {
    super(props);
    this.timerTypeStyle = buildStyleSheet(getStyle());
  }

  render() {
    return (
      <View style={this.timerTypeStyle.globalView}>
        <Text style={this.timerTypeStyle.title}>
          Choose the type of timer you want{" "}
        </Text>
        <View style={this.timerTypeStyle.buttons}>
          <Button
            title="Classic timer"
            styles={{
              button: this.timerTypeStyle.primaryButton,
              title: this.timerTypeStyle.buttonWhiteText,
            }}
            onPress={() => {
              this.props.navigation.navigate("Clock");
            }}
          />
          <View style={this.timerTypeStyle.textBloc}>
            <Text style={this.timerTypeStyle.titleBloc}>Classic timer :</Text>
            <Text style={this.timerTypeStyle.descriptionBloc}>
              {" "}
              a classic clock
            </Text>
          </View>
          <Button
            title="AMRAP timer"
            styles={{
              button: this.timerTypeStyle.primaryButton,
              title: this.timerTypeStyle.buttonWhiteText,
            }}
            onPress={() => {
              this.props.navigation.navigate("AMRAPTimer");
            }}
          />
          <View style={this.timerTypeStyle.textBloc}>
            <Text style={this.timerTypeStyle.titleBloc}>AMRAP timer :</Text>
            <Text style={this.timerTypeStyle.descriptionBloc}>
              chosse a total duration, run the clock, and practise until the
              time is off
            </Text>
          </View>
          <Button
            title="Interval timer"
            styles={{
              button: this.timerTypeStyle.primaryButton,
              title: this.timerTypeStyle.buttonWhiteText,
            }}
            onPress={() => {
              this.props.navigation.navigate("IntervalTimer");
            }}
          />
          <View style={this.timerTypeStyle.textBloc}>
            <Text style={this.timerTypeStyle.titleBloc}>Interval timer :</Text>
            <Text style={this.timerTypeStyle.descriptionBloc}>
              choose a training duration, a rest duration,and a total duration
              of number of training session and praticse until time is off.
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

export default TimerType;
