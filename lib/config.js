const merge = require("deepmerge");
const path = require('path');
const config = require("../config/default.json");
const {recordFromJS} = require("./immutable");
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
const isProduction = () => getEnv() === "production";

// environment config
const envConfig = merge(config, require(`../config/${getEnv()}.json`));

/**
 * get the server absolute contextName this is useful for emails, desktop deep links, etc...
 * @param {boolean} isDeeplink setting this to true will return the deeplink
 * @return {string} sever absolute context name
 */
const getContextName = (isDeeplink = false) => {
  if (isDeeplink) {
    return envConfig.deeplink.protocol + ":/";
  }
  const port = envConfig.ssl.enabled ? envConfig.ssl.port : envConfig.app.port;
  const portUrl = (port === 80 || port === 443) ? "" : ":" + port;
  return envConfig.app.contextName + portUrl;
};

/**
 * get the project absolute file system path
 * @return {string}
 */
const getRoot = () => path.normalize(__dirname + "/..");

module.exports = Object.assign(recordFromJS(envConfig), {isProduction, getContextName, getRoot, getEnv});
