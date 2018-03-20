import initialState from "./initial";
import actionTypes from "./action-types";

export default (state = initialState, action) => {

  switch (action.type) {

    // setup
    case actionTypes.SET_ANCHOR:
      return state.set("anchor", action.payload);

  }
  return state;
};
