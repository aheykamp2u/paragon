function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var _excluded = ["children", "arrowKeyNavigationSelector", "ignoredArrowKeysNames", "screenReaderText", "value", "isLoading", "isValueRequired", "valueRequiredErrorMessageText", "isSelectionRequired", "selectionRequiredErrorMessageText", "hasCustomError", "customErrorMessageText", "onChange", "helpMessage"],
  _excluded2 = ["children", "onClick"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React, { useEffect, useState, useRef, forwardRef, useImperativeHandle } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { useIntl } from 'react-intl';
import { requiredWhen } from '../utils/propTypes';
import { KeyboardArrowUp, KeyboardArrowDown } from '../../icons';
import Icon from '../Icon';
import { FormGroupContextProvider, useFormGroupContext } from './FormGroupContext';
import FormControl from './FormControl';
import FormControlFeedback from './FormControlFeedback';
import IconButton from '../IconButton';
import Spinner from '../Spinner';
import useArrowKeyNavigation from '../hooks/useArrowKeyNavigation';
import messages from './messages';
var FormAutosuggest = /*#__PURE__*/forwardRef(function (_ref, ref) {
  var children = _ref.children,
    arrowKeyNavigationSelector = _ref.arrowKeyNavigationSelector,
    ignoredArrowKeysNames = _ref.ignoredArrowKeysNames,
    screenReaderText = _ref.screenReaderText,
    value = _ref.value,
    isLoading = _ref.isLoading,
    isValueRequired = _ref.isValueRequired,
    valueRequiredErrorMessageText = _ref.valueRequiredErrorMessageText,
    isSelectionRequired = _ref.isSelectionRequired,
    selectionRequiredErrorMessageText = _ref.selectionRequiredErrorMessageText,
    hasCustomError = _ref.hasCustomError,
    customErrorMessageText = _ref.customErrorMessageText,
    onChange = _ref.onChange,
    helpMessage = _ref.helpMessage,
    props = _objectWithoutProperties(_ref, _excluded);
  var intl = useIntl();
  var formControlRef = useRef();
  var parentRef = useArrowKeyNavigation({
    selectors: arrowKeyNavigationSelector,
    ignoredKeys: ignoredArrowKeysNames
  });
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    isDropdownExpanded = _useState2[0],
    setIsDropdownExpanded = _useState2[1];
  var _useState3 = useState(false),
    _useState4 = _slicedToArray(_useState3, 2),
    isActive = _useState4[0],
    setIsActive = _useState4[1];
  var _useState5 = useState(false),
    _useState6 = _slicedToArray(_useState5, 2),
    hasValue = _useState6[0],
    setHasValue = _useState6[1];
  var _useState7 = useState(false),
    _useState8 = _slicedToArray(_useState7, 2),
    hasSelection = _useState8[0],
    setHasSelection = _useState8[1];
  var _useState9 = useState((value === null || value === void 0 ? void 0 : value.userProvidedText) || ''),
    _useState10 = _slicedToArray(_useState9, 2),
    displayValue = _useState10[0],
    setDisplayValue = _useState10[1];
  var _useState11 = useState([]),
    _useState12 = _slicedToArray(_useState11, 2),
    dropdownItems = _useState12[0],
    setDropdownItems = _useState12[1];
  var _useState13 = useState(null),
    _useState14 = _slicedToArray(_useState13, 2),
    activeMenuItemId = _useState14[0],
    setActiveMenuItemId = _useState14[1];
  var _useState15 = useState(true),
    _useState16 = _slicedToArray(_useState15, 2),
    isValid = _useState16[0],
    setIsValid = _useState16[1];
  var _useState17 = useState(''),
    _useState18 = _slicedToArray(_useState17, 2),
    errorMessage = _useState18[0],
    setErrorMessage = _useState18[1];
  var handleMenuItemFocus = function handleMenuItemFocus(menuItemId) {
    setActiveMenuItemId(menuItemId);
  };
  var collapseDropdown = function collapseDropdown() {
    setDropdownItems([]);
    setIsDropdownExpanded(false);
    setActiveMenuItemId(null);
  };
  var handleItemSelect = function handleItemSelect(e, onClick) {
    var selectedValue = e.currentTarget.getAttribute('data-value');
    var selectedId = e.currentTarget.id;
    setHasValue(true);
    setHasSelection(true);
    setDisplayValue(selectedValue);
    if (onChange && (!value || value && selectedValue !== value.selectionValue)) {
      onChange({
        userProvidedText: selectedValue,
        selectionValue: selectedValue,
        selectionId: selectedId
      });
    }
    collapseDropdown();
    if (onClick) {
      onClick(e);
    }
  };
  function getItems() {
    var strToFind = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var childrenOpt = React.Children.map(children, function (child) {
      var _child$props$id;
      var _child$props = child.props,
        childChildren = _child$props.children,
        _onClick = _child$props.onClick,
        rest = _objectWithoutProperties(_child$props, _excluded2);
      var menuItemId = (_child$props$id = child.props.id) !== null && _child$props$id !== void 0 ? _child$props$id : uuidv4();
      return /*#__PURE__*/React.cloneElement(child, _objectSpread(_objectSpread({}, rest), {}, {
        children: childChildren,
        'data-value': childChildren,
        onClick: function onClick(e) {
          return handleItemSelect(e, _onClick);
        },
        id: menuItemId,
        onFocus: function onFocus() {
          return handleMenuItemFocus(menuItemId);
        }
      }));
    });
    if (strToFind.length > 0) {
      childrenOpt = childrenOpt.filter(function (opt) {
        return opt.props.children.toLowerCase().includes(strToFind.toLowerCase());
      });
    }
    return childrenOpt;
  }
  var expandDropdown = function expandDropdown() {
    setDropdownItems(getItems(displayValue));
    setIsValid(true);
    setErrorMessage('');
    setIsDropdownExpanded(true);
  };
  var toggleDropdown = function toggleDropdown() {
    if (isDropdownExpanded) {
      collapseDropdown();
    } else {
      expandDropdown();
    }
  };
  var iconToggle = /*#__PURE__*/React.createElement(IconButton, {
    className: "pgn__form-autosuggest__icon-button",
    "data-testid": "autosuggest-iconbutton",
    tabIndex: "-1",
    src: isDropdownExpanded ? KeyboardArrowUp : KeyboardArrowDown,
    iconAs: Icon,
    size: "sm",
    variant: "secondary",
    alt: isDropdownExpanded ? intl.formatMessage(messages.iconButtonClosed) : intl.formatMessage(messages.iconButtonOpened),
    onClick: toggleDropdown
  });
  var enterControl = function enterControl() {
    setIsActive(true);
  };
  var updateErrorStateAndErrorMessage = function updateErrorStateAndErrorMessage() {
    if (hasCustomError) {
      setIsValid(false);
      setErrorMessage(customErrorMessageText);
      return;
    }
    if (isValueRequired && !hasValue) {
      setIsValid(false);
      setErrorMessage(valueRequiredErrorMessageText);
      return;
    }
    if (hasValue && isSelectionRequired && !hasSelection) {
      setIsValid(false);
      setErrorMessage(selectionRequiredErrorMessageText);
      return;
    }
    setIsValid(true);
    setErrorMessage('');
  };
  useImperativeHandle(ref, function () {
    return {
      // expose updateErrorStateAndErrorMessage so consumers can trigger validation
      // when changing the value of the control externally
      updateErrorStateAndErrorMessage: updateErrorStateAndErrorMessage
    };
  });
  var leaveControl = function leaveControl() {
    setIsActive(false);
    collapseDropdown();
    updateErrorStateAndErrorMessage();
  };
  var keyDownHandler = function keyDownHandler(e) {
    if (!isActive) {
      return;
    }
    if (e.key === 'Escape') {
      e.preventDefault();
      if (formControlRef) {
        formControlRef.current.focus();
      }
      collapseDropdown();
      return;
    }
    if (e.key === 'Tab') {
      leaveControl();
    }
  };
  var handleDocumentClick = function handleDocumentClick(e) {
    if (parentRef.current && !parentRef.current.contains(e.target) && isActive) {
      leaveControl();
    }
  };
  useEffect(function () {
    document.addEventListener('keydown', keyDownHandler);
    document.addEventListener('click', handleDocumentClick, true);
    return function () {
      document.removeEventListener('click', handleDocumentClick, true);
      document.removeEventListener('keydown', keyDownHandler);
    };
  });
  useEffect(function () {
    var _value$userProvidedTe;
    setDisplayValue(value ? (_value$userProvidedTe = value.userProvidedText) !== null && _value$userProvidedTe !== void 0 ? _value$userProvidedTe : '' : '');
    setHasValue(!!value && !!value.userProvidedText);
    setHasSelection(!!value && !!value.selectionValue);
  }, [value]);
  var handleTextboxClick = function handleTextboxClick() {
    expandDropdown();
  };
  var handleTextInput = function handleTextInput(e) {
    var userProvidedText = e.target.value;

    // If the user has removed all text from the textbox
    if (!userProvidedText.length) {
      // reset to a "no text, nothing selected" state
      setDisplayValue('');
      setHasValue(false);
      setHasSelection(false);

      // clear and close the dropdown
      setDropdownItems([]);
      collapseDropdown();

      // if the consumer has provided an onChange handler
      if (onChange) {
        // send a default empty object
        onChange({
          userProvidedText: '',
          selectionValue: '',
          selectionId: ''
        });
      }
      return;
    }

    // the user has entered text, we have a value
    setHasValue(true);

    // filter dropdown based on entered text
    var filteredItems = getItems(userProvidedText);
    setDropdownItems(filteredItems);

    // check for matches in the dropdown
    var matchingDropdownItem = filteredItems.find(function (o) {
      return o.props.children.toLowerCase() === userProvidedText.toLowerCase();
    });

    // if we didn't find a match
    if (!matchingDropdownItem) {
      // no match means no selection
      setHasSelection(false);

      // set the text in the state
      setDisplayValue(userProvidedText);

      // if the consumer has provided an onChange handler
      if (onChange) {
        // send an object with the user provided text only
        onChange({
          userProvidedText: userProvidedText,
          selectionValue: '',
          selectionId: ''
        });
      }
      return;
    }

    // we found a match, we have a selection!
    setHasSelection(true);

    // set the display value based on the item in the dropdown
    // this matters because we match case insensitively
    setDisplayValue(matchingDropdownItem.props.children);

    // if the consumer has provided an onChange handler
    if (onChange) {
      // send an object with the selected item values
      onChange({
        userProvidedText: matchingDropdownItem.props.children,
        selectionValue: matchingDropdownItem.props.children,
        selectionId: matchingDropdownItem.props.id
      });
    }
  };
  var _useFormGroupContext = useFormGroupContext(),
    getControlProps = _useFormGroupContext.getControlProps;
  var controlProps = getControlProps(props);
  return /*#__PURE__*/React.createElement("div", {
    className: "pgn__form-autosuggest__wrapper",
    ref: parentRef,
    onFocus: enterControl
  }, /*#__PURE__*/React.createElement("div", {
    "aria-live": "assertive",
    className: "sr-only",
    "data-testid": "autosuggest-screen-reader-options-count"
  }, "".concat(dropdownItems.length, " options found")), /*#__PURE__*/React.createElement(FormGroupContextProvider, {
    controlId: controlProps.id,
    isInvalid: !isValid
  }, /*#__PURE__*/React.createElement(FormControl, _extends({
    ref: formControlRef,
    "aria-expanded": (dropdownItems.length > 0).toString(),
    "aria-owns": "pgn__form-autosuggest__dropdown-box",
    role: "combobox",
    "aria-autocomplete": "list",
    autoComplete: "off",
    value: displayValue,
    "aria-invalid": errorMessage,
    "aria-activedescendant": activeMenuItemId,
    onChange: handleTextInput,
    onClick: handleTextboxClick,
    trailingElement: iconToggle,
    "data-testid": "autosuggest-textbox-input"
  }, controlProps)), helpMessage && isValid && /*#__PURE__*/React.createElement(FormControlFeedback, {
    type: "default"
  }, helpMessage), !isValid && /*#__PURE__*/React.createElement(FormControlFeedback, {
    type: "invalid",
    "feedback-for": controlProps.name
  }, errorMessage)), /*#__PURE__*/React.createElement("ul", {
    id: "pgn__form-autosuggest__dropdown-box",
    className: "pgn__form-autosuggest__dropdown",
    role: "listbox"
  }, isLoading ? /*#__PURE__*/React.createElement("div", {
    className: "pgn__form-autosuggest__dropdown-loading"
  }, /*#__PURE__*/React.createElement(Spinner, {
    animation: "border",
    variant: "dark",
    screenReaderText: screenReaderText,
    "data-testid": "autosuggest-loading-spinner"
  })) : dropdownItems.length > 0 && dropdownItems));
});
FormAutosuggest.defaultProps = {
  arrowKeyNavigationSelector: 'a:not(:disabled),li:not(:disabled, .btn-icon),input:not(:disabled)',
  ignoredArrowKeysNames: ['ArrowRight', 'ArrowLeft'],
  isLoading: false,
  className: null,
  floatingLabel: null,
  onChange: null,
  helpMessage: '',
  placeholder: '',
  value: null,
  isValueRequired: false,
  valueRequiredErrorMessageText: null,
  isSelectionRequired: false,
  selectionRequiredErrorMessageText: null,
  hasCustomError: false,
  customErrorMessageText: null,
  readOnly: false,
  children: null,
  name: 'form-autosuggest',
  screenReaderText: 'loading'
};
FormAutosuggest.propTypes = {
  /**
   * Specifies the CSS selector string that indicates to which elements
   * the user can navigate using the arrow keys
  */
  arrowKeyNavigationSelector: PropTypes.string,
  /** Specifies ignored hook keys. */
  ignoredArrowKeysNames: PropTypes.arrayOf(PropTypes.string),
  /** Specifies loading state. */
  isLoading: PropTypes.bool,
  /** Specifies class name to append to the base element. */
  className: PropTypes.string,
  /** Specifies floating label to display for the input component. */
  floatingLabel: PropTypes.string,
  /** Specifies onChange event handler. */
  onChange: PropTypes.func,
  /** Specifies help information for the user. */
  helpMessage: PropTypes.string,
  /** Specifies the placeholder text for the input. */
  placeholder: PropTypes.string,
  /** Specifies values for the input. */
  value: PropTypes.shape({
    userProvidedText: PropTypes.string,
    selectionValue: PropTypes.string,
    selectionId: PropTypes.string
  }),
  /** Specifies if empty values trigger an error state */
  isValueRequired: PropTypes.bool,
  /** Informs user they must input a value. */
  valueRequiredErrorMessageText: requiredWhen(PropTypes.string, 'isValueRequired'),
  /** Specifies if freeform values trigger an error state */
  isSelectionRequired: PropTypes.bool,
  /** Informs user they must make a selection. */
  selectionRequiredErrorMessageText: requiredWhen(PropTypes.string, 'isSelectionRequired'),
  /** Specifies the control is in a consumer provided error state */
  hasCustomError: PropTypes.bool,
  /** Informs user of other errors. */
  customErrorMessageText: requiredWhen(PropTypes.string, 'hasCustomError'),
  /** Specifies the name of the base input element. */
  name: PropTypes.string,
  /** Selected list item is read-only. */
  readOnly: PropTypes.bool,
  /** Specifies the content of the `FormAutosuggest`. */
  children: PropTypes.node,
  /** Specifies the screen reader text */
  screenReaderText: PropTypes.string
};
export default FormAutosuggest;
//# sourceMappingURL=FormAutosuggest.js.map