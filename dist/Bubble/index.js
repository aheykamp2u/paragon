var _excluded = ["variant", "className", "children", "disabled", "expandable"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
var STYLE_VARIANTS = ['primary', 'success', 'error', 'warning'];
var Bubble = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var variant = _ref.variant,
    className = _ref.className,
    children = _ref.children,
    disabled = _ref.disabled,
    expandable = _ref.expandable,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/React.createElement("div", _extends({
    ref: ref,
    className: classNames('pgn__bubble', "pgn__bubble-".concat(variant), className, {
      disabled: disabled,
      expandable: expandable
    })
  }, props), children);
});
Bubble.propTypes = {
  /** Specifies contents of the component. */
  children: PropTypes.node,
  /** The `Bubble` style variant to use. */
  variant: PropTypes.oneOf(STYLE_VARIANTS),
  /** Activates disabled variant. */
  disabled: PropTypes.bool,
  /** A class name to append to the base element. */
  className: PropTypes.string,
  /** Specifies whether to add padding to the `Bubble` or not. */
  expandable: PropTypes.bool
};
Bubble.defaultProps = {
  children: null,
  variant: 'primary',
  disabled: false,
  className: undefined,
  expandable: false
};
export default Bubble;
//# sourceMappingURL=index.js.map