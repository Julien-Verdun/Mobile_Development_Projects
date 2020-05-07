import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import InformationsNavigation from "./subNavigation/InformationsNavigation.js";
import AboutNavigation from "./subNavigation/AboutNavigation.js";
import TimerNavigation from "./subNavigation/TimerNavigation.js";
import TrainingNavigation from "./subNavigation/TrainingNavigation.js";
import SettingsNavigation from "./subNavigation/SettingsNavigation.js";
import UserNavigation from "./subNavigation/UserNavigation.js";
import SideBarMenu from "./SideBarMenu.js";

class DrawerNavigator extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const Drawer = createDrawerNavigator();
    return (
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName={"TrainingNavigation"}
          drawerContent={(props) => <SideBarMenu {...props} />}
        >
          <Drawer.Screen
            name="UserNavigation"
            component={UserNavigation}
            options={{
              drawerLabel: "Historic",
            }}
          />
          <Drawer.Screen
            name="TrainingNavigation"
            component={TrainingNavigation}
            options={{
              drawerLabel: "Training",
            }}
          />
          <Drawer.Screen
            name="TimerNavigation"
            component={TimerNavigation}
            options={{
              drawerLabel: "Timer",
            }}
          />
          <Drawer.Screen
            name="InformationsNavigation"
            component={InformationsNavigation}
            options={{
              drawerLabel: "Informations",
            }}
          />
          <Drawer.Screen
            name="AboutNavigation"
            component={AboutNavigation}
            options={{
              drawerLabel: "About",
            }}
          />

          <Drawer.Screen
            name="SettingsNavigation"
            component={SettingsNavigation}
            options={{
              drawerLabel: "Settings",
            }}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }
}

export default DrawerNavigator;
