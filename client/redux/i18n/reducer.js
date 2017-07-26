import initialState from "./initial";
import actionTypes from "./action-types";
import {getResponseData} from "../../lib/api";

export default (state = initialState, action) => {
  switch (action.type) {

    // change language
    case actionTypes.CHANGE_LANGUAGE:
      return state
        .set("catalog", getResponseData(action.payload).catalog);
  }
  return state;
};
