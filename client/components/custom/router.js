import React from "react";
import url from "url";
import autobind from "autobind-decorator";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {Redirect as BaseRedirect, Route as BaseRoute, Switch as BaseSwitch} from "react-router";
import {Link} from "react-router-dom";
import * as RouterActions from "react-router-redux";

/**
 * redirect
 */
export const Redirect = BaseRedirect;

/**
 * router link
 */
@connect()
export class RouteLink extends React.Component {
  render() {
    const {withComponent: Component, dispatch, action, onClick, ...rest} = this.props;
    return <Component {...rest} onClick={evt => {
      evt.preventDefault();
      action && dispatch(RouterActions[action](rest.href));
      onClick && onClick(evt);
      return false;
    }}/>
  }
}

RouteLink.propTypes = {
  withComponent: PropTypes.any.isRequired,
  action: PropTypes.oneOf(["push", "replace", "goForward", "goBack"])
};
RouteLink.defaultProps = {
  withComponent: Link,
  action: "push"
};

/**
 * route
 */
export class Route extends React.Component {
  @autobind
  redirectTo() {
    const {
      isAuthenticated,
      onlyAuthenticated,
      onlyUnauthenticated,
      redirectUnAuthenticatedTo,
      redirectAuthenticatedTo
    } = this.props;
    if (onlyAuthenticated && !isAuthenticated) {
      return redirectUnAuthenticatedTo;
    }
    if (onlyUnauthenticated && isAuthenticated) {
      return redirectAuthenticatedTo;
    }
  }

  render() {
    const redirectTo = this.redirectTo();
    const {component: ComponentToWrap, children, ...rest} = this.props;
    if (redirectTo) {
      const redirectToObject = url.parse(redirectTo);
      rest.render = props => <Redirect to={{
        ...redirectToObject,
        state: {from: props.location}
      }}/>;
    } else if (ComponentToWrap) {
      rest.render = props => <ComponentToWrap {...props}/>;
    }

    return (
      <BaseRoute {...rest}>
        {rest.render ? null : children}
      </BaseRoute>
    )
  }
}

Route.propTypes = {
  ...BaseRoute.protoTypes,
  onlyAuthenticated: PropTypes.bool,
  onlyUnauthenticated: PropTypes.bool,
};

Route.defaultProps = {
  ...BaseRoute.defaultProps
};


/**
 * switch
 */
@connect()
export class Switch extends React.Component {
  render() {
    const {
      children,
      redirectAuthenticatedTo,
      redirectUnAuthenticatedTo,
      isAuthenticated
    } = this.props;
    return (
      <BaseSwitch {...this.props} redirectAuthenticatedTo={null} redirectUnAuthenticatedTo={null}>
        {
          [].concat(children).map((child, index) => React.cloneElement(child, {
            key: index,
            redirectAuthenticatedTo,
            redirectUnAuthenticatedTo,
            isAuthenticated
          }))
        }
      </BaseSwitch>
    )
  }
}

Switch.propTypes = {
  ...BaseSwitch.protoTypes,
  redirectAuthenticatedTo: PropTypes.string,
  redirectUnAuthenticatedTo: PropTypes.string,
};

Switch.defaultProps = {
  ...BaseSwitch.defaultProps
};
