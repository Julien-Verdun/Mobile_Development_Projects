import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import InformationsBottomTabNavigation from "./InformationsBottomTabNavigation.js";
import NavigationBar from "./../NavigationBar.js";
class InformationsNavigation extends React.Component {
  render() {
    const Stack = createStackNavigator();
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Informations"
          component={InformationsBottomTabNavigation}
          options={({ navigation }) => ({
            headerTitle: (props) => (
              <NavigationBar
                {...props}
                title={"Trainings"}
                navigation={navigation}
              />
            ),
          })}
        />
      </Stack.Navigator>
    );
  }
}

export default InformationsNavigation;
