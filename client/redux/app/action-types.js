import {reaction} from "dacho";

let types = {
  SET_ANCHOR: null
};

types = reaction(types, "APP/");

export default types;
