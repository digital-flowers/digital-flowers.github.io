import {reaction} from "dacho";

let types = {
  SHOW_MODAL: null,
  HIDE_MODAL: null,
  SHOW_MODAL_ANIMATION: null,
  HIDE_MODAL_ANIMATION: null
};

types = reaction(types, "MODALS/");

export default types;
