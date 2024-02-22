function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var _excluded = ["orientation", "isLoading", "className", "isClickable", "muted", "variant"];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React from 'react';
import BaseCard from 'react-bootstrap/Card';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import CardContext, { CardContextProvider } from './CardContext';
import CardHeader from './CardHeader';
import CardDivider from './CardDivider';
import CardSection from './CardSection';
import CardFooter from './CardFooter';
import CardImageCap from './CardImageCap';
import CardBody from './CardBody';
import CardStatus from './CardStatus';
import withDeprecatedProps, { DeprTypes } from '../withDeprecatedProps';
export var CARD_VARIANTS = ['light', 'dark', 'muted'];
var Card = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var orientation = _ref.orientation,
    isLoading = _ref.isLoading,
    className = _ref.className,
    isClickable = _ref.isClickable,
    muted = _ref.muted,
    variant = _ref.variant,
    props = _objectWithoutProperties(_ref, _excluded);
  var resolvedVariant = muted ? 'muted' : variant;
  return /*#__PURE__*/React.createElement(CardContextProvider, {
    orientation: orientation,
    isLoading: isLoading,
    variant: resolvedVariant
  }, /*#__PURE__*/React.createElement(BaseCard, _extends({}, props, {
    className: classNames(className, 'pgn__card', _defineProperty({
      horizontal: orientation === 'horizontal',
      clickable: isClickable
    }, "pgn__card-".concat(resolvedVariant), resolvedVariant)),
    ref: ref,
    tabIndex: isClickable ? 0 : -1
  })));
});
export { default as CardColumns } from 'react-bootstrap/CardColumns';
export { default as CardDeck } from './CardDeck';
export { default as CardCarousel } from './CardCarousel/CardCarousel';
export { default as CardImg } from 'react-bootstrap/CardImg';
export { default as CardGroup } from 'react-bootstrap/CardGroup';
export { default as CardGrid } from './CardGrid';
Card.propTypes = {
  /** Specifies class name to append to the base element. */
  className: PropTypes.string,
  /** Specifies which orientation to use. */
  orientation: PropTypes.oneOf(['vertical', 'horizontal']),
  /** Specifies whether the `Card` is clickable, if `true` appropriate `hover` and `focus` styling will be added. */
  isClickable: PropTypes.bool,
  /** Specifies loading state. */
  isLoading: PropTypes.bool,
  /** Specifies `Card` style variant. */
  variant: PropTypes.oneOf(CARD_VARIANTS),
  /** **Deprecated**. Specifies whether `Card` uses `muted` variant. Use `variant="muted"` instead. */
  muted: PropTypes.bool
};
Card.defaultProps = _objectSpread(_objectSpread({}, BaseCard.defaultProps), {}, {
  className: undefined,
  orientation: 'vertical',
  isClickable: false,
  variant: 'light',
  isLoading: false
});
var CardWithDeprecatedProp = withDeprecatedProps(Card, 'Card', {
  muted: {
    deprType: DeprTypes.REMOVED,
    message: 'Use "variant" prop instead, i.e. variant="muted"'
  }
});
CardWithDeprecatedProp.Status = CardStatus;
CardWithDeprecatedProp.Header = CardHeader;
CardWithDeprecatedProp.Divider = CardDivider;
CardWithDeprecatedProp.Section = CardSection;
CardWithDeprecatedProp.Footer = CardFooter;
CardWithDeprecatedProp.ImageCap = CardImageCap;
CardWithDeprecatedProp.Context = CardContext;
CardWithDeprecatedProp.Body = CardBody;
export default CardWithDeprecatedProp;
//# sourceMappingURL=index.js.map