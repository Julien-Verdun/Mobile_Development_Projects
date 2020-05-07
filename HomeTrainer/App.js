import * as React from "react";
import DrawerNavigator from "./src/navigation/Navigation.js";
import { Provider } from "react-redux";
import Store from "./Store/configureStore";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/es/integration/react";

class App extends React.Component {
  render() {
    let persistor = persistStore(Store);
    return (
      <Provider store={Store}>
        <PersistGate persistor={persistor}>
          <DrawerNavigator />
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
