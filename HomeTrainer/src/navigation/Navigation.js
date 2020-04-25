import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Icon } from "react-native-elements";

import InformationsNavigation from "./subNavigation/InformationsNavigation.js";
import AboutNavigation from "./subNavigation/AboutNavigation.js";
import ClockNavigation from "./subNavigation/ClockNavigation.js";
import TrainingNavigation from "./subNavigation/TrainingNavigation.js";
import SettingsNavigation from "./subNavigation/SettingsNavigation.js";

class DrawerNavigator extends React.Component {
  render() {
    const Drawer = createDrawerNavigator();
    return (
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName={"TrainingNavigation"}
          // drawerContent={(props) => <SideBarMenu {...props} />}
        >
          <Drawer.Screen
            name="TrainingNavigation"
            component={TrainingNavigation}
            options={{
              drawerLabel: "Training",
              drawerIcon: ({}) => (
                <Icon name={"rowing"} size={25} color="#808080" />
              ),
            }}
          />
          <Drawer.Screen
            name="Clock"
            component={ClockNavigation}
            options={{
              drawerLabel: "Clock",
              drawerIcon: ({}) => (
                <Icon name={"alarm"} size={25} color="#808080" />
              ),
            }}
          />
          <Drawer.Screen
            name="Informations"
            component={InformationsNavigation}
            options={{
              drawerLabel: "Informations",
              drawerIcon: ({}) => (
                <Icon name={"help"} size={25} color="#808080" />
              ),
            }}
          />
          <Drawer.Screen
            name="About"
            component={AboutNavigation}
            options={{
              drawerLabel: "About",
              drawerIcon: ({}) => (
                <Icon name={"info"} size={25} color="#808080" />
              ),
            }}
          />
          <Drawer.Screen
            name="Settings"
            component={SettingsNavigation}
            options={{
              drawerLabel: "Settings",
              drawerIcon: ({}) => (
                <Icon name={"settings"} size={25} color="#808080" />
              ),
            }}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }
}

export default DrawerNavigator;
