import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import {isLteIE} from "../../lib/device";

/**
 * animated text typing
 * @type {Object}
 */
export class Animate extends React.Component {
  timeoutId;

  constructor(props) {
    super(props);
    this.state = props.animateOnMount ? {
      animation: props.isVisible ? props.animationIn : props.animationOut
    } : {};
  }

  componentWillReceiveProps(nextProps) {
    const {isVisible} = nextProps;
    if (isVisible !== this.props.isVisible) {
      const {animationIn, animationOut} = this.props;
      clearTimeout(this.timeoutId);
      this.setState({animation: isVisible ? animationIn : animationOut});
    }
  }

  componentWillUnmount() {
    clearTimeout(this.timeoutId);
  }

  render() {
    const {children, animationInDelay, animationOutDelay, style, isVisible, innerRef, className} = this.props;
    const {animation} = this.state;
    const classes = classNames("animated", animation, className);
    if (isLteIE(9) || !animation) {
      style.opacity = isVisible ? 1 : 0;
    }
    return (
      <div className={classes} ref={innerRef} style={{
        animationDelay: `${isVisible ? animationInDelay : animationOutDelay}s`,
        pointerEvents: isVisible ? "all" : "none",
        ...style
      }}>
        {children}
      </div>
    );
  }
}

Animate.propTypes = {
  animationIn: PropTypes.string,
  animationOut: PropTypes.string,
  animationInDelay: PropTypes.number,
  animationOutDelay: PropTypes.number,
  style: PropTypes.object,
  isVisible: PropTypes.bool,
  innerRef: PropTypes.func,
  className: PropTypes.string,
  animateOnMount: PropTypes.bool
};

Animate.defaultProps = {
  animationIn: "fadeIn",
  animationOut: "fadeOut",
  className: "",
  animationInDelay: 0,
  animationOutDelay: 0,
  isVisible: true,
  style: {},
  animateOnMount: true
};
