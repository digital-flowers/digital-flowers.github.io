import {isPromise} from "../../lib/promises";
import config from "../../lib/config";

export default () => next => action => {
  // If not a promise, continue on
  if (!isPromise(action.payload)) {
    return next(action);
  }

  /**
   * include a property in `meta and evaluate that property to check if this error will be handled locally
   *
   * if (!action.meta.localError) {
     *   // handle error
     * }
   *
   * The error middleware serves to dispatch the initial pending promise to
   * the promise middleware, but adds a `catch`.
   */
  if (!action.meta || !action.meta.localError) {

    // Dispatch initial pending promise, but catch any errors
    return next(action).catch(error => {
      if (config.middleware.logger) {
        console.log(`${action.type} unhandled rejection caught at middleware with reason: ${JSON.stringify(error.message)}.`);
      }

      return error;
    });
  }

  return next(action);
};
