import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./../view/Home/Home.js";
import About from "./../view/About/About.js";
import Login from "./../view/Login/Login.js";
import Clock from "./../view/Clock/Clock.js";
import ListWod from "./../view/ListWod/ListWod.js";
import WodDetails from "./../view/ListWod/WodDetails.js";
import TrainingCreator from "./../view/TrainingCreator/TrainingCreator.js";
import WodMonitoring from "./../view/WodMonitoring/WodMonitoring.js";
import NavigationBar from "./NavigationBar.js";

class Navigation extends React.Component {
  render() {
    const Stack = createStackNavigator();
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={Login}
            options={({ navigation }) => ({
              headerTitle: (props) => (
                <NavigationBar
                  {...props}
                  title={"Se connecter"}
                  navigation={navigation}
                />
              ),
            })}
          />
          <Stack.Screen
            name="Home"
            component={Home}
            options={({ navigation }) => ({
              headerTitle: (props) => (
                <NavigationBar
                  {...props}
                  title={"Accueil"}
                  navigation={navigation}
                />
              ),
            })}
          />
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
          <Stack.Screen
            name="WodMonitoring"
            component={WodMonitoring}
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
            name="ListWod"
            component={ListWod}
            options={({ navigation }) => ({
              headerTitle: (props) => (
                <NavigationBar
                  {...props}
                  title={"WOD"}
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
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default Navigation;
