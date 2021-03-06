import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import NavigationBar from "./../NavigationBar.js";

import WodDetails from "./../../view/ListWod/WodDetails.js";
import TrainingCreator from "./../../view/TrainingCreator/TrainingCreator.js";
import TimeModeMonitoring from "./../../view/WodMonitoring/TimeModeMonitoring.js";
import RepModeMonitoring from "./../../view/WodMonitoring/RepModeMonitoring.js";
import ListTrainingBottomTabNavigation from "./ListTrainingBottomTabNavigation.js";
import Evolution from "./../../view/Evolution/Evolution.js";

class TrainingNavigation extends React.Component {
  render() {
    const Stack = createStackNavigator();
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="ListTrainingBottomTabNavigation"
          component={ListTrainingBottomTabNavigation}
          options={({ navigation }) => ({
            headerTitle: (props) => (
              <NavigationBar {...props} title={"WOD"} navigation={navigation} />
            ),
          })}
        />
        <Stack.Screen
          name="TimeModeMonitoring"
          component={TimeModeMonitoring}
          options={({ navigation }) => ({
            headerTitle: (props) => (
              <NavigationBar
                {...props}
                title={"Work"}
                navigation={navigation}
              />
            ),
          })}
        />
        <Stack.Screen
          name="RepModeMonitoring"
          component={RepModeMonitoring}
          options={({ navigation }) => ({
            headerTitle: (props) => (
              <NavigationBar
                {...props}
                title={"Work"}
                navigation={navigation}
              />
            ),
          })}
        />

        <Stack.Screen
          name="WodDetails"
          component={WodDetails}
          options={({ navigation }) => ({
            headerTitle: (props) => (
              <NavigationBar
                {...props}
                title={"WOD Details"}
                navigation={navigation}
              />
            ),
          })}
        />
        <Stack.Screen
          name="TrainingCreator"
          component={TrainingCreator}
          options={({ navigation }) => ({
            headerTitle: (props) => (
              <NavigationBar
                {...props}
                title={"Create your training"}
                navigation={navigation}
              />
            ),
          })}
        />
        <Stack.Screen
          name="Evolution"
          component={Evolution}
          options={({ navigation }) => ({
            headerTitle: (props) => (
              <NavigationBar
                {...props}
                title={"Evolution"}
                navigation={navigation}
              />
            ),
          })}
        />
      </Stack.Navigator>
    );
  }
}

export default TrainingNavigation;
