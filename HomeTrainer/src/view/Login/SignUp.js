import React from "react";
import { View } from "react-native";
import { getStyle } from "../../style/Login/signUpStyle.js";
import { buildStyleSheet } from "../../utils/functions.js";
import Button from "../Other/Button.js";
import { SearchBar } from "react-native-elements";
import Error from "../Error/Error.js";
import DatePicker from "react-native-datepicker";
import { connect } from "react-redux";
import { storeUSer } from "./../../../DataStorage/userStorage.js";

const mapStateToProps = (state) => {
  return { user: state.user };
};

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.signUpStyle = buildStyleSheet(getStyle());
    this.state = {
      userfirstname: "",
      username: "",
      birthdate: "",
      login: "",
      password: "",
      confirmpassword: "",
      errorTextFirstName: "",
      errorTextName: "",
      errorTextBirthDate: "",
      errorTextLogin: "",
      errorTextPassword: "",
      errorTextConfirmPassword: "",
    };
    this.signUp = this.signUp.bind(this);
    this.toggleUser = this.toggleUser.bind(this);
  }

  toggleUser() {
    let user = {
      userId: this.state.userfirstname + this.state.username,
      userfirstname: this.state.userfirstname,
      username: this.state.username,
      birthdate: this.state.birthdate,
      login: this.state.login,
      password: this.state.password,
    };
    storeUSer(user).then(() => {
      this.props.dispatch({
        type: "TOGGLE_NEW_USER",
        value: user,
      });
    });
  }

  handleChangeFirstName(text) {
    this.setState({ userfirstname: text, errorTextFirstName: "" });
  }

  checkFirstName() {
    if (this.state.userfirstname) {
      let errorTextFirstName = "- Fill in the user first name.";
      this.setState({ errorTextFirstName });
      return false;
    }
    return true;
  }

  handleChangeLastName(text) {
    this.setState({ username: text, errorTextName: "" });
  }

  checkLastName() {
    if (this.state.username === "") {
      let errorTextLastName = "- Fill in the user name.";
      this.setState({ errorTextLastName });
      return false;
    }
    return true;
  }

  handleChangeBirthdate(birthdate) {
    console.log(birthdate);
    this.setState({ birthdate, errorTextBirthDate: "" });
  }

  checkBirthdate() {
    if (this.state.birthdate === "") {
      let errorTextBirthdate = "- Make sure the birhdate is ok.";
      this.setState({ errorTextBirthdate });
      return false;
    }
    return true;
  }

  handleChangeLogin(text) {
    this.setState({ login: text, errorTextLogin: "" });
  }

  checkLogin() {
    if (
      this.state.login === "" ||
      this.state.login.includes("@") ||
      this.state.login.includes(".")
    ) {
      let errorTextLogin = "- The mail adress has not the right format.";
      this.setState({ errorTextLogin });
      return false;
    }
    return true;
  }

  handleChangePassword(text) {
    this.setState({ password: text, errorTextPassword: "" });
  }

  checkPassword() {
    let reg = /[*_?!:,;]/gi; ///[-[\]{}()*+?.,\\^$|#\\s]/gi;
    if (
      this.state.password === "" ||
      this.state.password.match(reg).length === 0
    ) {
      let errorTextPassword =
        "- The password must include at least 8 characters and at least one special character (*_?!:,;)";
      this.setState({ errorTextPassword });
      return false;
    }
    return true;
  }

  handleChangeConfirmPassword(text) {
    this.setState({ confirmpassword: text, errorTextConfirmPassword: "" });
  }

  checkConfirmPassword() {
    if (this.state.confirmpassword !== this.state.password) {
      let errorTextConfirmPassword = "- Make sure both password are identical.";
      this.setState({ errorTextConfirmPassword });
      return false;
    }
    return true;
  }

  checkInfo() {
    if (
      this.checkFirstName() &&
      this.checkLastName() &&
      this.checkBirthdate() &&
      this.checkLogin() &&
      this.checkPassword() &&
      this.checkConfirmPassword()
    ) {
      return true;
    }
    return false;
  }

  signUp() {
    if (this.checkInfo()) {
      this.toggleUser();
      this.props.navigation.navigate("SignIn");
      console.log("Account added");
    } else {
      console.log("Issue with filled in data");
    }
  }

  render() {
    let errorPanel =
      this.state.errorTextExerciseName !== "" ||
      this.state.errorTextRepTime !== "" ? (
        <Error
          typeError={"Warning"}
          errorText={
            (this.state.errorTextFirstName === "" ? "" : "\n") +
            this.state.errorTextFirstName +
            (this.state.errorTextName === "" ? "" : "\n") +
            this.state.errorTextName +
            (this.state.errorTextBirthDate === "" ? "" : "\n") +
            this.state.errorTextBirthDate +
            (this.state.errorTextLogin === "" ? "" : "\n") +
            this.state.errorTextLogin +
            (this.state.errorTextPassword === "" ? "" : "\n") +
            this.state.errorTextPassword +
            (this.state.errorTextConfirmPassword === "" ? "" : "\n") +
            this.state.errorTextConfirmPassword
          }
        ></Error>
      ) : null;
    return (
      <View style={this.signUpStyle.globalView}>
        {errorPanel}
        <SearchBar
          searchIcon={false}
          placeholder="First Name..."
          onChangeText={(text) => this.handleChangeFirstName(text)}
          value={this.state.login}
          containerStyle={this.signUpStyle.containerInput}
          inputContainerStyle={this.signUpStyle.inputContainerInput}
          inputStyle={this.signUpStyle.inputInput}
        />

        <SearchBar
          searchIcon={false}
          placeholder="Last Name..."
          onChangeText={(text) => this.handleChangeLastName(text)}
          value={this.state.password}
          containerStyle={this.signUpStyle.containerInput}
          inputContainerStyle={this.signUpStyle.inputContainerInput}
          inputStyle={this.signUpStyle.inputInput}
        />

        <DatePicker
          style={this.signUpStyle.datePickerInput}
          date={this.state.birthdate}
          mode="date"
          placeholder="Birth date"
          format="YYYY-MM-DD"
          minDate="1900-01-01"
          maxDate="2100-01-01"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              position: "absolute",
              left: 0,
              top: 4,
              marginLeft: 0,
            },
            dateInput: {
              marginLeft: 36,
            },
          }}
          onOpenModal={console.log("Open modal")}
          onDateChange={(birthdate) => {
            this.handleChangeBirthdate(birthdate);
          }}
        />

        <SearchBar
          searchIcon={false}
          placeholder="Mail..."
          onChangeText={(text) => this.handleChangeLogin(text)}
          value={this.state.login}
          containerStyle={this.signUpStyle.containerInput}
          inputContainerStyle={this.signUpStyle.inputContainerInput}
          inputStyle={this.signUpStyle.inputInput}
        />

        <SearchBar
          searchIcon={false}
          placeholder="Password..."
          onChangeText={(text) => this.handleChangePassword(text)}
          value={this.state.password}
          containerStyle={this.signUpStyle.containerInput}
          inputContainerStyle={this.signUpStyle.inputContainerInput}
          inputStyle={this.signUpStyle.inputInput}
        />

        <SearchBar
          searchIcon={false}
          placeholder="Confirm Password..."
          onChangeText={(text) => this.handleChangeConfirmPassword(text)}
          value={this.state.password}
          containerStyle={this.signUpStyle.containerInput}
          inputContainerStyle={this.signUpStyle.inputContainerInput}
          inputStyle={this.signUpStyle.inputInput}
        />

        <Button
          title="Sign Up"
          styles={{
            button: this.signUpStyle.signUpButton,
            title: this.signUpStyle.buttonWhiteText,
          }}
          onPress={this.signUp}
        />
      </View>
    );
  }
}

export default connect(mapStateToProps)(SignUp);
