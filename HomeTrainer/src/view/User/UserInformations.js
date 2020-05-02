import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { getStyle } from "../../style/User/userInformationsStyle.js";
import { buildStyleSheet } from "../../utils/functions.js";
import Button from "../Other/Button.js";

import * as ImagePicker from "expo-image-picker";
import Constants from "expo-constants";
import * as Permissions from "expo-permissions";
import { connect } from "react-redux";
import { Icon } from "react-native-elements";
const mapStateToProps = (state) => {
  return { user: state.user };
};

class UserInformations extends React.Component {
  constructor(props) {
    super(props);

    this.userInformationsStyle = buildStyleSheet(getStyle());
    this.state = {
      // login: this.props.user.user.login,
      // password: this.props.user.user.password,
      // userfirstname: this.props.user.user.userfirstname,
      // username: this.props.user.user.username,
      // userId: this.props.user.user.userId,
      // birthdate: this.props.user.user.birthdate,

      image: this.props.user.user.imagePath,
      profile: require("./../../../assets/profileImage/profile_image.jpg"),
    };

    this.toggleUser = this.toggleUser.bind(this);
    this.pickImage = this.pickImage.bind(this);
  }

  toggleUser() {
    this.props.dispatch({
      type: "TOGGLE_MODIFY_USER",
      value: {
        userId: this.props.user.user.userId,
        userfirstname: this.props.user.user.userfirstname,
        username: this.props.user.user.username,
        birthdate: this.props.user.user.birthdate,
        login: this.props.user.user.login,
        password: this.props.user.user.password,
        imagePath: this.state.image,
      },
    });
  }

  componentDidMount() {
    this.getPermissionAsync();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.user.user !== this.props.user.user) {
      this.setState({ image: this.props.user.user.imagePath });
    }
  }

  getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      console.log("Getting ios permission");
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== "granted") {
        alert("Sorry, we need camera roll permissions to make this work!");
      }
    }
  };

  async pickImage() {
    console.log("Picking the image inside library");
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 0.2,
      });
      if (!result.cancelled) {
        console.log("RESULT :", result);
        this.setState({ image: result.uri });
        this.toggleUser();
      }
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <View style={this.userInformationsStyle.globalView}>
        <TouchableOpacity onPress={this.pickImage}>
          <Image
            source={
              this.state.image === null || this.state.image === undefined
                ? this.state.profile
                : { uri: this.state.image }
            }
            style={this.userInformationsStyle.profileImg}
          />
        </TouchableOpacity>

        <View style={this.userInformationsStyle.profilContainer}>
          <TouchableOpacity onPress={() => {}}>
            <Icon name={"edit"} size={32} color="#808080" />
          </TouchableOpacity>

          <Text style={this.userInformationsStyle.name}>
            {this.props.user.user.userfirstname +
              " " +
              this.props.user.user.username}
          </Text>
          <Text style={this.userInformationsStyle.birthdate}>
            {this.props.user.user.birthdate}
          </Text>
          <Text style={this.userInformationsStyle.mail}>
            {this.props.user.user.login}
          </Text>
        </View>
        <Button
          title="My data"
          styles={{
            button: this.userInformationsStyle.primaryButton,
            title: this.userInformationsStyle.buttonWhiteText,
          }}
          onPress={() => this.props.navigation.navigate("UserData")}
        />
      </View>
    );
  }
}

export default connect(mapStateToProps)(UserInformations);
