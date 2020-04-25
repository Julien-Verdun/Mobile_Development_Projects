import React from "react";
import { View, Text, Image } from "react-native";
import { getStyle } from "./../style/Navigation/sideBarMenuStyle.js";
import { buildStyleSheet } from "./../utils/functions.js";
import { Avatar, Icon } from "react-native-elements";

class SideBarMenu extends React.Component {
  constructor(props) {
    super(props);
    this.sideBarMenuStyle = buildStyleSheet(getStyle());
    this.items = [
      {
        navOptionThumb: "rowing",
        navOptionName: "Training",
        screenToNavigate: "TrainingNavigation",
      },
      {
        navOptionThumb: "alarm",
        navOptionName: "Clock",
        screenToNavigate: "ClockNavigation",
      },
      {
        navOptionThumb: "help",
        navOptionName: "Informations",
        screenToNavigate: "InformationsNavigation",
      },
      {
        navOptionThumb: "info",
        navOptionName: "About",
        screenToNavigate: "AboutNavigation",
      },
      {
        navOptionThumb: "settings",
        navOptionName: "Settings",
        screenToNavigate: "SettingsNavigation",
      },
    ];
  }

  render() {
    return (
      <View style={this.sideBarMenuStyle.sideMenuContainer}>
        <Avatar
          rounded
          //   icon={{ name: "user", type: "font-awesome" }}
          iconStyle={{ width: 50, height: 50 }}
          source={require("./../../assets/logoApp.png")}
          onPress={() => console.log("Works!")}
          activeOpacity={0.7}
          containerStyle={{ flex: 2, marginLeft: 20, marginTop: 115 }}
        />

        <View
          style={{
            width: "100%",
            height: 1,
            backgroundColor: "#e2e2e2",
            marginTop: 15,
          }}
        />
        <View style={{ width: "100%" }}>
          {this.items.map((item, key) => (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                paddingTop: 10,
                paddingBottom: 10,
                backgroundColor:
                  global.currentScreenIndex === key ? "#e0dbdb" : "#ffffff",
              }}
              key={key}
            >
              <View style={{ marginRight: 10, marginLeft: 20 }}>
                <Icon name={item.navOptionThumb} size={25} color="#808080" />
              </View>
              <Text
                style={{
                  fontSize: 15,
                  color: global.currentScreenIndex === key ? "red" : "black",
                }}
                onPress={() => {
                  global.currentScreenIndex = key;
                  this.props.navigation.navigate(item.screenToNavigate);
                }}
              >
                {item.navOptionName}
              </Text>
            </View>
          ))}
        </View>
      </View>
    );
  }
}

export default SideBarMenu;
