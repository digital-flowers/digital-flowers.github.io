const Promise = require("bluebird");

/**
 * a utility to check if a value is a Promise or not
 * @param value
 */
const isPromise = value => value !== null && typeof value === 'object' && typeof value.then === 'function';

/**
 * a utility to resolve an array of promises sequentially
 * @param {Array} array any array of promises, values or a mix
 * @param {Function} func an optional function to create a promises from values if not presented Promise.resolve will be used
 * @return {Promise}
 */
const Sequence = (array, func) => array.reduce((a, b) => a.then(() => {
  let value = (typeof func === "function") ? func(b) : b;
  if (typeof value === "function") {
    value = value();
  }
  return isPromise(value) ? value : Promise.resolve(value);
}), Promise.resolve());

module.exports = {Sequence, isPromise};
