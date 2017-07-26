import actionTypes from "./action-types";

/**
 * set a virtual window anchor for navigation purpose, using window.location.hash has performance side effect
 * @param anchor
 */
export const setAnchor = anchor => ({type: actionTypes.SET_ANCHOR, payload: anchor});
