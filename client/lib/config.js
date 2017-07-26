import merge from "deepmerge";
import config from "../config/default.json";
import envConfig from "../config/env.json"; // this config file are dynamically injected by webpack
module.exports = config; // don't remove this will help the IDE to auto complete our config vars

/**
 * get node environment name (process.env.NODE_ENV)
 * @return {string}
 */
const getEnv = (name = "NODE_ENV", _default = "default") => process.env[name] || _default;

/**
 * check if app is running under production
 * @return {boolean}
 */
const isProduction = () => !__DEV__;

/**
 * check if app is running under react native
 * @return {boolean}
 */
const isReactNative = () => navigator.product === "ReactNative";


/**
 * create env config taking care of on NODE_ENV and ReactNative, the override priority as follow:
 * default.json => native.default.json => {NODE_ENV}.json => native.{NODE_ENV}.json
 * @return {Object}
 */
const getEnvConfig = () => {
  const env = isReactNative() ? getEnv() : "env";
  // development is same as default
  let resolvedConfig = merge(config, {});
  if (isReactNative()) {
    const nativeConfig = require(`../config/native.default.json`); // this config file are dynamically injected by webpack
    const nativeEnvConfig = require(`../config/native.${env}.json`);
    resolvedConfig = merge(resolvedConfig, nativeConfig);
    if (env !== "development") {
      resolvedConfig = merge(resolvedConfig, envConfig);
      resolvedConfig = merge(resolvedConfig, nativeEnvConfig);
    }
  } else {
    // if web then webpack will replace env.json with the {NODE_ENV}.json
    resolvedConfig = merge(resolvedConfig, envConfig);
  }
  return resolvedConfig;
};

module.exports = Object.assign(getEnvConfig(), {isProduction, isReactNative, getEnv});
