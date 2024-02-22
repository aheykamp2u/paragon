function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
import React from 'react';
import BaseNav from 'react-bootstrap/Nav';
import BaseNavDropdown from 'react-bootstrap/NavDropdown';
import BaseNavItem from 'react-bootstrap/NavItem';
import BaseNavLink from 'react-bootstrap/NavLink';
import PropTypes from 'prop-types';
function Nav(props) {
  return /*#__PURE__*/React.createElement(BaseNav, props);
}
function NavItem(props) {
  return /*#__PURE__*/React.createElement(BaseNavItem, props);
}
function NavLink(props) {
  return /*#__PURE__*/React.createElement(BaseNavLink, props);
}
function NavDropdown(props) {
  return /*#__PURE__*/React.createElement(BaseNavDropdown, props);
}
function NavDropdownItem(props) {
  return /*#__PURE__*/React.createElement(BaseNavDropdown.Item, props);
}
function NavDropdownDivider(props) {
  return /*#__PURE__*/React.createElement(BaseNavDropdown.Divider, props);
}
Nav.propTypes = {
  /** Change the underlying component CSS base class name and modifier class names prefix. */
  cardHeaderBsPrefix: PropTypes.string,
  /** Specifies default active nav (uncontrolled usage). */
  defaultActiveKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** Marks the NavItem with a matching eventKey (or href if present) as active. */
  activeKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** Set a custom element for this component. */
  as: PropTypes.elementType,
  /** Have all `NavItems` proportionately fill all available width. */
  fill: PropTypes.bool,
  /** Have all `NavItems` evenly fill all available width. */
  justify: PropTypes.bool,
  /**
   * Apply styling an alignment for use in a `Navbar`.
   * This prop will be set automatically when the `Nav` is used inside a `Navbar`.
   */
  navbar: PropTypes.bool,
  /** Callback fired when a key is pressed. */
  onKeyDown: PropTypes.func,
  /** A callback fired when a NavItem is selected. */
  onSelect: PropTypes.func,
  /**
   * ARIA role for the `Nav`, in the context of a `TabContainer`,
   * the default will be set to "tablist", but can be overridden by the `Nav` when set explicitly.
   */
  role: PropTypes.string,
  /** The visual variant of the nav items. */
  variant: PropTypes.oneOf(['tabs', 'pills']),
  /** Change the underlying component CSS base class name and modifier class names prefix. */
  bsPrefix: PropTypes.string
};
NavItem.propTypes = {
  /** The ARIA role for the `NavItem` */
  role: PropTypes.string,
  /** Set a custom element for this component. */
  as: PropTypes.elementType,
  /** Change the underlying component CSS base class name and modifier class names prefix. */
  bsPrefix: PropTypes.string
};
NavLink.propTypes = {
  /** Callback fired when the active item changes. */
  onSelect: PropTypes.string,
  /** The active state of the `NavItem` item. */
  active: PropTypes.bool,
  /** You can use a custom element type for this component. */
  as: PropTypes.elementType,
  /** The disabled state of the `NavItem` item. */
  disabled: PropTypes.bool,
  /**
   * Uniquely identifies the `NavItem` amongst its siblings,
   * used to determine and control the active state of the parent `Nav`
   */
  eventKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** The HTML href attribute for the `NavLink` */
  href: PropTypes.string,
  /** The ARIA role for the `NavLink`, In the context of a 'tablist' parent `Nav`, the role defaults to 'tab' */
  role: PropTypes.string,
  /** Change the underlying component CSS base class name and modifier class names prefix. */
  bsPrefix: PropTypes.string
};
NavDropdown.propTypes = {
  /** An html id attribute for the `Toggle` button, necessary for assistive technologies, such as screen readers. */
  id: PropTypes.string.isRequired,
  /** The content of the non-toggle Button. */
  title: PropTypes.node.isRequired,
  /** Style the toggle `NavLink` as active */
  active: PropTypes.bool,
  /** Disables the toggle `NavLink` */
  disabled: PropTypes.bool,
  /** An ARIA accessible role applied to the `Menu` component. */
  menuRole: PropTypes.string,
  /** Menu color variant. Omitting this will use the default light color. */
  menuVariant: PropTypes.oneOf(['dark']),
  /** An `onClick` handler passed to the `Toggle` component */
  onClick: PropTypes.func,
  /** Whether to render the dropdown menu in the DOM before the first time it is shown. */
  renderMenuOnMount: PropTypes.bool,
  /** Which event when fired outside the component will cause it to be closed. */
  rootCloseEvent: PropTypes.string,
  /** Change the underlying component CSS base class name and modifier class names prefix. */
  bsPrefix: PropTypes.string
};
Nav.defaultProps = _objectSpread({}, BaseNav.defaultProps);
NavDropdown.defaultProps = _objectSpread({}, BaseNavDropdown.defaultProps);
NavItem.defaultProps = _objectSpread({}, BaseNavItem.defaultProps);
NavLink.defaultProps = _objectSpread({}, BaseNavLink.defaultProps);
Nav.Item = NavItem;
Nav.Link = NavLink;
NavDropdown.Item = NavDropdownItem;
NavDropdown.Divider = NavDropdownDivider;
export { NavDropdown, NavItem, NavLink };
export default Nav;
//# sourceMappingURL=index.js.map