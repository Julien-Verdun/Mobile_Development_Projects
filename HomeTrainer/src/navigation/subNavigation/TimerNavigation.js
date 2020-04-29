import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Clock from "../../view/Clock/Clock.js";
import IntervalTimer from "../../view/Clock/IntervalTimer/IntervalTimer.js";
import TimerType from "../../view/Clock/TimerType.js";
import NavigationBar from "../NavigationBar.js";
import AMRAPTimer from "./../../view/Clock/AMRAPTimer/AMRAPTimer.js";
class TimerNavigation extends React.Component {
  render() {
    const Stack = createStackNavigator();
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="TimerType"
          component={TimerType}
          options={({ navigation }) => ({
            headerTitle: (props) => (
              <NavigationBar
                {...props}
                title={"Timer Type"}
                navigation={navigation}
              />
            ),
          })}
        />
        <Stack.Screen
          name="Clock"
          component={Clock}
          options={({ navigation }) => ({
            headerTitle: (props) => (
              <NavigationBar
                {...props}
                title={"Clasic Timer"}
                navigation={navigation}
              />
            ),
          })}
        />
        <Stack.Screen
          name="AMRAPTimer"
          component={AMRAPTimer}
          options={({ navigation }) => ({
            headerTitle: (props) => (
              <NavigationBar
                {...props}
                title={"AMRAP Timer"}
                navigation={navigation}
              />
            ),
          })}
        />
        <Stack.Screen
          name="IntervalTimer"
          component={IntervalTimer}
          options={({ navigation }) => ({
            headerTitle: (props) => (
              <NavigationBar
                {...props}
                title={"Interval Timer"}
                navigation={navigation}
              />
            ),
          })}
        />
      </Stack.Navigator>
    );
  }
}

export default TimerNavigation;
