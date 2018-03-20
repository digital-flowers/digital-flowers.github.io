import actionTypes from "./action-types";

/**
 * show modal
 * @param modalId
 * @param props
 */
export const showModal = (modalId, props = {}) => dispatch => {
  dispatch({
    type: actionTypes.SHOW_MODAL,
    payload: {modalId, props}
  });
  setTimeout(() => dispatch(showModalAnimation()), 100);
};

/**
 * hide modal
 */
export const hideModal = modalId => dispatch => {
  dispatch(hideModalAnimation());
  setTimeout(() => dispatch({
    type: actionTypes.HIDE_MODAL,
    payload: {modalId}
  }), 500);
};

/**
 * show animation done
 */
export const showModalAnimation = () => ({type: actionTypes.SHOW_MODAL_ANIMATION});

/**
 * hide animation started
 */
export const hideModalAnimation = () => ({type: actionTypes.HIDE_MODAL_ANIMATION});
