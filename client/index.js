import ReactDOM from "react-dom";
import React from "react";
import {createBrowserHistory} from "history";
import configureStore from "./redux/configureStore";
import {App} from "./app";
import "./lib/jquery-plugins";
import "./components/theme/index.scss";

const theme = {};

// init mixpanel
//init(config.mixpanel.token, config.mixpanel.logger);

// to make hot reload more efficient store and history need to be outside the app
const history = createBrowserHistory();
let store;

/**
 * render application
 */
const render = App => {
  const $app = $("#app");
  if ($app.length) {
    const state = JSON.parse(store ? JSON.stringify(store.getState()) : $app.attr("data-state") || "{}");
    store = configureStore(state, history);
    $app.attr("data-state", null);
    // make the store accessible from global javascript e.g iframe or window.open can call parent store actions
    $app.data("store", store);
    ReactDOM.render(<App store={store} history={history} theme={theme}/>, $app.get(0));
  }
};

// render the app
$(() => {
  // others
  if ('addEventListener' in window) {
    window.addEventListener('load', () => {
      document.body.className = document.body.className.replace(/\bis-loading\b/, '');
    });
    document.body.className += (navigator.userAgent.match(/(MSIE|rv:11\.0)/) ? ' is-ie' : '');
  }
  // render app
  render(App);
  // enable hot reload ;)
  module.hot && module.hot.accept('./app', () => render(require('./app').App));
});

