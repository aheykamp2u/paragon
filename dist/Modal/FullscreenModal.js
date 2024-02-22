var _excluded = ["children", "footerNode", "beforeBodyNode", "afterBodyNode"];
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React from 'react';
import PropTypes from 'prop-types';
import ModalDialog from './ModalDialog';
export var FULLSCREEN_MODAL_CLOSE_LABEL = 'Close';
function FullscreenModal(_ref) {
  var children = _ref.children,
    footerNode = _ref.footerNode,
    beforeBodyNode = _ref.beforeBodyNode,
    afterBodyNode = _ref.afterBodyNode,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/React.createElement(ModalDialog, props, /*#__PURE__*/React.createElement(ModalDialog.Header, null, /*#__PURE__*/React.createElement(ModalDialog.Title, null, props.title)), beforeBodyNode, /*#__PURE__*/React.createElement(ModalDialog.Body, {
    className: props.modalBodyClassName
  }, children), afterBodyNode, footerNode && /*#__PURE__*/React.createElement(ModalDialog.Footer, null, footerNode));
}
FullscreenModal.propTypes = {
  /** Specifies contents of the component. */
  children: PropTypes.node.isRequired,
  /** Specifies class name to append to the base element. */
  className: PropTypes.string,
  /** Specifies the aria-label of the dialog. */
  title: PropTypes.string.isRequired,
  /** Specifies a callback to close the modal dialog. */
  onClose: PropTypes.func.isRequired,
  /** Specifies whether the modal is open. */
  isOpen: PropTypes.bool,
  /** Specifies whether the model hase close 'x' icon button in the top right of the dialog box. */
  hasCloseButton: PropTypes.bool,
  /** Specifies size of the dialog box. */
  size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl', 'fullscreen']),
  /** Specifies visual style of the dialog box. */
  variant: PropTypes.oneOf(['default', 'warning', 'danger', 'success', 'dark']),
  /** The label supplied to the close icon button if one is rendered */
  closeLabel: PropTypes.string,
  /**
   * Determines where a scrollbar should appear if a modal is too large for the
   * viewport. When false, the ModalDialog.Body receives a scrollbar, when true
   * the browser window itself receives the scrollbar.
   */
  isFullscreenScroll: PropTypes.bool,
  /** Specifies footer for the dialog box. */
  footerNode: PropTypes.node,
  /** Specifies content that should be rendered before modal's body. */
  beforeBodyNode: PropTypes.node,
  /** Specifies content that should be rendered after modal's body. */
  afterBodyNode: PropTypes.node,
  /** Specifies class name for modal's body component. */
  modalBodyClassName: PropTypes.string
};
FullscreenModal.defaultProps = {
  isOpen: false,
  hasCloseButton: true,
  size: 'fullscreen',
  variant: 'dark',
  closeLabel: FULLSCREEN_MODAL_CLOSE_LABEL,
  className: undefined,
  isFullscreenScroll: false,
  footerNode: null,
  beforeBodyNode: null,
  afterBodyNode: null,
  modalBodyClassName: ''
};
export default FullscreenModal;
//# sourceMappingURL=FullscreenModal.js.map