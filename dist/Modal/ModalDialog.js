function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useMediaQuery } from 'react-responsive';
import ModalLayer from './ModalLayer';
import ModalCloseButton from './ModalCloseButton';
import ModalDialogHeader from './ModalDialogHeader';
import ModalDialogTitle from './ModalDialogTitle';
import ModalDialogFooter from './ModalDialogFooter';
import ModalDialogBody from './ModalDialogBody';
import ModalDialogHero from './ModalDialogHero';
import Icon from '../Icon';
import IconButton from '../IconButton';
import { Close } from '../../icons';
export var MODAL_DIALOG_CLOSE_LABEL = 'Close';
function ModalDialog(_ref) {
  var _classNames;
  var children = _ref.children,
    title = _ref.title,
    isOpen = _ref.isOpen,
    onClose = _ref.onClose,
    size = _ref.size,
    variant = _ref.variant,
    hasCloseButton = _ref.hasCloseButton,
    closeLabel = _ref.closeLabel,
    isFullscreenScroll = _ref.isFullscreenScroll,
    className = _ref.className,
    isFullscreenOnMobile = _ref.isFullscreenOnMobile,
    isBlocking = _ref.isBlocking,
    zIndex = _ref.zIndex,
    isOverflowVisible = _ref.isOverflowVisible;
  var isMobile = useMediaQuery({
    query: '(max-width: 767.98px)'
  });
  var showFullScreen = isFullscreenOnMobile && isMobile;
  return /*#__PURE__*/React.createElement(ModalLayer, {
    isOpen: isOpen,
    onClose: onClose,
    isBlocking: isBlocking,
    zIndex: zIndex
  }, /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    "aria-label": title,
    className: classNames('pgn__modal', (_classNames = {}, _defineProperty(_classNames, "pgn__modal-".concat(showFullScreen ? 'fullscreen' : size), size), _defineProperty(_classNames, "pgn__modal-".concat(variant), variant), _defineProperty(_classNames, 'pgn__modal-scroll-fullscreen', isFullscreenScroll), _defineProperty(_classNames, 'pgn__modal-visible-overflow', isOverflowVisible), _classNames), className)
  }, hasCloseButton && /*#__PURE__*/React.createElement("div", {
    className: "pgn__modal-close-container"
  }, /*#__PURE__*/React.createElement(ModalCloseButton, {
    as: IconButton,
    iconAs: Icon,
    invertColors: variant === 'dark',
    src: Close,
    alt: closeLabel
  })), children));
}
ModalDialog.propTypes = {
  /**
   *  Specifies the content of the dialog
   */
  children: PropTypes.node.isRequired,
  /**
   * The aria-label of the dialog
   */
  title: PropTypes.string.isRequired,
  /**
   * A callback to close the modal dialog
   */
  onClose: PropTypes.func.isRequired,
  /**
   * Is the modal dialog open or closed
   */
  isOpen: PropTypes.bool,
  /**
   * The close 'x' icon button in the top right of the dialog box
   */
  hasCloseButton: PropTypes.bool,
  /**
   * Sizes determine the maximum width of the dialog box
   */
  size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl', 'fullscreen']),
  /**
   * The visual style of the dialog box
   */
  variant: PropTypes.oneOf(['default', 'warning', 'danger', 'success', 'dark']),
  /**
   * The label supplied to the close icon button if one is rendered
   */
  closeLabel: PropTypes.string,
  /**
   *  Specifies class name to append to the base element
   */
  className: PropTypes.string,
  /**
   * Determines where a scrollbar should appear if a modal is too large for the
   * viewport. When false, the ``ModalDialog``. Body receives a scrollbar, when true
   * the browser window itself receives the scrollbar.
   */
  isFullscreenScroll: PropTypes.bool,
  /**
   * To show full screen view on mobile screens
   */
  isFullscreenOnMobile: PropTypes.bool,
  /**
   * Prevent clicking on the backdrop to close the modal
   */
  isBlocking: PropTypes.bool,
  /**
   * Specifies the z-index of the modal
   */
  zIndex: PropTypes.number,
  /** Specifies whether overflow is visible in the modal */
  isOverflowVisible: PropTypes.bool
};
ModalDialog.defaultProps = {
  isOpen: false,
  hasCloseButton: true,
  size: 'md',
  variant: 'default',
  closeLabel: MODAL_DIALOG_CLOSE_LABEL,
  className: undefined,
  isFullscreenScroll: false,
  isFullscreenOnMobile: false,
  isBlocking: false,
  zIndex: undefined,
  isOverflowVisible: true
};
ModalDialog.Header = ModalDialogHeader;
ModalDialog.Title = ModalDialogTitle;
ModalDialog.Footer = ModalDialogFooter;
ModalDialog.CloseButton = ModalCloseButton;
ModalDialog.Body = ModalDialogBody;
ModalDialog.Hero = ModalDialogHero;
export default ModalDialog;
//# sourceMappingURL=ModalDialog.js.map