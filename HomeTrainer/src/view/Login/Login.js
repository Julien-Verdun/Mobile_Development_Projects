import React from "react";
import { View, Text, TextInput } from "react-native";
import { getStyle } from "../../style/Login/loginStyle.js";
import { buildStyleSheet } from "../../utils/functions.js";
import Button from "../Other/Button.js";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.loginStyle = buildStyleSheet(getStyle());
    this.state = {
      login: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
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

  handleSubmit(event) {
    event.preventDefault();
    this.props.navigation.navigate("Home");
    // if (this.isAuth()) {
    //   this.props.navigation.navigate("Home");
    // } else {
    //   console.log("Impossbile to sign in");
    // }
  }

  componentDidMount(prevProps, prevState) {}

  componentDidUpdate(prevProps, prevState) {}

  render() {
    return (
      <View style={this.loginStyle.globalView}>
        <TextInput
          style={this.loginStyle.loginInput}
          ref={this.loginInput}
          onChangeText={(text) => this.handleChangeLogin(text)}
          placeholder="Login"
          keyboardType="email-address"
        />
        <TextInput
          style={this.loginStyle.passwordInput}
          ref={this.passwordInput}
          onChangeText={(text) => this.handleChangePassword(text)}
          onSubmitEditing={this.handleSubmit}
          secureTextEntry={true}
          placeholder="Password"
        />
        <Button
          title="Sign In"
          styles={{
            button: this.loginStyle.primaryButton,
            title: this.loginStyle.buttonWhiteText,
          }}
          onPress={this.handleSubmit}
        />
      </View>
    );
  }
}

export default Login;
