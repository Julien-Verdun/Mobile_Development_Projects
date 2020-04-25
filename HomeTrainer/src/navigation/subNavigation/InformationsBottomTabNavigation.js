import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ExerciseInformations from "./../../view/ExerciseInformations/ExerciseInformations.js";
import TrainingInformations from "./../../view/ExerciseInformations/TrainingInformations.js";

class InformationsBottomTabNavigation extends React.Component {
  render() {
    const Tab = createBottomTabNavigator();
    return (
      <Tab.Navigator
        tabBarOptions={{
          labelStyle: {
            textAlign: "center",
            fontSize: 14,
            paddingBottom: 12,
          },
        }}
      >
        <Tab.Screen name="Exercises" component={ExerciseInformations} />
        <Tab.Screen name="Training Types" component={TrainingInformations} />
      </Tab.Navigator>
    );
  }
}

export default InformationsBottomTabNavigation;
