var _excluded = ["className", "destination", "children", "target", "onClick", "externalLinkAlternativeText", "externalLinkTitle", "variant", "isInline", "showLaunchIcon"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import isRequiredIf from 'react-proptype-conditional-require';
import { Launch } from '../../icons';
import Icon from '../Icon';
import withDeprecatedProps, { DeprTypes } from '../withDeprecatedProps';
export var HYPER_LINK_EXTERNAL_LINK_ALT_TEXT = 'in a new tab';
export var HYPER_LINK_EXTERNAL_LINK_TITLE = 'Opens in a new tab';
var Hyperlink = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var className = props.className,
    destination = props.destination,
    children = props.children,
    target = props.target,
    onClick = props.onClick,
    externalLinkAlternativeText = props.externalLinkAlternativeText,
    externalLinkTitle = props.externalLinkTitle,
    variant = props.variant,
    isInline = props.isInline,
    showLaunchIcon = props.showLaunchIcon,
    attrs = _objectWithoutProperties(props, _excluded);
  var externalLinkIcon;
  if (target === '_blank') {
    var generateRel = function generateRel() {
      var rel = attrs.rel;
      if (!rel) {
        return 'noopener noreferrer';
      }
      if (!rel.includes('noopener')) {
        rel += ' noopener';
      }
      if (!rel.includes('noreferrer')) {
        rel += ' noreferrer';
      }
      return rel;
    };

    // Add this rel attribute to prevent Reverse Tabnabbing
    attrs.rel = generateRel();
    if (showLaunchIcon) {
      externalLinkIcon = /*#__PURE__*/React.createElement("span", {
        className: "pgn__hyperlink__external-icon",
        title: externalLinkTitle
      }, /*#__PURE__*/React.createElement(Icon, {
        src: Launch,
        screenReaderText: externalLinkAlternativeText,
        style: {
          height: '1em',
          width: '1em'
        },
        "data-testid": "hyperlink-icon"
      }));
    }
  }
  return /*#__PURE__*/React.createElement("a", _extends({
    ref: ref,
    className: classNames('pgn__hyperlink', "".concat(variant, "-link"), {
      'standalone-link': !isInline,
      'inline-link': isInline
    }, className),
    href: destination,
    target: target,
    onClick: onClick
  }, attrs), children, externalLinkIcon);
});
Hyperlink.defaultProps = {
  className: undefined,
  target: '_self',
  onClick: function onClick() {},
  externalLinkAlternativeText: HYPER_LINK_EXTERNAL_LINK_ALT_TEXT,
  externalLinkTitle: HYPER_LINK_EXTERNAL_LINK_TITLE,
  variant: 'default',
  isInline: false,
  showLaunchIcon: true
};
Hyperlink.propTypes = {
  /** specifies the URL */
  destination: PropTypes.string.isRequired,
  /** Content of the hyperlink */
  children: PropTypes.node.isRequired,
  /** Custom class names for the hyperlink */
  className: PropTypes.string,
  /** specifies where the link should open. The default behavior is `_self`, which means that the URL will be
   * loaded into the same browsing context as the current one.
   * If the target is `_blank` (opening a new window) `rel='noopener'` will be added to the anchor tag to prevent
   * any potential [reverse tabnabbing attack](https://www.owasp.org/index.php/Reverse_Tabnabbing).
  */
  target: PropTypes.string,
  /** specifies the callback function when the link is clicked */
  onClick: PropTypes.func,
  /** specifies the text for links with a `_blank` target (which loads the URL in a new browsing context). */
  externalLinkAlternativeText: isRequiredIf(PropTypes.string, function (props) {
    return props.target === '_blank';
  }),
  /** specifies the title for links with a `_blank` target (which loads the URL in a new browsing context). */
  externalLinkTitle: isRequiredIf(PropTypes.string, function (props) {
    return props.target === '_blank';
  }),
  /** type of hyperlink */
  variant: PropTypes.oneOf(['default', 'muted', 'brand']),
  /** specify the link style. By default, it will be underlined. */
  isInline: PropTypes.bool,
  /** specify if we need to show launch Icon. By default, it will be visible. */
  showLaunchIcon: PropTypes.bool
};
export default withDeprecatedProps(Hyperlink, 'Hyperlink', {
  /** specifies the text or element that a URL should be associated with */
  content: {
    deprType: DeprTypes.MOVED,
    newName: 'children'
  }
});
//# sourceMappingURL=index.js.map