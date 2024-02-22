function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var _excluded = ["children"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import useIsVisible from '../hooks/useIsVisible';
export var CLASSNAME_SCROLL_TOP = 'pgn__scrollable-body-scroll-top';
export var CLASSNAME_SCROLL_BOTTOM = 'pgn__scrollable-body-scroll-bottom';
function Scrollable(_ref) {
  var _classNames;
  var children = _ref.children,
    props = _objectWithoutProperties(_ref, _excluded);
  var _useIsVisible = useIsVisible(),
    _useIsVisible2 = _slicedToArray(_useIsVisible, 2),
    isScrolledToTop = _useIsVisible2[0],
    topSentinelRef = _useIsVisible2[1];
  var _useIsVisible3 = useIsVisible(),
    _useIsVisible4 = _slicedToArray(_useIsVisible3, 2),
    isScrolledToBottom = _useIsVisible4[0],
    bottomSentinelRef = _useIsVisible4[1];
  var _useState = useState(0),
    _useState2 = _slicedToArray(_useState, 2),
    valueNow = _useState2[0],
    setValueNow = _useState2[1];
  var className = classNames('pgn__scrollable-body', props.className, (_classNames = {}, _defineProperty(_classNames, CLASSNAME_SCROLL_TOP, isScrolledToTop), _defineProperty(_classNames, CLASSNAME_SCROLL_BOTTOM, isScrolledToBottom), _classNames));
  var handleScroll = function handleScroll(e) {
    var maxScrollHeight = e.currentTarget.scrollHeight - e.currentTarget.clientHeight;
    setValueNow(Math.ceil(100 * e.currentTarget.scrollTop / maxScrollHeight));
  };
  return /*#__PURE__*/React.createElement("div", _extends({}, props, {
    className: className,
    role: "scrollbar",
    "aria-valuemin": 0,
    "aria-valuemax": 100,
    "aria-valuenow": valueNow,
    "aria-controls": "scrollbar",
    tabIndex: "0",
    onScroll: handleScroll
  }), /*#__PURE__*/React.createElement("div", {
    ref: topSentinelRef
  }), /*#__PURE__*/React.createElement("div", {
    className: "pgn__scrollable-body-content"
  }, children), /*#__PURE__*/React.createElement("div", {
    ref: bottomSentinelRef
  }));
}
Scrollable.propTypes = {
  /** Specifies the content of the `Scrollable`. */
  children: PropTypes.node.isRequired,
  /** Additional classnames for this component. */
  className: PropTypes.string
};
Scrollable.defaultProps = {
  className: undefined
};
export default Scrollable;
//# sourceMappingURL=index.js.map