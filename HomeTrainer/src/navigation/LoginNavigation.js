import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SignIn from "./../view/Login/SignIn.js";
import SignUp from "../view/Login/SignUp.js";

class LoginNavigation extends React.Component {
  constructor(props) {
    super(props);
    this.onSignIn = this.onSignIn.bind(this);
  }

  onSignIn(login, password) {
    this.props.onSignIn(login, password);
  }

  render() {
    const Stack = createStackNavigator();
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="SignIn"
            component={(props) => (
              <SignIn
                {...props}
                onSignIn={this.onSignIn}
                wrongAuth={this.props.wrongAuth}
              />
            )}
          />
          <Stack.Screen name="SignUp" component={SignUp} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default LoginNavigation;
