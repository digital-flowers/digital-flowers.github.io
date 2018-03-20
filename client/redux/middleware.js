import {applyMiddleware} from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import promise from "redux-promise-middleware";
import {routerMiddleware} from "react-router-redux";
import config from "../lib/config";
import errorMiddleware from "./middlewares/error";

export default  history => {
  // global error middleware
  const middleWares = [];

  // error middleware
  middleWares.push(errorMiddleware);

  // routing middleware
  !config.isReactNative() && middleWares.push(routerMiddleware(history));

  // other middleware
  middleWares.push(thunk);
  middleWares.push(promise());

  // logger
  config.middleware.logger && middleWares.push(logger());

  return applyMiddleware(...middleWares);
};
