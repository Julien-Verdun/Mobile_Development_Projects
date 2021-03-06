import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
} from "react-native";
import { getStyle } from "./../style/Navigation/sideBarMenuStyle.js";
import { buildStyleSheet } from "./../utils/functions.js";
import { Icon } from "react-native-elements";

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.sideBarMenuStyle = buildStyleSheet(getStyle());
  }
  render() {
    return (
      <TouchableOpacity
        style={this.sideBarMenuStyle.listItem}
        onPress={() =>
          this.props.navigation.navigate(this.props.item.component)
        }
      >
        <Icon name={this.props.item.icon} size={32} color="#808080" />
        <Text style={this.sideBarMenuStyle.title}>{this.props.item.name}</Text>
      </TouchableOpacity>
    );
  }
}

class SideBarMenu extends React.Component {
  constructor(props) {
    super(props);
    this.sideBarMenuStyle = buildStyleSheet(getStyle());

    this.routes = [
      // {
      //   icon: "person",
      //   name: "Historic",
      //   component: "UserNavigation",
      // },
      {
        icon: "fitness-center",
        name: "Training",
        component: "TrainingNavigation",
      },
      {
        icon: "alarm",
        name: "Timer",
        component: "TimerNavigation",
      },
      {
        icon: "help",
        name: "Informations",
        component: "InformationsNavigation",
      },
      {
        icon: "info",
        name: "About",
        component: "AboutNavigation",
      },
      {
        icon: "settings",
        name: "Settings",
        component: "SettingsNavigation",
      },
    ];
  }

  render() {
    return (
      <View style={this.sideBarMenuStyle.container}>
        <View style={this.sideBarMenuStyle.profilContainer}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("UserNavigation")}
          >
            <Image
              source={require("./../../assets/homeTrainerLogo512.png")}
              style={this.sideBarMenuStyle.profileImg}
            />
          </TouchableOpacity>

          <Text style={{ fontWeight: "bold", fontSize: 16, marginTop: 10 }}>
            Personal historic
          </Text>
        </View>
        <View style={this.sideBarMenuStyle.sidebarDivider}></View>

        <SafeAreaView style={this.sideBarMenuStyle.listRoutes}>
          <FlatList
            style={{ width: "100%", marginLeft: 30 }}
            data={this.routes}
            renderItem={({ item }) => (
              <Item item={item} navigation={this.props.navigation} />
            )}
            keyExtractor={(item) => item.name}
          />
        </SafeAreaView>
      </View>
    );
  }
}

export default SideBarMenu;
