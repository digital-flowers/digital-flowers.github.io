webpackJsonp([0],{

/***/ 109:
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.App = undefined;

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(84);

var _reactRouterRedux = __webpack_require__(85);

var _src = __webpack_require__(859);

var _custom = __webpack_require__(171);

var _routes = __webpack_require__(274);

var _routes2 = _interopRequireDefault(_routes);

var _propTypes = __webpack_require__(9);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// app component
var _ref = _jsx(_custom.Route, {
  path: "/",
  component: _routes2.default
});

var App = exports.App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          store = _props.store,
          history = _props.history,
          theme = _props.theme;

      return _jsx(_reactRedux.Provider, {
        store: store
      }, void 0, _jsx(_src.ThemeProvider, {
        theme: theme
      }, void 0, _jsx(_reactRouterRedux.ConnectedRouter, {
        history: history
      }, void 0, _ref)));
    }
  }]);

  return App;
}(_react.Component);

App.propTypes = {
  store: _propTypes2.default.any,
  history: _propTypes2.default.any,
  theme: _propTypes2.default.any
};

/***/ }),

/***/ 169:
/***/ (function(module, exports) {

module.exports = {"mixpanel":{"logger":true,"token":"","userFields":{}},"errors":{"default":"Ops! Something Went Wrong."},"resources":{"images":"/public/images","icons":"/public/images/icons","videos":"/public/videos","fonts":"/public/fonts"},"middleware":{"logger":true},"moment":{"dayFormat":{"lastDay":"[Yesterday]","sameDay":"[Today]","nextDay":"[Tomorrow]","lastWeek":"[last] dddd","nextWeek":"dddd","sameElse":"L"}},"upload":{"profilePhoto":{"size":10000000,"width":340,"height":340,"extensions":["png","jpg","jpeg"]}}}

/***/ }),

/***/ 170:
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Animate = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(9);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(315);

var _classnames2 = _interopRequireDefault(_classnames);

var _device = __webpack_require__(277);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * animated text typing
 * @type {Object}
 */
var Animate = exports.Animate = function (_React$Component) {
  _inherits(Animate, _React$Component);

  function Animate(props) {
    _classCallCheck(this, Animate);

    var _this = _possibleConstructorReturn(this, (Animate.__proto__ || Object.getPrototypeOf(Animate)).call(this, props));

    _this.state = props.animateOnMount ? {
      animation: props.isVisible ? props.animationIn : props.animationOut
    } : {};
    return _this;
  }

  _createClass(Animate, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var isVisible = nextProps.isVisible;

      if (isVisible !== this.props.isVisible) {
        var _props = this.props,
            animationIn = _props.animationIn,
            animationOut = _props.animationOut;

        clearTimeout(this.timeoutId);
        this.setState({ animation: isVisible ? animationIn : animationOut });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearTimeout(this.timeoutId);
    }
  }, {
    key: "render",
    value: function render() {
      var _props2 = this.props,
          children = _props2.children,
          animationInDelay = _props2.animationInDelay,
          animationOutDelay = _props2.animationOutDelay,
          style = _props2.style,
          isVisible = _props2.isVisible,
          innerRef = _props2.innerRef,
          className = _props2.className;
      var animation = this.state.animation;

      var classes = (0, _classnames2.default)("animated", animation, className);
      if ((0, _device.isLteIE)(9) || !animation) {
        style.opacity = isVisible ? 1 : 0;
      }
      return _react2.default.createElement(
        "div",
        { className: classes, ref: innerRef, style: _extends({
            animationDelay: (isVisible ? animationInDelay : animationOutDelay) + "s",
            pointerEvents: isVisible ? "all" : "none"
          }, style) },
        children
      );
    }
  }]);

  return Animate;
}(_react2.default.Component);

Animate.propTypes = {
  animationIn: _propTypes2.default.string,
  animationOut: _propTypes2.default.string,
  animationInDelay: _propTypes2.default.number,
  animationOutDelay: _propTypes2.default.number,
  style: _propTypes2.default.object,
  isVisible: _propTypes2.default.bool,
  innerRef: _propTypes2.default.func,
  className: _propTypes2.default.string,
  animateOnMount: _propTypes2.default.bool
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

/***/ }),

/***/ 171:
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _router = __webpack_require__(273);

Object.keys(_router).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _router[key];
    }
  });
});

var _animate = __webpack_require__(170);

Object.keys(_animate).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _animate[key];
    }
  });
});

var _animateOnScroll = __webpack_require__(271);

Object.keys(_animateOnScroll).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _animateOnScroll[key];
    }
  });
});

var _hashScroll = __webpack_require__(272);

Object.keys(_hashScroll).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _hashScroll[key];
    }
  });
});

/***/ }),

/***/ 172:
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dacho = __webpack_require__(138);

var types = {
  SET_ANCHOR: null
};

types = (0, _dacho.reaction)(types, "APP/");

exports.default = types;

/***/ }),

/***/ 262:
/***/ (function(module, exports, __webpack_require__) {

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _reactDom = __webpack_require__(219);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

var _history = __webpack_require__(703);

var _configureStore = __webpack_require__(284);

var _configureStore2 = _interopRequireDefault(_configureStore);

var _app = __webpack_require__(109);

__webpack_require__(278);

__webpack_require__(883);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var theme = {};

// init mixpanel
//init(config.mixpanel.token, config.mixpanel.logger);

// to make hot reload more efficient store and history need to be outside the app
var history = (0, _history.createBrowserHistory)();
var store = void 0;

/**
 * render application
 */
var render = function render(App) {
  var $app = $("#app");
  if ($app.length) {
    var state = JSON.parse(store ? JSON.stringify(store.getState()) : $app.attr("data-state") || "{}");
    store = (0, _configureStore2.default)(state, history);
    $app.attr("data-state", null);
    // make the store accessible from global javascript e.g iframe or window.open can call parent store actions
    $app.data("store", store);
    _reactDom2.default.render(_jsx(App, {
      store: store,
      history: history,
      theme: theme
    }), $app.get(0));
  }
};

// render the app
$(function () {
  // render app
  render(_app.App);
  // enable hot reload ;)
  module.hot && module.hot.accept(109, function () {
    return render(__webpack_require__(109).App);
  });

  // others
  if ('addEventListener' in window) {
    window.addEventListener('load', function () {
      document.body.className = document.body.className.replace(/\bis-loading\b/, '');
    });
    document.body.className += navigator.userAgent.match(/(MSIE|rv:11\.0)/) ? ' is-ie' : '';
  }
});

/***/ }),

/***/ 270:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 270;

/***/ }),

/***/ 271:
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AnimateOnScroll = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _desc, _value, _class;

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(9);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _autobindDecorator = __webpack_require__(110);

var _autobindDecorator2 = _interopRequireDefault(_autobindDecorator);

var _lodash = __webpack_require__(217);

var _lodash2 = _interopRequireDefault(_lodash);

var _animate = __webpack_require__(170);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

//check if element visible, see: https://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport/7557433#7557433
var isElementInViewport = function isElementInViewport(el) {
  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  //special bonus for those using jQuery
  if (typeof jQuery === "function" && el instanceof jQuery) {
    el = el[0];
  }
  var rect = el.getBoundingClientRect();
  return rect.bottom >= offset && rect.right >= 0 && rect.top <= (window.innerHeight || document.documentElement.clientHeight) - offset && /*or $(window).height() */
  rect.left <= (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */
  ;
};

// track elements visibility
var onVisibilityChange = function onVisibilityChange(el, offset, callback) {
  var old_visible = void 0;
  return function () {
    var visible = isElementInViewport(el, offset);
    if (visible !== old_visible) {
      old_visible = visible;
      if (typeof callback === 'function') {
        callback(visible);
      }
    }
  };
};

/**
 * animated text typing
 * @type {Object}
 */
var AnimateOnScroll = exports.AnimateOnScroll = (_class = function (_React$Component) {
  _inherits(AnimateOnScroll, _React$Component);

  function AnimateOnScroll(props) {
    _classCallCheck(this, AnimateOnScroll);

    var _this = _possibleConstructorReturn(this, (AnimateOnScroll.__proto__ || Object.getPrototypeOf(AnimateOnScroll)).call(this, props));

    _this.content = null;

    _this.state = {
      isVisible: false
    };
    return _this;
  }

  _createClass(AnimateOnScroll, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.content) {
        var screenOffset = this.props.screenOffset;

        var handler = (0, _lodash2.default)(onVisibilityChange(this.content, screenOffset, this.onVisibilityChange), 200);
        //jQuery
        $(window).on('DOMContentLoaded load resize scroll', handler);
      }
    }
  }, {
    key: "onVisibilityChange",
    value: function onVisibilityChange(isVisibleNext) {
      var animationOut = this.props.animationOut;
      var isVisible = this.state.isVisible;
      // if no animation out make the animation once :)

      if (isVisible && !animationOut) {
        return;
      }
      this.setState({ isVisible: isVisibleNext });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          children = _props.children,
          rest = _objectWithoutProperties(_props, ["children"]);

      var isVisible = this.state.isVisible;

      return _react2.default.createElement(
        _animate.Animate,
        _extends({}, rest, { isVisible: isVisible, innerRef: function innerRef(me) {
            return _this2.content = me;
          }, style: {
            opacity: 0
          } }),
        children
      );
    }
  }]);

  return AnimateOnScroll;
}(_react2.default.Component), (_applyDecoratedDescriptor(_class.prototype, "onVisibilityChange", [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, "onVisibilityChange"), _class.prototype)), _class);


AnimateOnScroll.propTypes = {
  animationIn: _propTypes2.default.string,
  animationOut: _propTypes2.default.string,
  animationDelay: _propTypes2.default.number,
  screenOffset: _propTypes2.default.string,
  style: _propTypes2.default.object
};

AnimateOnScroll.defaultProps = {
  animationIn: "fadeIn",
  animationOut: "",
  animationDelay: 0,
  screenOffset: 50,
  style: {}
};

/***/ }),

/***/ 272:
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HashScroll = undefined;

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class, _desc, _value, _class2;

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(84);

var _lodash = __webpack_require__(217);

var _lodash2 = _interopRequireDefault(_lodash);

var _autobindDecorator = __webpack_require__(110);

var _autobindDecorator2 = _interopRequireDefault(_autobindDecorator);

var _reactRouterRedux = __webpack_require__(85);

var _propTypes = __webpack_require__(9);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _actions = __webpack_require__(281);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

var HashScroll = exports.HashScroll = (_dec = (0, _reactRedux.connect)(function (_ref) {
  var location = _ref.routing.location,
      anchor = _ref.app.anchor;
  return {
    anchor: anchor,
    location: location
  };
}), _dec(_class = (_class2 = function (_React$Component) {
  _inherits(HashScroll, _React$Component);

  function HashScroll(props) {
    _classCallCheck(this, HashScroll);

    var _this = _possibleConstructorReturn(this, (HashScroll.__proto__ || Object.getPrototypeOf(HashScroll)).call(this, props));

    _this.onScroll = null;

    _this.onScroll = (0, _lodash2.default)(function (evt) {
      evt.stopPropagation();
      var $page = $("html, body");
      var _this$props = _this.props,
          dispatch = _this$props.dispatch,
          className = _this$props.className,
          anchor = _this$props.anchor,
          location = _this$props.location;

      var offset = $page.width() >= 600 ? 140 : 120;
      var anchorEl = $page.find("." + className).toArray().sort(function (a, b) {
        return a.getBoundingClientRect().bottom < b.getBoundingClientRect().bottom ? 1 : -1;
      }).find(function (item) {
        return item.getBoundingClientRect().bottom < offset;
      });
      if (anchorEl) {
        var name = $(anchorEl).attr("name");
        var hash = (location.hash || "#").substr(1);
        //alert(name);
        if (name !== anchor) {
          dispatch((0, _actions.setAnchor)(name));
          if (hash) {
            dispatch((0, _reactRouterRedux.replace)("#"));
          }
        }
      }
    }, 400);
    return _this;
  }

  _createClass(HashScroll, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.scrollToHash();
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.scrollToHash();
      this.hashToScroll();
    }
  }, {
    key: "scrollToHash",
    value: function scrollToHash() {
      // scroll based on hash
      var location = this.props.location;

      var $page = $("html, body");
      var name = (location.hash || "#").substr(1);
      var $item = $("[name='" + name + "']");
      if ($item && $item.length) {
        var offset = $page.width() >= 600 ? 113 : 90;
        var stopScroll = function stopScroll(evt) {
          return $page.stop();
        };
        var scrollTop = $item.offset().top - offset;
        $page.off("scroll wheel DOMMouseScroll mousewheel touchmove", stopScroll).on("scroll wheel DOMMouseScroll mousewheel touchmove", stopScroll);
        $page.stop().animate({ scrollTop: scrollTop }, 800, "easeInOutQuad", function () {
          return $page.off("scroll wheel DOMMouseScroll mousewheel touchmove", stopScroll);
        });
      }
    }
  }, {
    key: "hashToScroll",
    value: function hashToScroll() {
      var $page = $("html, body");
      // hash based on scroll
      $page.off("scroll wheel DOMMouseScroll mousewheel touchmove", this.onScroll).on("scroll wheel DOMMouseScroll mousewheel touchmove", this.onScroll);
    }
  }, {
    key: "render",
    value: function render() {
      return _jsx("div", {
        className: this.props.className,
        name: "top"
      });
    }
  }]);

  return HashScroll;
}(_react2.default.Component), (_applyDecoratedDescriptor(_class2.prototype, "scrollToHash", [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class2.prototype, "scrollToHash"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "hashToScroll", [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class2.prototype, "hashToScroll"), _class2.prototype)), _class2)) || _class);


HashScroll.propTypes = {
  className: _propTypes2.default.string
};
HashScroll.defaultProps = {
  className: "anchor"
};

/***/ }),

/***/ 273:
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Switch = exports.Route = exports.RouteLink = exports.Redirect = undefined;

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class, _desc, _value, _class2, _dec2, _class3;

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

var _url = __webpack_require__(879);

var _url2 = _interopRequireDefault(_url);

var _autobindDecorator = __webpack_require__(110);

var _autobindDecorator2 = _interopRequireDefault(_autobindDecorator);

var _propTypes = __webpack_require__(9);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(84);

var _reactRouter = __webpack_require__(19);

var _reactRouterDom = __webpack_require__(818);

var _reactRouterRedux = __webpack_require__(85);

var RouterActions = _interopRequireWildcard(_reactRouterRedux);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * redirect
 */
var Redirect = exports.Redirect = _reactRouter.Redirect;

/**
 * router link
 */
var RouteLink = exports.RouteLink = (_dec = (0, _reactRedux.connect)(), _dec(_class = function (_React$Component) {
  _inherits(RouteLink, _React$Component);

  function RouteLink() {
    _classCallCheck(this, RouteLink);

    return _possibleConstructorReturn(this, (RouteLink.__proto__ || Object.getPrototypeOf(RouteLink)).apply(this, arguments));
  }

  _createClass(RouteLink, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          Component = _props.withComponent,
          dispatch = _props.dispatch,
          action = _props.action,
          _onClick = _props.onClick,
          rest = _objectWithoutProperties(_props, ["withComponent", "dispatch", "action", "onClick"]);

      return _react2.default.createElement(Component, _extends({}, rest, { onClick: function onClick(evt) {
          evt.preventDefault();
          action && dispatch(RouterActions[action](rest.href));
          _onClick && _onClick(evt);
          return false;
        } }));
    }
  }]);

  return RouteLink;
}(_react2.default.Component)) || _class);


RouteLink.propTypes = {
  withComponent: _propTypes2.default.any.isRequired,
  action: _propTypes2.default.oneOf(["push", "replace", "goForward", "goBack"])
};
RouteLink.defaultProps = {
  withComponent: _reactRouterDom.Link,
  action: "push"
};

/**
 * route
 */
var Route = exports.Route = (_class2 = function (_React$Component2) {
  _inherits(Route, _React$Component2);

  function Route() {
    _classCallCheck(this, Route);

    return _possibleConstructorReturn(this, (Route.__proto__ || Object.getPrototypeOf(Route)).apply(this, arguments));
  }

  _createClass(Route, [{
    key: "redirectTo",
    value: function redirectTo() {
      var _props2 = this.props,
          isAuthenticated = _props2.isAuthenticated,
          onlyAuthenticated = _props2.onlyAuthenticated,
          onlyUnauthenticated = _props2.onlyUnauthenticated,
          redirectUnAuthenticatedTo = _props2.redirectUnAuthenticatedTo,
          redirectAuthenticatedTo = _props2.redirectAuthenticatedTo;

      if (onlyAuthenticated && !isAuthenticated) {
        return redirectUnAuthenticatedTo;
      }
      if (onlyUnauthenticated && isAuthenticated) {
        return redirectAuthenticatedTo;
      }
    }
  }, {
    key: "render",
    value: function render() {
      var redirectTo = this.redirectTo();

      var _props3 = this.props,
          ComponentToWrap = _props3.component,
          children = _props3.children,
          rest = _objectWithoutProperties(_props3, ["component", "children"]);

      if (redirectTo) {
        var redirectToObject = _url2.default.parse(redirectTo);
        rest.render = function (props) {
          return _jsx(Redirect, {
            to: _extends({}, redirectToObject, {
              state: { from: props.location }
            })
          });
        };
      } else if (ComponentToWrap) {
        rest.render = function (props) {
          return _react2.default.createElement(ComponentToWrap, props);
        };
      }

      return _react2.default.createElement(
        _reactRouter.Route,
        rest,
        rest.render ? null : children
      );
    }
  }]);

  return Route;
}(_react2.default.Component), (_applyDecoratedDescriptor(_class2.prototype, "redirectTo", [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class2.prototype, "redirectTo"), _class2.prototype)), _class2);


Route.propTypes = _extends({}, _reactRouter.Route.protoTypes, {
  onlyAuthenticated: _propTypes2.default.bool,
  onlyUnauthenticated: _propTypes2.default.bool
});

Route.defaultProps = _extends({}, _reactRouter.Route.defaultProps);

/**
 * switch
 */
var Switch = exports.Switch = (_dec2 = (0, _reactRedux.connect)(), _dec2(_class3 = function (_React$Component3) {
  _inherits(Switch, _React$Component3);

  function Switch() {
    _classCallCheck(this, Switch);

    return _possibleConstructorReturn(this, (Switch.__proto__ || Object.getPrototypeOf(Switch)).apply(this, arguments));
  }

  _createClass(Switch, [{
    key: "render",
    value: function render() {
      var _props4 = this.props,
          children = _props4.children,
          redirectAuthenticatedTo = _props4.redirectAuthenticatedTo,
          redirectUnAuthenticatedTo = _props4.redirectUnAuthenticatedTo,
          isAuthenticated = _props4.isAuthenticated;

      return _react2.default.createElement(
        _reactRouter.Switch,
        _extends({}, this.props, { redirectAuthenticatedTo: null, redirectUnAuthenticatedTo: null }),
        [].concat(children).map(function (child, index) {
          return _react2.default.cloneElement(child, {
            key: index,
            redirectAuthenticatedTo: redirectAuthenticatedTo,
            redirectUnAuthenticatedTo: redirectUnAuthenticatedTo,
            isAuthenticated: isAuthenticated
          });
        })
      );
    }
  }]);

  return Switch;
}(_react2.default.Component)) || _class3);


Switch.propTypes = _extends({}, _reactRouter.Switch.protoTypes, {
  redirectAuthenticatedTo: _propTypes2.default.string,
  redirectUnAuthenticatedTo: _propTypes2.default.string
});

Switch.defaultProps = _extends({}, _reactRouter.Switch.defaultProps);

/***/ }),

/***/ 274:
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(84);

var _reactAnimatedCss = __webpack_require__(275);

var _reactAnimatedCss2 = _interopRequireDefault(_reactAnimatedCss);

var _custom = __webpack_require__(171);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _ref = _jsx("div", {}, void 0, _jsx(_custom.HashScroll, {}), _jsx("div", {}, void 0, _jsx("div", {
  id: "wrapper"
}, void 0, _jsx("section", {
  id: "main"
}, void 0, _jsx(_custom.Switch, {}, void 0, _jsx(_custom.Route, {
  path: "/react-animated-css.html",
  component: _reactAnimatedCss2.default
}), _jsx(_custom.Route, {
  exact: true
}, void 0, _jsx("div", {}, void 0, _jsx("header", {}, void 0, _jsx("span", {
  className: "avatar"
}, void 0, _jsx("img", {
  src: "/public/images/avatar.png",
  alt: ""
})), _jsx("h1", {}, void 0, "Fareed Alnamrouti"), _jsx("p", {}, void 0, "Full Stack Developer")), _jsx("hr", {}), _jsx("div", {}, void 0, _jsx("img", {
  src: "/public/images/lol.jpg"
})), _jsx("ul", {
  className: "actions"
}, void 0, _jsx("li", {}, void 0, _jsx("a", {
  href: "/react-animated-css.html",
  className: "button"
}, void 0, "React Animated CSS"))), _jsx("hr", {}), _jsx("footer", {}, void 0, _jsx("ul", {
  className: "icons"
}, void 0, _jsx("li", {}, void 0, _jsx("a", {
  href: "https://www.linkedin.com/in/fareednamrouti",
  className: "fa-linkedin",
  target: "_blank"
}, void 0, "LinkedIn")), _jsx("li", {}, void 0, _jsx("a", {
  href: "https://twitter.com/digital_flowers",
  className: "fa-twitter",
  target: "_blank"
}, void 0, "Twitter")), _jsx("li", {}, void 0, _jsx("a", {
  href: "https://www.facebook.com/fareed.alnamrouti",
  className: "fa-facebook",
  target: "_blank"
}, void 0, "Facebook")))))))), _jsx("footer", {
  id: "footer"
}, void 0, _jsx("ul", {
  className: "copyright"
}, void 0, _jsx("li", {}, void 0, "\xA9 Fareed Alnamrouti"), _jsx("li", {}, void 0, "Design: ", _jsx("a", {
  href: "http://html5up.net",
  target: "_blank"
}, void 0, "HTML5 UP")))))));

var _default = (_dec = (0, _reactRedux.connect)(), _dec(_class = function (_React$Component) {
  _inherits(_default, _React$Component);

  function _default() {
    _classCallCheck(this, _default);

    return _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).apply(this, arguments));
  }

  _createClass(_default, [{
    key: "render",
    value: function render() {
      return _ref;
    }
  }]);

  return _default;
}(_react2.default.Component)) || _class);

exports.default = _default;

/***/ }),

/***/ 275:
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(84);

var _main = __webpack_require__(798);

var _main2 = _interopRequireDefault(_main);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _default = (_dec = (0, _reactRedux.connect)(), _dec(_class = function (_React$Component) {
  _inherits(_default, _React$Component);

  function _default() {
    _classCallCheck(this, _default);

    return _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).apply(this, arguments));
  }

  _createClass(_default, [{
    key: "render",
    value: function render() {
      var code = "\n      import {Animated} from \"react-animated-css\";\n      <Animated animationIn=\"bounceInLeft\" animationOut=\"fadeOut\" isVisible={true}>\n          <div>\n              hello world ;)\n          </div>\n      </Animated>  \n    ";
      return _jsx("div", {}, void 0, _jsx("div", {}, void 0, _jsx(_main2.default, {
        language: "javascript"
      }, void 0, code)));
    }
  }]);

  return _default;
}(_react2.default.Component)) || _class);

exports.default = _default;

/***/ }),

/***/ 276:
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getResponseData = exports.getResponseError = exports.isRequestCanceled = exports.cancelRequest = exports.createCancelToken = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _bluebird = __webpack_require__(178);

var _bluebird2 = _interopRequireDefault(_bluebird);

var _asyncStorage = __webpack_require__(294);

var _asyncStorage2 = _interopRequireDefault(_asyncStorage);

var _axios = __webpack_require__(297);

var _axios2 = _interopRequireDefault(_axios);

var _immutable = __webpack_require__(65);

var _config = __webpack_require__(87);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var api = _axios2.default.create(_config2.default.api);

// handle cancel request
var cancelTokens = [];

//noinspection JSClosureCompilerSyntax
var createCancelToken = exports.createCancelToken = function createCancelToken(name) {
  return new _axios.CancelToken(function (cancel) {
    return cancelTokens.push({ name: name, cancel: cancel });
  });
};

var cancelRequest = exports.cancelRequest = function cancelRequest() {
  for (var _len = arguments.length, names = Array(_len), _key = 0; _key < _len; _key++) {
    names[_key] = arguments[_key];
  }

  cancelTokens = cancelTokens.filter(function (_ref) {
    var name = _ref.name,
        cancel = _ref.cancel;

    if (names.indexOf(name) >= 0) {
      try {
        cancel("API call for '" + name + "' has been canceled!");
      } catch (e) {
        console.log(e);
      }
      return false;
    }
    return true;
  });
};
var isRequestCanceled = exports.isRequestCanceled = function isRequestCanceled(payload) {
  return payload && _axios2.default.isCancel(payload);
};

var getResponseError = exports.getResponseError = function getResponseError(payload) {
  var data = {};
  // find errors
  if (payload && payload.response) {
    if (payload.response.data && _typeof(payload.response.data) === "object") {
      data = payload.response.data;
    }
    data.message = data.message || payload.message || payload.response.statusText || payload.response.data;
    data.status = data.status || payload.response.status;
  }

  return (0, _immutable.recordFromJS)(_extends({}, data, {
    message: data.message || payload.message || _config2.default.errors.default,
    status: data.status || 500
  }));
};

var getResponseData = exports.getResponseData = function getResponseData(payload) {
  var data = void 0;
  if (payload && payload.response && payload.response.data) {
    data = payload.response.data;
  } else if (payload && payload.data) {
    data = payload.data;
  } else {
    data = payload;
  }
  return (0, _immutable.recordFromJS)(data);
};

// set Authorization token
api.interceptors.request.use(function (config) {
  return _asyncStorage2.default.getItem("sessionId").then(function (token) {
    config.headers["Authorization"] = token;
    return config;
  });
}, function (error) {
  return _bluebird2.default.reject(error);
});

exports.default = api;

/***/ }),

/***/ 277:
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
var device = new ClientJS();

var iseIE = exports.iseIE = function iseIE(version) {
  return device.isIE() && parseInt(device.getBrowserVersion()) === version;
};
var isLteIE = exports.isLteIE = function isLteIE(version) {
  return device.isIE() && parseInt(device.getBrowserVersion()) <= version;
};
var isLtIE = exports.isLtIE = function isLtIE(version) {
  return device.isIE() && parseInt(device.getBrowserVersion()) < version;
};
var isGteIE = exports.isGteIE = function isGteIE(version) {
  return device.isIE() && parseInt(device.getBrowserVersion()) >= version;
};
var isGtIE = exports.isGtIE = function isGtIE(version) {
  return device.isIE() && parseInt(device.getBrowserVersion()) > version;
};

exports.default = device;

/***/ }),

/***/ 278:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(279);

// NOTE: on drop events WILL NOT WORK if you do not "preventDefault" in the on drag over event!!
var initDragAndDrops = function initDragAndDrops() {
  window.dragStarted = false;
  var dragEndTimer = void 0;
  // window events
  // prevent default behavior from changing page on dropped file
  $(window).on("dragover", function (evt) {
    evt.preventDefault();
    if (!window.dragStarted && $.inArray('Files', evt.originalEvent.dataTransfer.types) > -1) {
      window.dragStarted = true;
      onDragStart();
    }
    return false;
  });
  $(window).on("drop", function (evt) {
    // drag and drop files
    evt.preventDefault();
    if (window.dragStarted) {
      window.dragStarted = false;
      dragEndTimer && clearTimeout(dragEndTimer);
      dragEndTimer = setTimeout(function () {
        if (!window.dragStarted) {
          onDragEnd(evt);
        }
      }, 500);
    }
    onDrop(evt);
    return false;
  });
  // the following are hacks to allow drag drop from read only file system :P
  $(window).on("dragleave", function (evt) {
    // drop files
    window.dragStarted = false;
    dragEndTimer && clearTimeout(dragEndTimer);
    dragEndTimer = setTimeout(function () {
      if (!window.dragStarted) {
        onDragEnd(evt);
      }
    }, 500);
    onDrop(evt);
    evt.preventDefault();
    return false;
  });
  // callbacks
  var $html = $("html");
  var onDragStart = function onDragStart() {
    return $html.addClass("drag");
  };
  var onDragEnd = function onDragEnd() {
    return $html.removeClass("drag");
  };
  var onDrop = function onDrop() {
    return null;
  };

  // fix for safari react-file-uploader, see: https://github.com/lionng429/react-file-uploader/issues/7
  if (!window.DragEvent) {
    window.DragEvent = 'dummy';
  }
};

initDragAndDrops();

/***/ }),

/***/ 279:
/***/ (function(module, exports) {

jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend(jQuery.easing, {
  def: 'easeOutQuad',
  swing: function swing(x, t, b, c, d) {
    return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
  },
  easeInQuad: function easeInQuad(x, t, b, c, d) {
    return c * (t /= d) * t + b;
  },
  easeOutQuad: function easeOutQuad(x, t, b, c, d) {
    return -c * (t /= d) * (t - 2) + b;
  },
  easeInOutQuad: function easeInOutQuad(x, t, b, c, d) {
    if ((t /= d / 2) < 1) return c / 2 * t * t + b;
    return -c / 2 * (--t * (t - 2) - 1) + b;
  },
  easeInCubic: function easeInCubic(x, t, b, c, d) {
    return c * (t /= d) * t * t + b;
  },
  easeOutCubic: function easeOutCubic(x, t, b, c, d) {
    return c * ((t = t / d - 1) * t * t + 1) + b;
  },
  easeInOutCubic: function easeInOutCubic(x, t, b, c, d) {
    if ((t /= d / 2) < 1) return c / 2 * t * t * t + b;
    return c / 2 * ((t -= 2) * t * t + 2) + b;
  },
  easeInQuart: function easeInQuart(x, t, b, c, d) {
    return c * (t /= d) * t * t * t + b;
  },
  easeOutQuart: function easeOutQuart(x, t, b, c, d) {
    return -c * ((t = t / d - 1) * t * t * t - 1) + b;
  },
  easeInOutQuart: function easeInOutQuart(x, t, b, c, d) {
    if ((t /= d / 2) < 1) return c / 2 * t * t * t * t + b;
    return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
  },
  easeInQuint: function easeInQuint(x, t, b, c, d) {
    return c * (t /= d) * t * t * t * t + b;
  },
  easeOutQuint: function easeOutQuint(x, t, b, c, d) {
    return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
  },
  easeInOutQuint: function easeInOutQuint(x, t, b, c, d) {
    if ((t /= d / 2) < 1) return c / 2 * t * t * t * t * t + b;
    return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
  },
  easeInSine: function easeInSine(x, t, b, c, d) {
    return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
  },
  easeOutSine: function easeOutSine(x, t, b, c, d) {
    return c * Math.sin(t / d * (Math.PI / 2)) + b;
  },
  easeInOutSine: function easeInOutSine(x, t, b, c, d) {
    return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
  },
  easeInExpo: function easeInExpo(x, t, b, c, d) {
    return t === 0 ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
  },
  easeOutExpo: function easeOutExpo(x, t, b, c, d) {
    return t === d ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
  },
  easeInOutExpo: function easeInOutExpo(x, t, b, c, d) {
    if (t === 0) return b;
    if (t === d) return b + c;
    if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
    return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
  },
  easeInCirc: function easeInCirc(x, t, b, c, d) {
    return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
  },
  easeOutCirc: function easeOutCirc(x, t, b, c, d) {
    return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
  },
  easeInOutCirc: function easeInOutCirc(x, t, b, c, d) {
    if ((t /= d / 2) < 1) return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
    return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
  },
  easeInElastic: function easeInElastic(x, t, b, c, d) {
    var s = 1.70158;
    var p = 0;
    var a = c;
    if (t === 0) return b;
    if ((t /= d) === 1) return b + c;
    if (!p) p = d * .3;
    if (a < Math.abs(c)) {
      a = c;
      var _s = p / 4;
    } else {
      var _s2 = p / (2 * Math.PI) * Math.asin(c / a);
    }
    return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
  },
  easeOutElastic: function easeOutElastic(x, t, b, c, d) {
    var s = 1.70158;
    var p = 0;
    var a = c;
    if (t === 0) return b;
    if ((t /= d) === 1) return b + c;
    if (!p) p = d * .3;
    if (a < Math.abs(c)) {
      a = c;
      var _s3 = p / 4;
    } else {
      var _s4 = p / (2 * Math.PI) * Math.asin(c / a);
    }
    return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b;
  },
  easeInOutElastic: function easeInOutElastic(x, t, b, c, d) {
    var s = 1.70158;
    var p = 0;
    var a = c;
    if (t === 0) return b;
    if ((t /= d / 2) === 2) return b + c;
    if (!p) p = d * (.3 * 1.5);
    if (a < Math.abs(c)) {
      a = c;
      var _s5 = p / 4;
    } else {
      var _s6 = p / (2 * Math.PI) * Math.asin(c / a);
    }
    if (t < 1) return -.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
    return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * .5 + c + b;
  },
  easeInBack: function easeInBack(x, t, b, c, d, s) {
    if (s === undefined) s = 1.70158;
    return c * (t /= d) * t * ((s + 1) * t - s) + b;
  },
  easeOutBack: function easeOutBack(x, t, b, c, d, s) {
    if (s === undefined) s = 1.70158;
    return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
  },
  easeInOutBack: function easeInOutBack(x, t, b, c, d, s) {
    if (s === undefined) s = 1.70158;
    if ((t /= d / 2) < 1) return c / 2 * (t * t * (((s *= 1.525) + 1) * t - s)) + b;
    return c / 2 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + b;
  },
  easeInBounce: function easeInBounce(x, t, b, c, d) {
    return c - jQuery.easing.easeOutBounce(x, d - t, 0, c, d) + b;
  },
  easeOutBounce: function easeOutBounce(x, t, b, c, d) {
    if ((t /= d) < 1 / 2.75) {
      return c * (7.5625 * t * t) + b;
    } else if (t < 2 / 2.75) {
      return c * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + b;
    } else if (t < 2.5 / 2.75) {
      return c * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + b;
    } else {
      return c * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + b;
    }
  },
  easeInOutBounce: function easeInOutBounce(x, t, b, c, d) {
    if (t < d / 2) return jQuery.easing.easeInBounce(x, t * 2, 0, c, d) * .5 + b;
    return jQuery.easing.easeOutBounce(x, t * 2 - d, 0, c, d) * .5 + c * .5 + b;
  }
});

/***/ }),

/***/ 280:
/***/ (function(module, exports, __webpack_require__) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var Promise = __webpack_require__(178);

/**
 * a utility to check if a value is a Promise or not
 * @param value
 */
var isPromise = function isPromise(value) {
  return value !== null && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && typeof value.then === 'function';
};

/**
 * a utility to resolve an array of promises sequentially
 * @param {Array} array any array of promises, values or a mix
 * @param {Function} func an optional function to create a promises from values if not presented Promise.resolve will be used
 * @return {Promise}
 */
var Sequence = function Sequence(array, func) {
  return array.reduce(function (a, b) {
    return a.then(function () {
      var value = typeof func === "function" ? func(b) : b;
      if (typeof value === "function") {
        value = value();
      }
      return isPromise(value) ? value : Promise.resolve(value);
    });
  }, Promise.resolve());
};

module.exports = { Sequence: Sequence, isPromise: isPromise };

/***/ }),

/***/ 281:
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setAnchor = undefined;

var _actionTypes = __webpack_require__(172);

var _actionTypes2 = _interopRequireDefault(_actionTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * set a virtual window anchor for navigation purpose, using window.location.hash has performance side effect
 * @param anchor
 */
var setAnchor = exports.setAnchor = function setAnchor(anchor) {
  return { type: _actionTypes2.default.SET_ANCHOR, payload: anchor };
};

/***/ }),

/***/ 282:
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _immutable = __webpack_require__(65);

exports.default = (0, _immutable.recordFromJS)({
  anchor: ""
});

/***/ }),

/***/ 283:
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _initial = __webpack_require__(282);

var _initial2 = _interopRequireDefault(_initial);

var _actionTypes = __webpack_require__(172);

var _actionTypes2 = _interopRequireDefault(_actionTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _initial2.default;
  var action = arguments[1];


  switch (action.type) {

    // setup
    case _actionTypes2.default.SET_ANCHOR:
      return state.set("anchor", action.payload);

  }
  return state;
};

/***/ }),

/***/ 284:
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(106);

var _immutable = __webpack_require__(65);

var _middleware = __webpack_require__(288);

var _middleware2 = _interopRequireDefault(_middleware);

var _reducers = __webpack_require__(293);

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @private make sure the initial state is an immutable object
 * @param state
 */
var prepareInitialState = function prepareInitialState(state) {
  return Object.keys(state).reduce(function (obj, key) {
    obj[key] = (0, _immutable.recordFromJS)(state[key]);
    return obj;
  }, {});
};

exports.default = function () {
  var defaultState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var history = arguments[1];
  return (0, _redux.createStore)(_reducers2.default, prepareInitialState(defaultState), (0, _middleware2.default)(history));
};

/***/ }),

/***/ 285:
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dacho = __webpack_require__(138);

var types = {
  CHANGE_LANGUAGE: null
};

types = (0, _dacho.reaction)(types, "I18N/");

exports.default = types;

/***/ }),

/***/ 286:
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _immutable = __webpack_require__(65);

exports.default = (0, _immutable.recordFromJS)({
  locale: null,
  catalog: {},
  locales: []
});

/***/ }),

/***/ 287:
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _initial = __webpack_require__(286);

var _initial2 = _interopRequireDefault(_initial);

var _actionTypes = __webpack_require__(285);

var _actionTypes2 = _interopRequireDefault(_actionTypes);

var _api = __webpack_require__(276);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _initial2.default;
  var action = arguments[1];

  switch (action.type) {

    // change language
    case _actionTypes2.default.CHANGE_LANGUAGE:
      return state.set("catalog", (0, _api.getResponseData)(action.payload).catalog);
  }
  return state;
};

/***/ }),

/***/ 288:
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(106);

var _reduxThunk = __webpack_require__(846);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reduxLogger = __webpack_require__(843);

var _reduxLogger2 = _interopRequireDefault(_reduxLogger);

var _reduxPromiseMiddleware = __webpack_require__(844);

var _reduxPromiseMiddleware2 = _interopRequireDefault(_reduxPromiseMiddleware);

var _reactRouterRedux = __webpack_require__(85);

var _config = __webpack_require__(87);

var _config2 = _interopRequireDefault(_config);

var _error = __webpack_require__(289);

var _error2 = _interopRequireDefault(_error);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (history) {
  // global error middleware
  var middleWares = [];

  // error middleware
  middleWares.push(_error2.default);

  // routing middleware
  !_config2.default.isReactNative() && middleWares.push((0, _reactRouterRedux.routerMiddleware)(history));

  // other middleware
  middleWares.push(_reduxThunk2.default);
  middleWares.push((0, _reduxPromiseMiddleware2.default)());

  // logger
  _config2.default.middleware.logger && middleWares.push((0, _reduxLogger2.default)());

  return _redux.applyMiddleware.apply(undefined, middleWares);
};

/***/ }),

/***/ 289:
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promises = __webpack_require__(280);

var _config = __webpack_require__(87);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return function (next) {
    return function (action) {
      // If not a promise, continue on
      if (!(0, _promises.isPromise)(action.payload)) {
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
        return next(action).catch(function (error) {
          if (_config2.default.middleware.logger) {
            console.log(action.type + " unhandled rejection caught at middleware with reason: " + JSON.stringify(error.message) + ".");
          }

          return error;
        });
      }

      return next(action);
    };
  };
};

/***/ }),

/***/ 290:
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dacho = __webpack_require__(138);

var types = {
  SHOW_MODAL: null,
  HIDE_MODAL: null,
  SHOW_MODAL_ANIMATION: null,
  HIDE_MODAL_ANIMATION: null
};

types = (0, _dacho.reaction)(types, "MODALS/");

exports.default = types;

/***/ }),

/***/ 291:
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _immutable = __webpack_require__(65);

exports.default = (0, _immutable.recordFromJS)({
  modalId: "",
  isVisibleAnimated: false,
  isVisible: false,
  props: {}
});

/***/ }),

/***/ 292:
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _initial = __webpack_require__(291);

var _initial2 = _interopRequireDefault(_initial);

var _actionTypes = __webpack_require__(290);

var _actionTypes2 = _interopRequireDefault(_actionTypes);

var _immutable = __webpack_require__(65);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _initial2.default;
  var action = arguments[1];


  switch (action.type) {
    case _actionTypes2.default.SHOW_MODAL:
      {
        var _action$payload = action.payload,
            modalId = _action$payload.modalId,
            props = _action$payload.props;

        return state.set("modalId", modalId).set("isVisible", true).set("props", (0, _immutable.recordFromJS)(props));
      }
    case _actionTypes2.default.HIDE_MODAL:
      return state.set("isVisible", false);

    case _actionTypes2.default.SHOW_MODAL_ANIMATION:
      return state.set("isVisibleAnimated", true);

    case _actionTypes2.default.HIDE_MODAL_ANIMATION:
      return state.set("isVisibleAnimated", false);
  }
  return state;
};

/***/ }),

/***/ 293:
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _config = __webpack_require__(87);

var _config2 = _interopRequireDefault(_config);

var _redux = __webpack_require__(106);

var _reactRouterRedux = __webpack_require__(85);

var _reducer = __webpack_require__(287);

var _reducer2 = _interopRequireDefault(_reducer);

var _reducer3 = __webpack_require__(283);

var _reducer4 = _interopRequireDefault(_reducer3);

var _reducer5 = __webpack_require__(292);

var _reducer6 = _interopRequireDefault(_reducer5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var reducers = {
  i18n: _reducer2.default,
  app: _reducer4.default,
  modals: _reducer6.default
};
// reducers


if (!_config2.default.isReactNative()) {
  reducers["routing"] = _reactRouterRedux.routerReducer;
}
exports.default = (0, _redux.combineReducers)(reducers);

/***/ }),

/***/ 65:
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeStateStatusByCode = exports.setStateStatus = exports.removeStateStatus = exports.mergeDeepRecord = exports.mapFromRecord = exports.mapFromJS = exports.recordFromJS = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _immutable = __webpack_require__(707);

var recordFromJS = exports.recordFromJS = function recordFromJS() {
  var js = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  try {
    if ((typeof js === "undefined" ? "undefined" : _typeof(js)) !== 'object' || js === null) {
      return js;
    }

    if (_immutable.Iterable.isIterable(js)) {
      return js;
    }

    // size is not a valid property in immutable js data structure
    if (js.size) {
      js._size = js.size;
      delete js.size;
    }

    if (Array.isArray(js)) {
      return (0, _immutable.Seq)(js).map(recordFromJS).toList();
    }

    return new ((0, _immutable.Record)(js))((0, _immutable.Seq)(js).map(recordFromJS));
  } catch (e) {
    console.log(js, e);
  }
};

/**
 * convert javascript object to immutable map
 * @param js
 * @return {*}
 */
var mapFromJS = exports.mapFromJS = function mapFromJS(js) {
  return (0, _immutable.fromJS)(js || {});
};

/**
 * convert javascript object to immutable record
 * @return {*}
 * @param record
 */
var mapFromRecord = exports.mapFromRecord = function mapFromRecord(record) {
  return mapFromJS(record && record.toJS ? record.toJS() : record || {});
};

/**
 * Deep marge record
 */

var mergeDeepRecord = exports.mergeDeepRecord = function mergeDeepRecord(record, data) {
  return recordFromJS(mapFromRecord(record).mergeDeep(mapFromRecord(data)).toJS());
};

/**
 * remove pending state from state pending array
 * @param state
 * @param id
 */
var removeStateStatus = exports.removeStateStatus = function removeStateStatus(state, id) {
  return state.set("status", state.status.filter(function (item) {
    return item.id !== id;
  }));
};

/**
 * push state status into state status array
 * @param state
 * @param id
 * @param {string} status
 * @param {Object} data
 */
var setStateStatus = exports.setStateStatus = function setStateStatus(state, id, status) {
  var data = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  return state.set("status", state.status.filter(function (item) {
    return item.id !== id;
  }).push(recordFromJS({ id: id, status: status, data: data })));
};

/**
 * remove state status from state status array using statusCode
 * @param state
 * @param statusCode
 */
var removeStateStatusByCode = exports.removeStateStatusByCode = function removeStateStatusByCode(state, statusCode) {
  return state.set("status", state.status.filter(function (item) {
    return !(item.data && item.data && item.data.status === statusCode);
  }));
};

/***/ }),

/***/ 87:
/***/ (function(module, exports, __webpack_require__) {

var _deepmerge = __webpack_require__(499);

var _deepmerge2 = _interopRequireDefault(_deepmerge);

var _default2 = __webpack_require__(169);

var _default3 = _interopRequireDefault(_default2);

var _env = __webpack_require__(169);

var _env2 = _interopRequireDefault(_env);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this config file are dynamically injected by webpack
module.exports = _default3.default; // don't remove this will help the IDE to auto complete our config vars

/**
 * get node environment name (process.env.NODE_ENV)
 * @return {string}
 */
var getEnv = function getEnv() {
  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "NODE_ENV";

  var _default = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "default";

  return __webpack_require__.i({"NODE_ENV":"default"})[name] || _default;
};

/**
 * check if app is running under production
 * @return {boolean}
 */
var isProduction = function isProduction() {
  return !true;
};

/**
 * check if app is running under react native
 * @return {boolean}
 */
var isReactNative = function isReactNative() {
  return navigator.product === "ReactNative";
};

/**
 * create env config taking care of on NODE_ENV and ReactNative, the override priority as follow:
 * default.json => native.default.json => {NODE_ENV}.json => native.{NODE_ENV}.json
 * @return {Object}
 */
var getEnvConfig = function getEnvConfig() {
  var env = isReactNative() ? getEnv() : "env";
  // development is same as default
  var resolvedConfig = (0, _deepmerge2.default)(_default3.default, {});
  if (isReactNative()) {
    var nativeConfig = __webpack_require__(169); // this config file are dynamically injected by webpack
    var nativeEnvConfig = !(function webpackMissingModule() { var e = new Error("Cannot find module \"../config\""); e.code = 'MODULE_NOT_FOUND'; throw e; }());
    resolvedConfig = (0, _deepmerge2.default)(resolvedConfig, nativeConfig);
    if (env !== "development") {
      resolvedConfig = (0, _deepmerge2.default)(resolvedConfig, _env2.default);
      resolvedConfig = (0, _deepmerge2.default)(resolvedConfig, nativeEnvConfig);
    }
  } else {
    // if web then webpack will replace env.json with the {NODE_ENV}.json
    resolvedConfig = (0, _deepmerge2.default)(resolvedConfig, _env2.default);
  }
  return resolvedConfig;
};

module.exports = Object.assign(getEnvConfig(), { isProduction: isProduction, isReactNative: isReactNative, getEnv: getEnv });

/***/ }),

/***/ 883:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 884:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(263);
__webpack_require__(267);
__webpack_require__(265);
__webpack_require__(268);
__webpack_require__(264);
__webpack_require__(266);
__webpack_require__(269);
module.exports = __webpack_require__(262);


/***/ })

},[884]);
//# sourceMappingURL=index.js.map?f27f6b86ae6a72cfcb25