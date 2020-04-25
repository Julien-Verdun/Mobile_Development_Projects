import React from "react";
import { View, Text, TextInput } from "react-native";
import { getStyle } from "../../style/Login/loginStyle.js";
import { buildStyleSheet } from "../../utils/functions.js";
import Button from "../Other/Button.js";
import { SearchBar } from "react-native-elements";
// import Icon from "react-native-vector-icons/FontAwesome";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.loginStyle = buildStyleSheet(getStyle());
    this.state = {
      login: "",
      password: "",
    };
    this.signIn = this.signIn.bind(this);
    this.signUp = this.signUp.bind(this);
  }

  handleChangeLogin(text) {
    if (this.checkLogin(text)) {
      this.setState({ login: text });
    } else {
      console.log("Invalide login");
    }
  }

  checkLogin(login) {
    return true;
  }

  handleChangePassword(text) {
    if (this.checkPassword(text)) {
      this.setState({ password: text });
    } else {
      console.log("Invalide password");
    }
  }

  checkPassword(password) {
    return true;
  }

  isAuth() {
    let listCredentials = {
      "verdun.julien@yahoo.fr": "motdepasse",
    };
    if (
      Object.keys(listCredentials).includes(this.state.login) &&
      listCredentials[this.state.login] === this.state.password
    ) {
      return true;
    } else {
      return false;
    }
  }

  signIn() {
    this.props.navigation.navigate("ListTrainingBottomTabNavigation");
    // if (this.isAuth()) {
    //   this.props.navigation.navigate("ListTrainingBottomTabNavigation");
    // } else {
    //   console.log("Impossbile to sign in");
    // }
  }

  signUp() {
    this.props.navigation.navigate("ListTrainingBottomTabNavigation");
  }

  render() {
    return (
      <View style={this.loginStyle.globalView}>
        <SearchBar
          searchIcon={false}
          placeholder="Login..."
          onChangeText={(text) => this.handleChangeLogin(text)}
          value={this.state.login}
          containerStyle={this.loginStyle.containerExerciseInputName}
          inputContainerStyle={this.loginStyle.inputContainerExerciseInputName}
          inputStyle={this.loginStyle.inputExerciseInputName}
        />

        <SearchBar
          searchIcon={false}
          placeholder="Password..."
          onChangeText={(text) => this.handleChangePassword(text)}
          value={this.state.password}
          containerStyle={this.loginStyle.containerExerciseInputName}
          inputContainerStyle={this.loginStyle.inputContainerExerciseInputName}
          inputStyle={this.loginStyle.inputExerciseInputName}
        />
        <Button
          title="Sign In"
          styles={{
            button: this.loginStyle.signInButton,
            title: this.loginStyle.buttonWhiteText,
          }}
          onPress={this.signIn}
        />
        <Button
          title="Sign Up"
          styles={{
            button: this.loginStyle.signUpButton,
            title: this.loginStyle.buttonWhiteText,
          }}
          onPress={this.signUp}
        />
        {/* <Icon.Button
          name="facebook"
          backgroundColor="#3b5998"
          // onPress={this.loginWithFacebook}
        >
          Login with Facebook
        </Icon.Button> */}
      </View>
    );
  }
}

export default Login;
