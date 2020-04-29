import React from "react";
import { View } from "react-native";
import { getStyle } from "../../style/Login/signUpStyle.js";
import { buildStyleSheet } from "../../utils/functions.js";
import Button from "../Other/Button.js";
import { SearchBar } from "react-native-elements";
import Error from "../Error/Error.js";
import DatePicker from "react-native-datepicker";

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
    };
    this.signUp = this.signUp.bind(this);
  }

  handleChangeFirstName(text) {
    this.setState({ userfirstname: text });
  }
  handleChangeLastName(text) {
    this.setState({ username: text });
  }
  handleChangeLogin(text) {
    this.setState({ login: text });
  }
  handleChangePassword(text) {
    this.setState({ password: text });
  }
  handleChangeConfirmPassword(text) {
    this.setState({ confirmpassword: text });
  }

  checkInfo() {
    return true;
  }

  signUp() {
    if (this.checkInfo()) {
      this.props.navigation.navigate("SignIn");
      console.log("Account added");
    } else {
      console.log("Issue with filled in data");
    }
  }

  render() {
    return (
      <View style={this.signUpStyle.globalView}>
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
            console.log(birthdate);
            this.setState({ birthdate });
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

export default SignUp;
