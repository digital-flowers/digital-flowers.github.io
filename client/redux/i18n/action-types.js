import {reaction} from "dacho";

let types = {
  CHANGE_LANGUAGE: null
};

types = reaction(types, "I18N/");

export default types;
