import {lighten, transparentize} from "polished";
import {isColor, resolve} from "../core/util";

// absolute center hack
export const absoluteCenter = () => `
  transform: translate(-50%,-50%);
  position: absolute;
  top: 50%;
  left: 50%;
`;

// absolute center hack
export const absoluteCenterY = () => `
  transform: translateY(-50%);
  position: absolute;
  top: 50%;
`;

export const buttonBackground = (val, hover, focus) => props => {
  const _val = resolve(val)(props);
  const _hover = resolve(hover)(props) || (isColor(_val) ? lighten(0.05, _val) : _val);
  const _focus = resolve(focus)(props) || (isColor(_val) ? lighten(0.1, _val) : _val);
  return `
    ${typeof _val === "function" ? _val() : `background: ${_val};`}  
    &:hover {
      ${typeof _hover === "function" ? _hover() : `background: ${_hover};`}
    }
    &:focus {
      ${typeof _focus === "function" ? _focus() : `background: ${_focus};`}
    }
  `
};

export const buttonWaveColor = val => props => {
  // original value has a separated scope don't change it
  let _val = resolve(val)(props);
  _val = isColor(_val) ? transparentize(0.4, _val) : _val;
  return `
    .waves-ripple {
      background-color: ${_val};
    }
  `
};
