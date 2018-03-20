import React from "react";
import PropTypes from "prop-types";
import {identifyUser, init, track, trackLink} from "../../lib/mixpanel";

/**
 * Track MixPanel event
 */
export class Track extends React.Component {

  componentDidMount() {
    const {name, data} = this.props;
    track(name, data);
  };

  render() {
    return (null);
  }

}

Track.propTypes = {
  name: PropTypes.string.isRequired,
  data: PropTypes.object
};

Track.defaultProps = {
  data: {}
};


/**
 * Track MixPanel link event
 */
export class TrackLink extends React.Component {
  render() {
    const {data, name, delegate, children} = this.props;
    const child = React.Children.only(children);
    return React.cloneElement(child, {
      onClick: trackLink(name, data, delegate, child.props.onClick)
    })
  }
}

TrackLink.propTypes = {
  name: PropTypes.string.isRequired,
  data: PropTypes.object,
  delegate: PropTypes.bool
};

TrackLink.defaultProps = {
  data: {},
  delegate: false
};

/**
 * Identify MixPanel User
 */
export class IdentifyUser extends React.Component {

  componentDidMount() {
    const {id, profile, isNew} = this.props;
    identifyUser({id, ...profile}, isNew);
  };

  render() {
    return (null);
  }

}

IdentifyUser.propTypes = {
  id: PropTypes.string,
  profile: PropTypes.object,
  isNew: PropTypes.bool
};

IdentifyUser.defaultProps = {
  isNew: false
};


/**
 * MixPanel Init
 */
export class Init extends React.Component {

  componentDidMount() {
    const {token} = this.props;
    init(token);
  };

  render() {
    return (null);
  }

}

Init.propTypes = {
  token: PropTypes.string.isRequired
};
