import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import UserData from "./../../view/User/UserData.js";
import UserInformations from "./../../view/User/UserInformations.js";
import NavigationBar from "./../NavigationBar.js";

class UserNavigation extends React.Component {
  render() {
    const Stack = createStackNavigator();
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="UserInformations"
          component={UserInformations}
          options={({ navigation }) => ({
            headerTitle: (props) => (
              <NavigationBar
                {...props}
                title={"My Informations"}
                navigation={navigation}
              />
            ),
          })}
        />
        <Stack.Screen
          name="UserData"
          component={UserData}
          options={({ navigation }) => ({
            headerTitle: (props) => (
              <NavigationBar
                {...props}
                title={"My Data"}
                navigation={navigation}
              />
            ),
          })}
        />
      </Stack.Navigator>
    );
  }
}

export default UserNavigation;
