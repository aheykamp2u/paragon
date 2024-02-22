function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var _excluded = ["children", "className", "title", "styling", "iconWhenClosed", "iconWhenOpen"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { ExpandLess, ExpandMore } from '../../icons';
import CollapsibleAdvanced, { CollapsibleContext } from './CollapsibleAdvanced';
import CollapsibleBody from './CollapsibleBody';
import CollapsibleTrigger from './CollapsibleTrigger';
import CollapsibleVisible from './CollapsibleVisible';
import Icon from '../Icon';
var styleIcons = {
  basic: {
    iconWhenClosed: /*#__PURE__*/React.createElement(Icon, {
      src: ExpandMore
    }),
    iconWhenOpen: /*#__PURE__*/React.createElement(Icon, {
      src: ExpandLess
    })
  }
  // card and card-lg use the defaults specified in defaultProps
};

var Collapsible = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var children = props.children,
    className = props.className,
    title = props.title,
    styling = props.styling,
    iconWhenClosed = props.iconWhenClosed,
    iconWhenOpen = props.iconWhenOpen,
    other = _objectWithoutProperties(props, _excluded);
  var icons = _objectSpread({
    iconWhenClosed: iconWhenClosed,
    iconWhenOpen: iconWhenOpen
  }, styleIcons[styling]);
  var titleElement = /*#__PURE__*/React.isValidElement(title) ? title : /*#__PURE__*/React.createElement("span", null, title);
  return /*#__PURE__*/React.createElement(Collapsible.Advanced, _extends({}, other, {
    className: classNames(className, "collapsible-".concat(styling)),
    ref: ref
  }), /*#__PURE__*/React.createElement(Collapsible.Trigger, {
    className: "collapsible-trigger"
  }, titleElement, /*#__PURE__*/React.createElement("span", {
    className: "collapsible-icon"
  }, /*#__PURE__*/React.createElement(Collapsible.Visible, {
    whenClosed: true
  }, icons.iconWhenClosed), /*#__PURE__*/React.createElement(Collapsible.Visible, {
    whenOpen: true
  }, icons.iconWhenOpen))), /*#__PURE__*/React.createElement(Collapsible.Body, {
    className: "collapsible-body"
  }, children));
});
Collapsible.propTypes = {
  /** Specifies contents of the component. */
  children: PropTypes.node.isRequired,
  /** Specifies class name to append to the base element. */
  className: PropTypes.string,
  /** Specifies whether the `Collapsible` should be initially open. */
  defaultOpen: PropTypes.bool,
  /** Specifies icon to show when `Collapsible` is closed. */
  iconWhenClosed: PropTypes.element,
  /** Specifies icon to show when `Collapsible` is open. */
  iconWhenOpen: PropTypes.element,
  /** Callback fired when `Collapsible` closes. */
  onClose: PropTypes.func,
  /** Callback fired when `Collapsible` opens. */
  onOpen: PropTypes.func,
  /** Callback fired when `Collapsible's` state is toggled. */
  onToggle: PropTypes.func,
  /** Specifies whether `Collapsible` is open. */
  open: PropTypes.bool,
  /** Specifies style variant. */
  styling: PropTypes.oneOf(['basic', 'card', 'card-lg']),
  /** Specifies title. */
  title: PropTypes.node.isRequired,
  /** Unmount the component (remove it from the DOM) when it is collapsed */
  unmountOnExit: PropTypes.bool
};
Collapsible.defaultProps = {
  className: undefined,
  defaultOpen: false,
  iconWhenClosed: /*#__PURE__*/React.createElement(Icon, {
    src: ExpandMore
  }),
  iconWhenOpen: /*#__PURE__*/React.createElement(Icon, {
    src: ExpandLess
  }),
  onClose: undefined,
  onOpen: undefined,
  onToggle: undefined,
  open: undefined,
  styling: 'card',
  unmountOnExit: true
};
Collapsible.Advanced = CollapsibleAdvanced;
Collapsible.Body = CollapsibleBody;
Collapsible.Trigger = CollapsibleTrigger;
Collapsible.Visible = CollapsibleVisible;
Collapsible.Context = CollapsibleContext;
export default Collapsible;
//# sourceMappingURL=index.js.map