import React from "react";
import { View } from "react-native";
import { getStyle } from "../../style/Login/signInStyle.js";
import { buildStyleSheet } from "../../utils/functions.js";
import Button from "../Other/Button.js";
import { SearchBar } from "react-native-elements";
import Error from "../Error/Error.js";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.signInStyle = buildStyleSheet(getStyle());
    this.state = {
      login: "",
      password: "",
      textErrorLogin: "",
      textErrorPassword: "",
    };
    this.signIn = this.signIn.bind(this);
    this.passConnection = this.passConnection.bind(this);
  }

  handleChangeLogin(text) {
    this.setState({ login: text });
  }

  checkLogin() {
    if (this.state.login !== "") {
      this.setState({ textErrorLogin: "" });
      return true;
    } else {
      console.log("Wrong login");
      this.setState({ textErrorLogin: "- Wrong login" });
      return false;
    }
  }

  handleChangePassword(text) {
    this.setState({ password: text });
  }

  checkPassword() {
    if (this.state.password !== "") {
      this.setState({ textErrorPassword: "" });
      return true;
    } else {
      console.log("Wrong password");
      this.setState({ textErrorPassword: "- Wrong password" });
      return false;
    }
  }

  passConnection() {
    this.props.onSignIn("", "");
  }

  signIn() {
    let checkLogin = this.checkLogin(),
      checkPassword = this.checkPassword();
    if (checkLogin && checkPassword) {
      this.props.onSignIn(this.state.login, this.state.password);
    }
  }

  render() {
    let errorAuth =
        this.props.wrongAuth === true ? (
          <Error
            typeError={"Alert"}
            errorText={"- Invalid credentials"}
          ></Error>
        ) : null,
      errorCredentials =
        this.state.textErrorLogin === "" &&
        this.state.textErrorPassword === "" ? null : (
          <Error
            typeError={"Warning"}
            height={60}
            errorText={
              (this.state.textErrorLogin === ""
                ? ""
                : this.state.textErrorLogin +
                  (this.state.textErrorPassword === "" ? "" : "\n")) +
              this.state.textErrorPassword
            }
          ></Error>
        );
    return (
      <View style={this.signInStyle.globalView}>
        <SearchBar
          searchIcon={false}
          placeholder="Login..."
          onChangeText={(text) => this.handleChangeLogin(text)}
          value={this.state.login}
          containerStyle={this.signInStyle.containerInput}
          inputContainerStyle={this.signInStyle.inputContainerInput}
          inputStyle={this.signInStyle.inputInput}
        />

        <SearchBar
          searchIcon={false}
          placeholder="Password..."
          onChangeText={(text) => this.handleChangePassword(text)}
          value={this.state.password}
          containerStyle={this.signInStyle.containerInput}
          inputContainerStyle={this.signInStyle.inputContainerInput}
          inputStyle={this.signInStyle.inputInput}
        />

        {errorAuth}
        {errorCredentials}

        <Button
          title="Sign In"
          styles={{
            button: this.signInStyle.signInButton,
            title: this.signInStyle.buttonWhiteText,
          }}
          onPress={this.signIn}
        />
        <Button
          title="Sign Up"
          styles={{
            button: this.signInStyle.signUpButton,
            title: this.signInStyle.buttonWhiteText,
          }}
          onPress={() => {
            this.props.navigation.navigate("SignUp");
          }}
        />
        <Button
          title="Pass connection"
          styles={{
            button: this.signInStyle.byPassButton,
            title: this.signInStyle.buttonWhiteText,
          }}
          onPress={this.passConnection}
        />
      </View>
    );
  }
}

export default SignIn;
