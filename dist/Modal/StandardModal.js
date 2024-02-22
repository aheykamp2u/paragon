var _excluded = ["children", "footerNode", "beforeBodyNode", "afterBodyNode"];
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React from 'react';
import PropTypes from 'prop-types';
import ModalDialog from './ModalDialog';
export var STANDARD_MODAL_CLOSE_LABEL = 'Close';
function StandardModal(_ref) {
  var children = _ref.children,
    footerNode = _ref.footerNode,
    beforeBodyNode = _ref.beforeBodyNode,
    afterBodyNode = _ref.afterBodyNode,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/React.createElement(ModalDialog, props, /*#__PURE__*/React.createElement(ModalDialog.Header, null, /*#__PURE__*/React.createElement(ModalDialog.Title, null, props.title)), beforeBodyNode, /*#__PURE__*/React.createElement(ModalDialog.Body, null, children), afterBodyNode, footerNode && /*#__PURE__*/React.createElement(ModalDialog.Footer, null, footerNode));
}
StandardModal.propTypes = {
  /** Specifies the content of the `Modal` */
  children: PropTypes.node.isRequired,
  /** The title for the `Modal` */
  title: PropTypes.string.isRequired,
  /** Optional callback function for when the modal it dismissed. */
  onClose: PropTypes.func.isRequired,
  /** Is the modal open or closed */
  isOpen: PropTypes.bool,
  /** The close 'x' icon button in the top right corner */
  hasCloseButton: PropTypes.bool,
  /** The modal size */
  size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl', 'fullscreen']),
  /** The modal style variant to use */
  variant: PropTypes.oneOf(['default', 'warning', 'danger', 'success', 'dark']),
  /** Specifies the `aria-label` attribute for the close button */
  closeLabel: PropTypes.string,
  /** A class name to append to the modal */
  className: PropTypes.string,
  /**
   * Determines where a scrollbar should appear if a modal is too large for the
   * viewport. When false, the ModalDialog.Body receives a scrollbar, when true
   * the browser window itself receives the scrollbar.
   */
  isFullscreenScroll: PropTypes.bool,
  /** Specifies what should be displayed in the footer of the nodal */
  footerNode: PropTypes.node,
  /** Specifies what should be displayed before the body block */
  beforeBodyNode: PropTypes.node,
  /** Specifies what should be displayed after the body block */
  afterBodyNode: PropTypes.node
};
StandardModal.defaultProps = {
  isOpen: false,
  hasCloseButton: true,
  size: 'md',
  variant: 'default',
  closeLabel: STANDARD_MODAL_CLOSE_LABEL,
  className: undefined,
  isFullscreenScroll: false,
  footerNode: null,
  beforeBodyNode: null,
  afterBodyNode: null
};
export default StandardModal;
//# sourceMappingURL=StandardModal.js.map