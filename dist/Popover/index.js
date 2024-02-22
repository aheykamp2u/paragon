function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var _excluded = ["children", "variant"];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import BasePopover from 'react-bootstrap/Popover';
import BasePopoverTitle from 'react-bootstrap/PopoverTitle';
import BasePopoverContent from 'react-bootstrap/PopoverContent';
var PLACEMENT_VARIANTS = ['auto', 'top', 'bottom', 'left', 'right'];
var Popover = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var children = _ref.children,
    variant = _ref.variant,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/React.createElement(BasePopover, _extends({}, props, {
    className: classNames(_defineProperty({}, "popover-".concat(variant), !!variant), props.className),
    ref: ref
  }), children);
});
function PopoverTitle(props) {
  return /*#__PURE__*/React.createElement(BasePopoverTitle, props);
}
function PopoverContent(props) {
  return /*#__PURE__*/React.createElement(BasePopoverContent, props);
}
var commonPropTypes = {
  /** Specifies the base element */
  as: PropTypes.elementType,
  /** Overrides underlying component base CSS class name */
  bsPrefix: PropTypes.string
};
PopoverTitle.propTypes = commonPropTypes;
PopoverContent.propTypes = commonPropTypes;
Popover.propTypes = _objectSpread(_objectSpread({}, BasePopover.propTypes), {}, {
  /** An html id attribute, necessary for accessibility. */
  id: PropTypes.string.isRequired,
  /**
   * Sets the direction the Popover is positioned towards.
   *
   * This is generally provided by the `Overlay` component positioning the popover.
   */
  placement: PropTypes.oneOf(PLACEMENT_VARIANTS),
  /**
   * When this prop is set, it creates a `Popover` with
   * a `Popover.Title` inside passing the children directly to it.
   */
  title: PropTypes.string,
  /**
   * An `Overlay` injected set of props for positioning the popover arrow.
   *
   * This is generally provided by the `Overlay` component positioning the popover.
   */
  arrowProps: PropTypes.shape({
    ref: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({
      current: PropTypes.element
    })]),
    style: PropTypes.shape({})
  }),
  /**
   * When this prop is set, it creates a `Popover` with
   * a `Popover.Content` inside passing the children directly to it.
   */
  content: PropTypes.bool,
  /** A `Popper.js` config object passed to the the underlying popper instance. */
  popper: PropTypes.shape({}),
  /** Whether the `Overlay` is shown. */
  show: PropTypes.bool,
  /** Specifies the content of the `Overlay` */
  children: PropTypes.node,
  /** Specifies class name to append to the base element */
  className: PropTypes.string,
  /** The visual style of the `Overlay` */
  variant: PropTypes.string
});
Popover.defaultProps = _objectSpread(_objectSpread({}, BasePopover.defaultProps), {}, {
  placement: 'right',
  title: undefined,
  arrowProps: undefined,
  content: undefined,
  popper: undefined,
  show: undefined,
  children: undefined,
  className: undefined,
  variant: undefined
});
PopoverTitle.defaultProps = {
  as: 'div',
  bsPrefix: 'popover-header'
};
PopoverContent.defaultProps = {
  as: 'div',
  bsPrefix: 'popover-body'
};
Popover.Title = PopoverTitle;
Popover.Content = PopoverContent;
export { PopoverTitle, PopoverContent };
export default Popover;
//# sourceMappingURL=index.js.map