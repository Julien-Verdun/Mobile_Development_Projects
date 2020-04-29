import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import UserData from "./../../view/User/UserData.js";
import NavigationBar from "./../NavigationBar.js";

class UserNavigation extends React.Component {
  render() {
    const Stack = createStackNavigator();
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="UserData"
          component={UserData}
          options={({ navigation }) => ({
            headerTitle: (props) => (
              <NavigationBar
                {...props}
                title={"UserData"}
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
