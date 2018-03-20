import config from "../lib/config";
import {combineReducers} from "redux";
import {routerReducer as routing} from "react-router-redux";
// reducers
import i18n from "./i18n/reducer";
import app from "./app/reducer";
import modals from "./modals/reducer";

const reducers = {
  i18n,
  app,
  modals
};

if (!config.isReactNative()) {
  reducers["routing"] = routing;
}
export default combineReducers(reducers);
