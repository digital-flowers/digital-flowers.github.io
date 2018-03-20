import initialState from "./initial";
import actionTypes from "./action-types";
import {recordFromJS} from "../../lib/immutable";

export default (state = initialState, action) => {

  switch (action.type) {
    case actionTypes.SHOW_MODAL: {
      const {modalId, props} = action.payload;
      return state
        .set("modalId", modalId)
        .set("isVisible", true)
        .set("props", recordFromJS(props));
    }
    case actionTypes.HIDE_MODAL:
      return state.set("isVisible", false);

    case actionTypes.SHOW_MODAL_ANIMATION:
      return state.set("isVisibleAnimated", true);

    case actionTypes.HIDE_MODAL_ANIMATION:
      return state.set("isVisibleAnimated", false);
  }
  return state;
};
