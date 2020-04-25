import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ListWod from "./../../view/ListWod/ListWod.js";
import MyListWod from "./../../view/ListWod/MyListWod.js";

class ListTrainingBottomTabNavigation extends React.Component {
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
        <Tab.Screen name="Trainings" component={ListWod} />
        <Tab.Screen name="My trainings" component={MyListWod} />
      </Tab.Navigator>
    );
  }
}
export default ListTrainingBottomTabNavigation;
