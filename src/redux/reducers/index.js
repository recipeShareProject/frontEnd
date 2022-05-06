import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import Auth from "./Auth";

const reducers = (history) =>
  combineReducers({
    router: connectRouter(history),
    auth: Auth,
  });
export default reducers;
