import {createStore} from "redux";
import {recordFromJS} from "../lib/immutable";
import middleware from "./middleware";
import reducers from "./reducers";

/**
 * @private make sure the initial state is an immutable object
 * @param state
 */
const prepareInitialState = state => Object.keys(state).reduce((obj, key) => {
  obj[key] = recordFromJS(state[key]);
  return obj;
}, {});

export default (defaultState = {}, history) => createStore(reducers, prepareInitialState(defaultState), middleware(history));
