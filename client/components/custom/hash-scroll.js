import React from "react";
import {connect} from "react-redux";
import throttle from "lodash.throttle";
import autobind from "autobind-decorator";
import {replace} from "react-router-redux";
import PropTypes from "prop-types";
import {setAnchor} from "../../redux/app/actions";

@connect(({routing: {location}, app: {anchor}}) => ({
  anchor,
  location
}))
export class HashScroll extends React.Component {
  onScroll = null;

  constructor(props) {
    super(props);
    this.onScroll = throttle(evt => {
      evt.stopPropagation();
      const $page = $("html, body");
      const {dispatch, className, anchor, location} = this.props;
      const offset = $page.width() >= 600 ? 140 : 120;
      const anchorEl = $page.find(`.${className}`)
        .toArray()
        .sort((a, b) => a.getBoundingClientRect().bottom < b.getBoundingClientRect().bottom ? 1 : -1)
        .find(item => item.getBoundingClientRect().bottom < offset);
      if (anchorEl) {
        const name = $(anchorEl).attr("name");
        const hash = (location.hash || "#").substr(1);
        //alert(name);
        if (name !== anchor) {
          dispatch(setAnchor(name));
          if (hash) {
            dispatch(replace("#"));
          }
        }
      }
    }, 400);
  };

  componentDidUpdate() {
    this.scrollToHash();
  }

  componentDidMount() {
    this.scrollToHash();
    this.hashToScroll();
  }

  @autobind
  scrollToHash() {
    // scroll based on hash
    const {location} = this.props;
    const $page = $("html, body");
    const name = (location.hash || "#").substr(1);
    const $item = $(`[name='${name}']`);
    if ($item && $item.length) {
      const offset = $page.width() >= 600 ? 113 : 90;
      const stopScroll = evt => $page.stop();
      const scrollTop = $item.offset().top - offset;
      $page
        .off("scroll wheel DOMMouseScroll mousewheel touchmove", stopScroll)
        .on("scroll wheel DOMMouseScroll mousewheel touchmove", stopScroll);
      $page.stop().animate({scrollTop}, 800, "easeInOutQuad", () => $page.off("scroll wheel DOMMouseScroll mousewheel touchmove", stopScroll));
    }
  }

  @autobind
  hashToScroll() {
    const $page = $("html, body");
    // hash based on scroll
    $page
      .off("scroll wheel DOMMouseScroll mousewheel touchmove", this.onScroll)
      .on("scroll wheel DOMMouseScroll mousewheel touchmove", this.onScroll);
  }

  render() {
    return (
      <div className={this.props.className} name="top"/>
    );
  }
}

HashScroll.propTypes = {
  className: PropTypes.string
};
HashScroll.defaultProps = {
  className: "anchor"
};
