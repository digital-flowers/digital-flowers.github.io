import React from "react";
import PropTypes from "prop-types";
import autobind from "autobind-decorator";
import throttle from "lodash.throttle";
import {Animate} from "./animate";

//check if element visible, see: https://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport/7557433#7557433
const isElementInViewport = (el, offset = 0) => {
  //special bonus for those using jQuery
  if (typeof jQuery === "function" && el instanceof jQuery) {
    el = el[0];
  }
  const rect = el.getBoundingClientRect();
  return (
    rect.bottom >= offset &&
    rect.right >= 0 &&
    rect.top <= (window.innerHeight || document.documentElement.clientHeight) - offset && /*or $(window).height() */
    rect.left <= (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */
  );
};

// track elements visibility
const onVisibilityChange = (el, offset, callback) => {
  let old_visible;
  return () => {
    const visible = isElementInViewport(el, offset);
    if (visible !== old_visible) {
      old_visible = visible;
      if (typeof callback === 'function') {
        callback(visible);
      }
    }
  }
};


/**
 * animated text typing
 * @type {Object}
 */
export class AnimateOnScroll extends React.Component {
  content = null;

  constructor(props) {
    super(props);
    this.state = {
      isVisible: false
    };
  }

  componentDidMount() {
    if (this.content) {
      const {screenOffset} = this.props;
      const handler = throttle(onVisibilityChange(this.content, screenOffset, this.onVisibilityChange), 200);
      //jQuery
      $(window).on('DOMContentLoaded load resize scroll', handler);
    }
  };

  @autobind
  onVisibilityChange(isVisibleNext) {
    const {animationOut} = this.props;
    const {isVisible} = this.state;
    // if no animation out make the animation once :)
    if (isVisible && !animationOut) {
      return;
    }
    this.setState({isVisible: isVisibleNext})
  }

  render() {
    const {children, ...rest} = this.props;
    const {isVisible} = this.state;
    return (
      <Animate {...rest} isVisible={isVisible} innerRef={me => this.content = me} style={{
        opacity: 0
      }}>
        {children}
      </Animate>
    );
  }

}

AnimateOnScroll.propTypes = {
  animationIn: PropTypes.string,
  animationOut: PropTypes.string,
  animationDelay: PropTypes.number,
  screenOffset: PropTypes.string,
  style: PropTypes.object
};

AnimateOnScroll.defaultProps = {
  animationIn: "fadeIn",
  animationOut: "",
  animationDelay: 0,
  screenOffset: 50,
  style: {}
};
