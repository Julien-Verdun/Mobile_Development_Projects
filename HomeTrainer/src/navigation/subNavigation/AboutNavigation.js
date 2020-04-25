import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import About from "./../../view/About/About.js";
import NavigationBar from "./../NavigationBar.js";
class AboutNavigation extends React.Component {
  render() {
    const Stack = createStackNavigator();
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="About"
          component={About}
          options={({ navigation }) => ({
            headerTitle: (props) => (
              <NavigationBar
                {...props}
                title={"A propos"}
                navigation={navigation}
              />
            ),
          })}
        />
      </Stack.Navigator>
    );
  }
}
export default AboutNavigation;
