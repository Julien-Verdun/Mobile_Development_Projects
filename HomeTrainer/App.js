import * as React from "react";
import DrawerNavigator from "./src/navigation/Navigation.js";
import LoginNavigation from "./src/navigation/LoginNavigation.js";
import configureStore from "./Store/configureStore.js";
import { Provider } from "react-redux";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.store = configureStore();
    this.state = {
      isAuth: false,
      wrongAuth: false,
    };
    this.handleSignIn = this.handleSignIn.bind(this);
    this.handleSignOut = this.handleSignOut.bind(this);
    this.isAuth = this.isAuth.bind(this);
  }

  handleSignIn(login, password) {
    let isAuth = this.isAuth(login, password);
    this.setState({ isAuth, wrongAuth: !isAuth });
  }
  handleSignOut() {
    this.setState({ isAuth: false, wrongAuth: false });
  }

  isAuth(login, password) {
    let listCredentials = {
      "": "",
      login: "admin",
      "verdun.julien@yahoo.fr": "admin",
    };
    if (
      Object.keys(listCredentials).includes(login) &&
      listCredentials[login] === password
    ) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    return (
      <Provider store={this.store}>
        {this.state.isAuth ? (
          <DrawerNavigator onSignOut={this.handleSignOut} />
        ) : (
          <LoginNavigation
            onSignIn={this.handleSignIn}
            wrongAuth={this.state.wrongAuth}
          />
        )}

        {/* <DrawerNavigator /> */}
      </Provider>
    );
  }
}

export default App;
