function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var _excluded = ["className", "actions"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React, { useContext, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { MoreVert } from '../../icons';
import useToggle from '../hooks/useToggle';
import useWindowSize from '../hooks/useWindowSize';
import DataTableContext from './DataTableContext';
import Icon from '../Icon';
import IconButton from '../IconButton';
import breakpoints from '../utils/breakpoints';
import ModalPopup from '../Modal/ModalPopup';
import Stack from '../Stack';
import Button from '../Button';
export var ACTION_OVERFLOW_BUTTON_TEXT = 'More actions';
export var SMALL_SCREEN_ACTION_OVERFLOW_BUTTON_TEXT = 'Actions';
function CollapsibleButtonGroup(_ref) {
  var className = _ref.className,
    actions = _ref.actions,
    rest = _objectWithoutProperties(_ref, _excluded);
  var _useToggle = useToggle(false),
    _useToggle2 = _slicedToArray(_useToggle, 3),
    isOverflowMenuOpen = _useToggle2[0],
    openOverflowMenu = _useToggle2[1],
    closeOverflowMenu = _useToggle2[2];
  var _useState = useState(null),
    _useState2 = _slicedToArray(_useState, 2),
    overflowMenuTarget = _useState2[0],
    setOverflowMenuTarget = _useState2[1];
  var _useContext = useContext(DataTableContext),
    _useContext$controlle = _slicedToArray(_useContext.controlledTableSelections, 1),
    isEntireTableSelected = _useContext$controlle[0].isEntireTableSelected,
    selectedFlatRows = _useContext.selectedFlatRows,
    rows = _useContext.rows;
  var _useWindowSize = useWindowSize(),
    width = _useWindowSize.width;
  var selectedRows = selectedFlatRows || rows;
  var _useMemo = useMemo(function () {
      if (width < breakpoints.small.minWidth) {
        // On a small screen, all actions will be in the overflow menu
        return [[], _toConsumableArray(actions)];
      }
      // The first two actions will be displayed as buttons, the rest will go in an overflow menu
      var firstTwoActions = _toConsumableArray(actions).splice(0, 2);
      var extraActions = _toConsumableArray(actions).slice(2);

      /*  Reversing the array because to the user it makes sense to put the primary button first,
          but we want it on the right */
      return [firstTwoActions.reverse(), extraActions];
    }, [actions, width]),
    _useMemo2 = _slicedToArray(_useMemo, 2),
    visibleActions = _useMemo2[0],
    dropdownActions = _useMemo2[1];
  if (!isEntireTableSelected && !selectedRows) {
    return null;
  }
  var cloneAction = function cloneAction(action, index) {
    return /*#__PURE__*/React.cloneElement(action.component, _objectSpread({
      // eslint-disable-next-line react/no-array-index-key
      key: "".concat(action).concat(index),
      as: Button
    }, action.args));
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    className: className
  }, rest), dropdownActions.length > 0 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(IconButton, {
    variant: "secondary",
    iconAs: Icon,
    src: MoreVert,
    alt: width > breakpoints.small.minWidth ? ACTION_OVERFLOW_BUTTON_TEXT : SMALL_SCREEN_ACTION_OVERFLOW_BUTTON_TEXT,
    id: "actions-dropdown",
    ref: setOverflowMenuTarget,
    onClick: openOverflowMenu
  }), /*#__PURE__*/React.createElement(ModalPopup, {
    positionRef: overflowMenuTarget,
    onClose: closeOverflowMenu,
    placement: "bottom-end",
    isOpen: isOverflowMenuOpen
  }, /*#__PURE__*/React.createElement("div", {
    className: "pgn__datatable__overflow-actions-menu"
  }, /*#__PURE__*/React.createElement(Stack, {
    gap: 2
  }, dropdownActions.map(cloneAction))))), /*#__PURE__*/React.createElement("div", {
    className: "pgn__datatable__visible-actions"
  }, visibleActions.map(cloneAction)));
}
CollapsibleButtonGroup.defaultProps = {
  className: null
};
CollapsibleButtonGroup.propTypes = {
  /** Class names for the div wrapping the button components */
  className: PropTypes.string,
  /** Array of action objects, containing a component and their callback args */
  actions: PropTypes.arrayOf(PropTypes.shape({
    component: PropTypes.oneOfType([PropTypes.element, PropTypes.elementType]).isRequired,
    args: PropTypes.shape({})
  })).isRequired
};
export default CollapsibleButtonGroup;
//# sourceMappingURL=CollapsibleButtonGroup.js.map