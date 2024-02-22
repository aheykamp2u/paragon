var _excluded = ["children", "className", "screenReaderText", "icons", "onSubmit", "onClear", "onChange", "onBlur", "onFocus", "value", "formAriaLabel", "disabled", "submitButtonLocation"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React, { useRef, createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Search, Close } from '../../icons';
import newId from '../utils/newId';
export var SearchFieldContext = /*#__PURE__*/createContext();
var BUTTON_LOCATION_VARIANTS = ['internal', 'external'];
function SearchFieldAdvanced(props) {
  var children = props.children,
    className = props.className,
    screenReaderText = props.screenReaderText,
    icons = props.icons,
    onSubmit = props.onSubmit,
    onClear = props.onClear,
    onChange = props.onChange,
    onBlur = props.onBlur,
    onFocus = props.onFocus,
    initialValue = props.value,
    formAriaLabel = props.formAriaLabel,
    disabled = props.disabled,
    submitButtonLocation = props.submitButtonLocation,
    rest = _objectWithoutProperties(props, _excluded);
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    hasFocus = _useState2[0],
    setHasFocus = _useState2[1];
  var _useState3 = useState(initialValue),
    _useState4 = _slicedToArray(_useState3, 2),
    value = _useState4[0],
    setValue = _useState4[1];
  var isInitialMount = useRef(true);
  var inputId = useRef("".concat(newId('pgn-searchfield-input-')));
  var inputRef = useRef();
  var submitButtonRef = useRef();
  useEffect(function () {
    setValue(initialValue);
  }, [initialValue]);
  useEffect(function () {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      onChange(value);
    }
  }, [value, onChange]);
  var handleSubmit = function handleSubmit(event) {
    event.preventDefault();
    onSubmit(value);
    if (submitButtonRef && submitButtonRef.current) {
      submitButtonRef.current.focus();
    }
  };
  var handleClear = function handleClear() {
    setValue('');
    onClear();
    if (inputRef && inputRef.current) {
      inputRef.current.focus();
    }
  };
  var handleFocus = function handleFocus(event) {
    setHasFocus(true);
    onFocus(event);
  };
  var handleBlur = function handleBlur(event) {
    setHasFocus(false);
    onBlur(event);
  };
  var handleChange = function handleChange(event) {
    setValue(event.target.value);
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    className: classNames('pgn__searchfield', 'd-flex', {
      'has-focus': hasFocus,
      disabled: disabled,
      'pgn__searchfield--external': submitButtonLocation === 'external'
    }, className)
  }, rest), /*#__PURE__*/React.createElement("form", {
    role: "search",
    onSubmit: handleSubmit,
    onReset: handleClear,
    className: "pgn__searchfield-form",
    "aria-label": formAriaLabel
  }, /*#__PURE__*/React.createElement(SearchFieldContext.Provider, {
    value: {
      inputId: inputId,
      screenReaderText: screenReaderText,
      icons: icons,
      value: value,
      disabled: disabled,
      handleFocus: handleFocus,
      handleBlur: handleBlur,
      handleChange: handleChange,
      refs: {
        input: inputRef,
        submitButton: submitButtonRef
      }
    }
  }, children)));
}
SearchFieldAdvanced.propTypes = {
  /** specifies the nested child elements. At a minimum, `SearchField.Label` and `SearchField.Input` are required. */
  children: PropTypes.node.isRequired,
  /** specifies a callback function for when the `SearchField` is submitted by the user. For example:
  ```jsx
  <SearchField onSubmit={(value) => { console.log(value); } />
  ``` */
  onSubmit: PropTypes.func.isRequired,
  /** specifies a custom class name. */
  className: PropTypes.string,
  /** specifies a callback function for when the user loses focus in the `SearchField` component.
   * The default is an empty function. For example:
  ```jsx
  <SearchField onBlur={event => console.log(event)} />
  ``` */
  onBlur: PropTypes.func,
  /** specifies a callback function for when the value in `SearchField` is changed by the user.
   * The default is an empty function. For example:
  ```jsx
  <SearchField onChange={value => console.log(value)} />
  ``` */
  onChange: PropTypes.func,
  /** specifies a callback function for when the value in `SearchField` is cleared by the user.
   * The default is an empty function. For example:
  ```jsx
  <SearchField onClear={() => console.log('search cleared')} />
  ``` */
  onClear: PropTypes.func,
  /** specifies a callback function for when the user focuses in the `SearchField` component.
   * The default is an empty function. For example:
  ```jsx
  <SearchField onFocus={event => console.log(event)} />
  ``` */
  onFocus: PropTypes.func,
  /** specifies the screenreader text for both the clear and submit buttons (e.g., for i18n translations).
   * The default is `{ label: 'search', clearButton: 'clear search', searchButton: 'submit search' }`. */
  screenReaderText: PropTypes.shape({
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
    submitButton: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
    clearButton: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
  }),
  /** specifies the initial value for the input. The default is an empty string. */
  value: PropTypes.string,
  /** specifies the icon element(s) to use for the clear and submit buttons. */
  icons: PropTypes.shape({
    submit: PropTypes.element.isRequired,
    clear: PropTypes.element
  }),
  /** specifies the aria-label attribute on the form element. This is useful if you use the `SearchField` component
   * more than once on a page. */
  formAriaLabel: PropTypes.string,
  /** Specifies whether the `SearchField` is disabled. */
  disabled: PropTypes.bool,
  /** Controls whether the search button is internal as an icon or external as a button. */
  submitButtonLocation: PropTypes.oneOf(BUTTON_LOCATION_VARIANTS)
};
SearchFieldAdvanced.defaultProps = {
  className: undefined,
  formAriaLabel: undefined,
  value: '',
  screenReaderText: {
    label: 'search',
    submitButton: 'submit search',
    clearButton: 'clear search'
  },
  icons: {
    clear: Close,
    submit: Search
  },
  onBlur: function onBlur() {},
  onChange: function onChange() {},
  onFocus: function onFocus() {},
  onClear: function onClear() {},
  disabled: false,
  submitButtonLocation: 'internal'
};
export default SearchFieldAdvanced;
//# sourceMappingURL=SearchFieldAdvanced.js.map