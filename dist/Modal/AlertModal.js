var _excluded = ["children", "footerNode", "icon"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { requiredWhenNot } from '../utils/propTypes';
import Icon from '../Icon';
import ModalDialog from './ModalDialog';
function AlertModal(_ref) {
  var children = _ref.children,
    footerNode = _ref.footerNode,
    icon = _ref.icon,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/React.createElement(ModalDialog, _extends({}, props, {
    className: classNames('pgn__alert-modal', props.className)
  }), /*#__PURE__*/React.createElement(ModalDialog.Header, null, /*#__PURE__*/React.createElement(ModalDialog.Title, null, icon && /*#__PURE__*/React.createElement(Icon, {
    "data-testid": "title-icon",
    src: icon,
    className: classNames('pgn__alert-modal__title_icon')
  }), props.title)), /*#__PURE__*/React.createElement(ModalDialog.Body, null, children), footerNode && /*#__PURE__*/React.createElement(ModalDialog.Footer, null, footerNode));
}
AlertModal.propTypes = {
  children: PropTypes.node.isRequired,
  /** The aria-label of the dialog */
  title: PropTypes.string.isRequired,
  /** Is the modal dialog open or closed */
  isOpen: PropTypes.bool,
  /** Prevent clicking on the backdrop to close the modal */
  isBlocking: PropTypes.bool,
  /** Specifies whether the dialog box should contain 'x' icon button in the top right */
  hasCloseButton: PropTypes.bool,
  /** A callback to close the modal dialog */
  onClose: requiredWhenNot(PropTypes.func, 'isBlocking'),
  /** Sizes determine the maximum width of the dialog box */
  size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl', 'fullscreen']),
  /** The visual style of the dialog box */
  variant: PropTypes.oneOf(['default', 'warning', 'danger', 'success']),
  /** The label supplied to the close icon button if one is rendered */
  closeLabel: PropTypes.string,
  /** Specifies class name to append to the base element */
  className: PropTypes.string,
  /**
   * Determines where a scrollbar should appear if a modal is too large for the
   * viewport. When false, the ModalDialog.Body receives a scrollbar, when true
   * the browser window itself receives the scrollbar.
   */
  isFullscreenScroll: PropTypes.bool,
  /** Specifies what should be displayed in the footer of the dialog box */
  footerNode: PropTypes.node,
  /** Icon that will be shown in the header of modal */
  icon: PropTypes.elementType
};
AlertModal.defaultProps = {
  isOpen: false,
  isBlocking: false,
  hasCloseButton: false,
  onClose: function onClose() {},
  size: 'md',
  variant: 'default',
  closeLabel: 'Close',
  className: undefined,
  isFullscreenScroll: false,
  footerNode: null,
  icon: undefined
};
export default AlertModal;
//# sourceMappingURL=AlertModal.js.map