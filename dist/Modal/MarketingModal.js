var _excluded = ["children", "footerNode", "heroNode", "heroIsDark", "beforeBodyNode", "afterBodyNode"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React from 'react';
import PropTypes from 'prop-types';
import { requiredWhenNot } from '../utils/propTypes';
import ModalDialog from './ModalDialog';
function MarketingModal(_ref) {
  var children = _ref.children,
    footerNode = _ref.footerNode,
    heroNode = _ref.heroNode,
    heroIsDark = _ref.heroIsDark,
    beforeBodyNode = _ref.beforeBodyNode,
    afterBodyNode = _ref.afterBodyNode,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/React.createElement(ModalDialog, _extends({}, props, {
    variant: heroIsDark ? 'dark' : 'default'
  }), heroNode, beforeBodyNode, /*#__PURE__*/React.createElement(ModalDialog.Body, null, children), afterBodyNode, footerNode && /*#__PURE__*/React.createElement(ModalDialog.Footer, null, footerNode));
}
MarketingModal.propTypes = {
  /** Specifies the content of the modal */
  children: PropTypes.node.isRequired,
  /** Title of the modal */
  title: PropTypes.string.isRequired,
  /** Is the modal dialog open or closed */
  isOpen: PropTypes.bool,
  /** Prevent clicking on the backdrop to close the modal */
  isBlocking: PropTypes.bool,
  /** The close 'x' icon button in the top right corner */
  hasCloseButton: PropTypes.bool,
  /** Callback function for when the modal is dismissed */
  onClose: requiredWhenNot(PropTypes.func, 'isBlocking'),
  /** Size of the modal window */
  size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl', 'fullscreen']),
  /** Specifies the ``aria-label`` attribute for the close button */
  closeLabel: PropTypes.string,
  /** Specifies class name to append to the base element */
  className: PropTypes.string,
  /**
   * Determines where a scrollbar should appear if a modal is too large for the
   * viewport. When false, the ModalDialog.Body receives a scrollbar, when true
   * the browser window itself receives the scrollbar.
   */
  isFullscreenScroll: PropTypes.bool,
  /** Specifies what should be displayed in the footer of the nodal */
  footerNode: PropTypes.node,
  /** Enables dark theme for the modal */
  heroIsDark: PropTypes.bool,
  /** Specifies what should be displayed in the header of the modal */
  heroNode: PropTypes.node,
  /** Specifies what should be displayed before the body block */
  beforeBodyNode: PropTypes.node,
  /** Specifies what should be displayed after the body block */
  afterBodyNode: PropTypes.node
};
MarketingModal.defaultProps = {
  isOpen: false,
  isBlocking: false,
  hasCloseButton: true,
  onClose: function onClose() {},
  size: 'md',
  closeLabel: 'Close',
  className: undefined,
  isFullscreenScroll: true,
  footerNode: null,
  heroIsDark: true,
  heroNode: null,
  beforeBodyNode: null,
  afterBodyNode: null
};
export default MarketingModal;
//# sourceMappingURL=MarketingModal.js.map