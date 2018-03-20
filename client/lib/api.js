import Promise from "bluebird";
import AsyncStorage from "@callstack/async-storage";
import axios, {CancelToken} from "axios";
import {recordFromJS} from "./immutable";
import config from "./config";

const api = axios.create(config.api);

// handle cancel request
let cancelTokens = [];

//noinspection JSClosureCompilerSyntax
export const createCancelToken = name => new CancelToken(cancel => cancelTokens.push({name, cancel}));

export const cancelRequest = (...names) => {
  cancelTokens = cancelTokens.filter(({name, cancel}) => {
    if (names.indexOf(name) >= 0) {
      try {
        cancel(`API call for '${name}' has been canceled!`);
      } catch (e) {
        console.log(e);
      }
      return false;
    }
    return true;
  })
};
export const isRequestCanceled = payload => payload && axios.isCancel(payload);

export const getResponseError = payload => {
  let data = {};
  // find errors
  if (payload && payload.response) {
    if (payload.response.data && typeof payload.response.data === "object") {
      data = payload.response.data;
    }
    data.message = data.message || payload.message || payload.response.statusText || payload.response.data;
    data.status = data.status || payload.response.status;
  }

  return recordFromJS({
    ...data,
    message: data.message || payload.message || config.errors.default,
    status: data.status || 500
  });
};

export const getResponseData = payload => {
  let data;
  if (payload && payload.response && payload.response.data) {
    data = payload.response.data;
  } else if (payload && payload.data) {
    data = payload.data;
  } else {
    data = payload;
  }
  return recordFromJS(data);
};

// set Authorization token
api.interceptors.request.use(config => AsyncStorage.getItem("sessionId").then(token => {
  config.headers["Authorization"] = token;
  return config;
}), error => Promise.reject(error));

export default api;
