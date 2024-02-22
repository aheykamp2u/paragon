function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var _excluded = ["as", "children", "defaultSelected", "iconAfter", "iconBefore"];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Icon from '../Icon';
function MenuItem(_ref) {
  var as = _ref.as,
    children = _ref.children,
    defaultSelected = _ref.defaultSelected,
    iconAfter = _ref.iconAfter,
    iconBefore = _ref.iconBefore,
    props = _objectWithoutProperties(_ref, _excluded);
  var className = classNames(props.className, 'pgn__menu-item');
  return /*#__PURE__*/React.createElement(as, _objectSpread(_objectSpread({}, props), {}, {
    className: className
  }), /*#__PURE__*/React.createElement(React.Fragment, null, iconBefore && /*#__PURE__*/React.createElement(Icon, {
    className: "btn-icon-before",
    src: iconBefore
  }), /*#__PURE__*/React.createElement("span", {
    className: "pgn__menu-item-text"
  }, children), /*#__PURE__*/React.createElement("span", {
    className: "pgn__menu-item-content-spacer"
  }), iconAfter && /*#__PURE__*/React.createElement(Icon, {
    className: "btn-icon-after",
    src: iconAfter
  })));
}
MenuItem.propTypes = {
  /** Specifies that this ``MenuItem`` is selected inside the ``SelectMenu`` */
  defaultSelected: PropTypes.bool,
  /** Specifies class name to append to the base element */
  className: PropTypes.string,
  /** Specifies the content of the ``MenuItem`` */
  children: PropTypes.node,
  /** Specifies the base element */
  as: PropTypes.elementType,
  /** Specifies the jsx before the content of the ``MenuItem`` */
  iconBefore: PropTypes.oneOfType([PropTypes.element, PropTypes.elementType]),
  /** Specifies the jsx after the content of the ``MenuItem`` */
  iconAfter: PropTypes.oneOfType([PropTypes.element, PropTypes.elementType])
};
MenuItem.defaultProps = {
  defaultSelected: false,
  as: 'button',
  className: undefined,
  children: null,
  iconBefore: undefined,
  iconAfter: undefined
};
export default MenuItem;
//# sourceMappingURL=MenuItem.js.map