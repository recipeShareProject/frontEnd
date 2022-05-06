import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Provider } from "react-redux";
import { Switch } from "react-router-dom";
import configureStore, { history } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import Routes from "routes";

export const { store, persistor } = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <PersistGate loading={null} persistor={persistor}>
          {/* TODO : 모바일 container 크기 지정 후 AppWrapper import 하기 */}
          {/* <AppWrapper> */}
          <Switch>
            <Routes />
          </Switch>
          {/* </AppWrapper> */}
        </PersistGate>
      </ConnectedRouter>
    </Provider>
  );
};

export default App;
