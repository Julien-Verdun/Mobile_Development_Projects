import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
// import { Icon } from "react-native-elements";

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
    this.SignOut = this.SignOut.bind(this);
  }

  // SignOut() {
  //     this.onSignOut();
  //     return null;
  //   }

  SignOut() {
    this.props.onSignOut();
    return null;
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
              drawerLabel: "My data",
              // drawerIcon: ({}) => (
              //   <Icon name={"person"} size={25} color="#808080" />
              // ),
            }}
          />
          <Drawer.Screen
            name="TrainingNavigation"
            component={TrainingNavigation}
            options={{
              drawerLabel: "Training",
              // drawerIcon: ({}) => (
              //   <Icon name={"rowing"} size={25} color="#808080" />
              // ),
            }}
          />
          <Drawer.Screen
            name="TimerNavigation"
            component={TimerNavigation}
            options={{
              drawerLabel: "Timer",
              // drawerIcon: ({}) => (
              //   <Icon name={"alarm"} size={25} color="#808080" />
              // ),
            }}
          />
          <Drawer.Screen
            name="InformationsNavigation"
            component={InformationsNavigation}
            options={{
              drawerLabel: "Informations",
              // drawerIcon: ({}) => (
              //   <Icon name={"help"} size={25} color="#808080" />
              // ),
            }}
          />
          <Drawer.Screen
            name="AboutNavigation"
            component={AboutNavigation}
            options={{
              drawerLabel: "About",
              // drawerIcon: ({}) => (
              //   <Icon name={"info"} size={25} color="#808080" />
              // ),
            }}
          />

          <Drawer.Screen
            name="SettingsNavigation"
            component={SettingsNavigation}
            options={{
              drawerLabel: "Settings",
              // drawerIcon: ({}) => (
              //   <Icon name={"settings"} size={25} color="#808080" />
              // ),
            }}
          />

          <Drawer.Screen
            name="SignOut"
            component={this.SignOut} //() => SignOut(this.props)}
            // component={() => {
            //   this.props.onSignOut();
            //   return null;
            // }}
            options={{
              drawerLabel: "Sign out",
              // drawerIcon: ({}) => (
              //   <Icon name={"cancel"} size={25} color="#808080" />
              // ),
            }}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }
}

// function SignOut(props) {
//   props.onSignOut();
//   return null;
// }

export default DrawerNavigator;
