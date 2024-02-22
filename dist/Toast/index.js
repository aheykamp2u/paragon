var _excluded = ["action", "children", "className", "closeLabel", "onClose", "show"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React, { useState } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import BaseToast from 'react-bootstrap/Toast';
import { useIntl } from 'react-intl';
import { Close } from '../../icons';
import ToastContainer from './ToastContainer';
import Button from '../Button';
import Icon from '../Icon';
import IconButton from '../IconButton';
export var TOAST_CLOSE_LABEL_TEXT = 'Close';
export var TOAST_DELAY = 5000;
function Toast(_ref) {
  var action = _ref.action,
    children = _ref.children,
    className = _ref.className,
    closeLabel = _ref.closeLabel,
    onClose = _ref.onClose,
    show = _ref.show,
    rest = _objectWithoutProperties(_ref, _excluded);
  var intl = useIntl();
  var _useState = useState(true),
    _useState2 = _slicedToArray(_useState, 2),
    autoHide = _useState2[0],
    setAutoHide = _useState2[1];
  var intlCloseLabel = closeLabel || intl.formatMessage({
    id: 'pgn.Toast.closeLabel',
    defaultMessage: 'Close',
    description: 'Close label for Toast component'
  });
  return /*#__PURE__*/React.createElement(ToastContainer, null, /*#__PURE__*/React.createElement(BaseToast, _extends({
    autohide: autoHide,
    className: classNames('pgn__toast', className),
    onClose: onClose,
    onBlur: function onBlur() {
      return setAutoHide(true);
    },
    onFocus: function onFocus() {
      return setAutoHide(false);
    },
    onMouseOut: function onMouseOut() {
      return setAutoHide(true);
    },
    onMouseOver: function onMouseOver() {
      return setAutoHide(false);
    },
    show: show
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "toast-header"
  }, /*#__PURE__*/React.createElement("p", {
    className: "small"
  }, children), /*#__PURE__*/React.createElement("div", {
    className: "toast-header-btn-container"
  }, /*#__PURE__*/React.createElement(IconButton, {
    iconAs: Icon,
    alt: intlCloseLabel,
    className: "align-self-start",
    src: Close,
    onClick: onClose,
    variant: "primary",
    invertColors: true
  }))), action && /*#__PURE__*/React.createElement(Button, {
    as: action.href ? 'a' : 'button',
    href: action.href,
    onClick: action.onClick,
    size: "sm",
    variant: "inverse-outline-primary"
  }, action.label)));
}
Toast.defaultProps = {
  action: null,
  closeLabel: undefined,
  delay: TOAST_DELAY,
  className: undefined
};
Toast.propTypes = {
  /** A string or an element that is rendered inside the main body of the `Toast`. */
  children: PropTypes.string.isRequired,
  /**
   * A function that is called on close. It can be used to perform
   * actions upon closing of the `Toast`, such as setting the "show"
   * element to false.
   * */
  onClose: PropTypes.func.isRequired,
  /** Boolean used to control whether the `Toast` shows */
  show: PropTypes.bool.isRequired,
  /**
   * Fields used to build optional action button.
   * `label` is a string rendered inside the button.
   * `href` is a link that will render the action button as an anchor tag.
   * `onClick` is a function that is called when the button is clicked.
   */
  action: PropTypes.shape({
    label: PropTypes.string.isRequired,
    href: PropTypes.string,
    onClick: PropTypes.func
  }),
  /**
   * Alt text for the `Toast`'s dismiss button. Defaults to 'Close'.
   */
  closeLabel: PropTypes.string,
  /** Time in milliseconds for which the `Toast` will display. */
  delay: PropTypes.number,
  /** Class names for the `BaseToast` component */
  className: PropTypes.string
};
export default Toast;
//# sourceMappingURL=index.js.map