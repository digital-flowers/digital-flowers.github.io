import React, {Component} from "react";
import {Provider} from "react-redux";
import {ConnectedRouter} from "react-router-redux";
import {ThemeProvider} from "styled-components/src";
import {Route} from "./components/custom";
import Routes from "./components/routes";
import PropTypes from "prop-types";

// app component
export class App extends Component {
  render() {
    const {store, history, theme} = this.props;
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <ConnectedRouter history={history}>
            <Route path="/" component={Routes}/>
          </ConnectedRouter>
        </ThemeProvider>
      </Provider>
    );
  }
}

App.propTypes = {
  store: PropTypes.any,
  history: PropTypes.any,
  theme: PropTypes.any
};
