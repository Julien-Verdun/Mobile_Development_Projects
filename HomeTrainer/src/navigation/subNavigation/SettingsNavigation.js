import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Settings from "./../../view/Settings/Settings.js";
import NavigationBar from "./../NavigationBar.js";

class SettingsNavigation extends React.Component {
  render() {
    const Stack = createStackNavigator();
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Settings"
          component={Settings}
          options={({ navigation }) => ({
            headerTitle: (props) => (
              <NavigationBar
                {...props}
                title={"Settings"}
                navigation={navigation}
              />
            ),
          })}
        />
      </Stack.Navigator>
    );
  }
}

export default SettingsNavigation;
