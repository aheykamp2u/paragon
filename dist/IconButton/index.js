function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var _excluded = ["className", "alt", "invertColors", "icon", "src", "iconClassNames", "onClick", "size", "variant", "iconAs", "isActive"],
  _excluded2 = ["tooltipPlacement", "tooltipContent", "variant", "invertColors"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { OverlayTrigger } from '../Overlay';
import Tooltip from '../Tooltip';
var IconButton = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var className = _ref.className,
    alt = _ref.alt,
    invertColors = _ref.invertColors,
    icon = _ref.icon,
    src = _ref.src,
    iconClassNames = _ref.iconClassNames,
    onClick = _ref.onClick,
    size = _ref.size,
    variant = _ref.variant,
    iconAs = _ref.iconAs,
    isActive = _ref.isActive,
    attrs = _objectWithoutProperties(_ref, _excluded);
  var invert = invertColors ? 'inverse-' : '';
  var activeStyle = isActive ? "".concat(variant, "-") : '';
  if (!iconAs && process.env.NODE_ENV === 'development' && console) {
    var msg = '[Deprecated] IconButton: you have not provided a value for iconAs prop and ' + 'are using a default one - FontAwesomeIcon, the default value is going to be changed soon ' + 'as Paragon is moving away from FontAwesome, please use Paragon\'s icons instead.';
    // eslint-disable-next-line no-console
    console.warn(msg);
  }
  var IconComponent = iconAs || FontAwesomeIcon;
  return /*#__PURE__*/React.createElement("button", _extends({
    "aria-label": alt,
    className: classNames('btn-icon', "btn-icon-".concat(invert).concat(variant), "btn-icon-".concat(size), _defineProperty({}, "btn-icon-".concat(invert).concat(activeStyle, "active"), isActive), className),
    onClick: onClick,
    type: "button",
    ref: ref
  }, attrs), /*#__PURE__*/React.createElement("span", {
    className: "btn-icon__icon-container"
  }, /*#__PURE__*/React.createElement(IconComponent, {
    className: classNames('btn-icon__icon', iconClassNames),
    icon: icon,
    src: src
  })));
});
IconButton.defaultProps = {
  iconAs: undefined,
  src: null,
  icon: undefined,
  iconClassNames: undefined,
  className: undefined,
  invertColors: false,
  variant: 'primary',
  size: 'md',
  onClick: function onClick() {},
  isActive: false
};
IconButton.propTypes = {
  /** A custom class name. */
  className: PropTypes.string,
  /** Component that renders the icon, currently defaults to `FontAwesomeIcon`,
   *  but is going to be deprecated soon, please use Paragon's icons instead. */
  iconAs: PropTypes.elementType,
  /** An icon component to render. Example import of a Paragon icon component:
   * `import { Check } from '@openedx/paragon/dist/icon';`
   * */
  src: PropTypes.oneOfType([PropTypes.element, PropTypes.elementType]),
  /** Alt text for your icon. For best practice, avoid using alt text to describe
   * the image in the `IconButton`. Instead, we recommend describing the function
   * of the button. */
  alt: PropTypes.string.isRequired,
  /** Changes icon styles for dark background */
  invertColors: PropTypes.bool,
  /** Accepts a React fontawesome icon. */
  icon: PropTypes.shape({
    prefix: PropTypes.string,
    iconName: PropTypes.string,
    // eslint-disable-next-line react/forbid-prop-types
    icon: PropTypes.array
  }),
  /** Extra class names that will be added to the icon */
  iconClassNames: PropTypes.string,
  /** Click handler for the button */
  onClick: PropTypes.func,
  /** Type of button (uses Bootstrap options) */
  variant: PropTypes.oneOf(['primary', 'secondary', 'success', 'warning', 'danger', 'light', 'dark', 'black', 'brand']),
  /** size of button to render */
  size: PropTypes.oneOf(['sm', 'md', 'inline']),
  /** whether to show the `IconButton` in an active state, whose styling is distinct from default state */
  isActive: PropTypes.bool
};

/**
 *
 * @param { object } args Arguments
 * @param { string } args.tooltipPlacement choose from https://popper.js.org/docs/v2/constructors/#options
 * @param { React.Component } args.tooltipContent any content to pass to tooltip content area
 * @returns { IconButton } a button wrapped in overlaytrigger
 */
function IconButtonWithTooltip(_ref2) {
  var tooltipPlacement = _ref2.tooltipPlacement,
    tooltipContent = _ref2.tooltipContent,
    variant = _ref2.variant,
    invertColors = _ref2.invertColors,
    props = _objectWithoutProperties(_ref2, _excluded2);
  var invert = invertColors ? 'inverse-' : '';
  return /*#__PURE__*/React.createElement(OverlayTrigger, {
    placement: tooltipPlacement,
    overlay: /*#__PURE__*/React.createElement(Tooltip, {
      id: "iconbutton-tooltip-".concat(tooltipPlacement),
      variant: invert ? 'light' : ''
    }, tooltipContent)
  }, /*#__PURE__*/React.createElement(IconButton, _extends({
    variant: variant,
    invertColors: invertColors
  }, props)));
}
IconButtonWithTooltip.defaultProps = {
  tooltipPlacement: 'top',
  variant: 'primary',
  invertColors: false
};
IconButtonWithTooltip.propTypes = {
  /** tooltip placement can be top, left, right etc, per https://popper.js.org/docs/v2/constructors/#options  */
  tooltipPlacement: PropTypes.string,
  /** any valid JSX or text to be rendered as tooltip contents */
  tooltipContent: PropTypes.node.isRequired,
  /** Type of button (uses Bootstrap options) */
  variant: PropTypes.oneOf(['primary', 'secondary', 'success', 'warning', 'danger', 'light', 'dark', 'black', 'brand']),
  /** Changes icon styles for dark background */
  invertColors: PropTypes.bool
};
IconButton.IconButtonWithTooltip = IconButtonWithTooltip;
export default IconButton;
export { IconButtonWithTooltip };
//# sourceMappingURL=index.js.map