import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Clock from "./../../view/Clock/Clock.js";
import NavigationBar from "./../NavigationBar.js";
class ClockNavigation extends React.Component {
  render() {
    const Stack = createStackNavigator();
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Clock"
          component={Clock}
          options={({ navigation }) => ({
            headerTitle: (props) => (
              <NavigationBar
                {...props}
                title={"Horloge"}
                navigation={navigation}
              />
            ),
          })}
        />
      </Stack.Navigator>
    );
  }
}

export default ClockNavigation;
