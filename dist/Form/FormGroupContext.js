function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
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
import React, { useState, useEffect, useMemo, useCallback } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { newId } from '../utils';
import { useIdList, omitUndefinedProperties } from './fieldUtils';
import { FORM_CONTROL_SIZES } from './constants';
var identityFn = function identityFn(props) {
  return props;
};
var noop = function noop() {};
var FormGroupContext = /*#__PURE__*/React.createContext({
  getControlProps: identityFn,
  useSetIsControlGroupEffect: noop,
  getLabelProps: identityFn,
  getDescriptorProps: identityFn,
  hasFormGroupProvider: false
});
var useFormGroupContext = function useFormGroupContext() {
  return React.useContext(FormGroupContext);
};
var useStateEffect = function useStateEffect(initialState) {
  var _useState = useState(initialState),
    _useState2 = _slicedToArray(_useState, 2),
    state = _useState2[0],
    setState = _useState2[1];
  var useSetStateEffect = function useSetStateEffect(newState) {
    useEffect(function () {
      return setState(newState);
    }, [newState]);
  };
  return [state, useSetStateEffect];
};
function FormGroupContextProvider(_ref) {
  var children = _ref.children,
    explicitControlId = _ref.controlId,
    isInvalid = _ref.isInvalid,
    isValid = _ref.isValid,
    size = _ref.size;
  var controlId = useMemo(function () {
    return explicitControlId || newId('form-field');
  }, [explicitControlId]);
  var _useIdList = useIdList(controlId),
    _useIdList2 = _slicedToArray(_useIdList, 2),
    describedByIds = _useIdList2[0],
    registerDescriptorId = _useIdList2[1];
  var _useIdList3 = useIdList(controlId),
    _useIdList4 = _slicedToArray(_useIdList3, 2),
    labelledByIds = _useIdList4[0],
    registerLabelerId = _useIdList4[1];
  var _useStateEffect = useStateEffect(false),
    _useStateEffect2 = _slicedToArray(_useStateEffect, 2),
    isControlGroup = _useStateEffect2[0],
    useSetIsControlGroupEffect = _useStateEffect2[1];
  var getControlProps = useCallback(function (controlProps) {
    // labelledByIds from the list above should only be added to a control
    // if it the control is a group. We prefer adding a condition here because:
    //    - Hooks cannot be called inside conditionals
    //    - The getLabelProps function below is forced to generate an id
    //      whether it is needed or not.
    //    - This is what allows consumers of Paragon to use <Form.Label>
    //      interchangeably between ControlGroup type controls and regular Controls
    var labelledByIdsForControl = isControlGroup ? labelledByIds : undefined;
    return omitUndefinedProperties(_objectSpread(_objectSpread({}, controlProps), {}, {
      'aria-describedby': classNames(controlProps['aria-describedby'], describedByIds) || undefined,
      'aria-labelledby': classNames(controlProps['aria-labelledby'], labelledByIdsForControl) || undefined,
      id: controlId
    }));
  }, [isControlGroup, describedByIds, labelledByIds, controlId]);
  var getLabelProps = function getLabelProps(labelProps) {
    var id = registerLabelerId(labelProps === null || labelProps === void 0 ? void 0 : labelProps.id);
    if (isControlGroup) {
      return _objectSpread(_objectSpread({}, labelProps), {}, {
        id: id
      });
    }
    return _objectSpread(_objectSpread({}, labelProps), {}, {
      htmlFor: controlId
    });
  };
  var getDescriptorProps = function getDescriptorProps(descriptorProps) {
    var id = registerDescriptorId(descriptorProps === null || descriptorProps === void 0 ? void 0 : descriptorProps.id);
    return _objectSpread(_objectSpread({}, descriptorProps), {}, {
      id: id
    });
  };
  var contextValue = {
    getControlProps: getControlProps,
    getLabelProps: getLabelProps,
    getDescriptorProps: getDescriptorProps,
    useSetIsControlGroupEffect: useSetIsControlGroupEffect,
    isControlGroup: isControlGroup,
    controlId: controlId,
    isInvalid: isInvalid,
    isValid: isValid,
    size: size,
    hasFormGroupProvider: true
  };
  return /*#__PURE__*/React.createElement(FormGroupContext.Provider, {
    value: contextValue
  }, children);
}
FormGroupContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
  controlId: PropTypes.string,
  isInvalid: PropTypes.bool,
  isValid: PropTypes.bool,
  size: PropTypes.oneOf([FORM_CONTROL_SIZES.SMALL, FORM_CONTROL_SIZES.LARGE])
};
FormGroupContextProvider.defaultProps = {
  controlId: undefined,
  isInvalid: undefined,
  isValid: undefined,
  size: undefined
};
export { FormGroupContext, FormGroupContextProvider, useFormGroupContext };
//# sourceMappingURL=FormGroupContext.js.map