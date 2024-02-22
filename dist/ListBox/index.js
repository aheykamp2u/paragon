function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var _excluded = ["children", "className", "selectedOptionIndex", "tag"];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
/* eslint-disable max-len */
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { nonNegativeInteger } from '../utils/propTypes';
var ListBox = /*#__PURE__*/function (_React$Component) {
  _inherits(ListBox, _React$Component);
  var _super = _createSuper(ListBox);
  function ListBox(props) {
    var _this;
    _classCallCheck(this, ListBox);
    _this = _super.call(this, props);
    _this.onFocus = _this.onFocus.bind(_assertThisInitialized(_this));
    _this.onKeyDown = _this.onKeyDown.bind(_assertThisInitialized(_this));
    _this.state = {
      selectedOptionIndex: null
    };
    return _this;
  }
  _createClass(ListBox, [{
    key: "onFocus",
    value: function onFocus() {
      // if no ListBoxOption is selected, select first ListBoxOption on ListBox focus
      if (!this.state.selectedOptionIndex) {
        this.setState({
          selectedOptionIndex: 0
        });
      }
    }
  }, {
    key: "onKeyDown",
    value: function onKeyDown(e) {
      switch (e.key) {
        case 'ArrowDown':
          {
            // prevent scrolling entire modal body with arrow keys
            e.preventDefault();
            if (this.state.selectedOptionIndex < React.Children.count(this.props.children) - 1) {
              this.setState(function (state) {
                return {
                  selectedOptionIndex: state.selectedOptionIndex + 1
                };
              });
            }
            break;
          }
        case 'ArrowUp':
          {
            // prevent scrolling entire modal body with arrow keys
            e.preventDefault();
            if (this.state.selectedOptionIndex > 0) {
              this.setState(function (state) {
                return {
                  selectedOptionIndex: state.selectedOptionIndex - 1
                };
              });
            }
            break;
          }
        default:
      }
    }
  }, {
    key: "renderChildren",
    value: function renderChildren() {
      var _this2 = this;
      return React.Children.map(this.props.children, function (child, index) {
        return /*#__PURE__*/React.cloneElement(child, {
          index: index,
          isSelected: index === _this2.state.selectedOptionIndex,
          onSelect: function onSelect() {
            _this2.setState({
              selectedOptionIndex: index
            });
            child.props.onSelect();
          }
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
        children = _this$props.children,
        className = _this$props.className,
        selectedOptionIndex = _this$props.selectedOptionIndex,
        tag = _this$props.tag,
        other = _objectWithoutProperties(_this$props, _excluded);
      return /*#__PURE__*/React.createElement(this.props.tag, _objectSpread({
        'aria-activedescendant': this.state.selectedOptionIndex === null ? null : "list-box-option-".concat(this.state.selectedOptionIndex),
        className: classNames(['list-group', this.props.className]),
        onFocus: this.onFocus,
        onKeyDown: this.onKeyDown,
        role: 'listbox',
        tabIndex: 0
      }, other), this.renderChildren());
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      var selectedOptionIndex = nextProps.selectedOptionIndex;
      if (selectedOptionIndex !== prevState.selectedOptionIndex && selectedOptionIndex !== undefined) {
        return {
          selectedOptionIndex: selectedOptionIndex
        };
      }
      return null;
    }
  }]);
  return ListBox;
}(React.Component);
export { ListBox as default };
ListBox.propTypes = {
  /** specifies the ListBoxOption component(s) that will be displayed within the ListBox element. You can pass in one or more ListBoxOption components.
  */
  children: PropTypes.node.isRequired,
  /** specifies Bootstrap class names to apply to the ListBox component. The default is an empty string. */
  className: PropTypes.string,
  /** Although the ListBox component keeps track of which ListBoxOption is selected, `selectedOptionIndex` provides a mechanism for an override, if necessary. An example would be to clear the selectedOption when moving between views. Note that override is not permanent and that clicking on a ListBoxOption or interacting with the ListBox with the keyboard will change the selected ListBoxOption relative to the original override. The default is undefined. */
  selectedOptionIndex: nonNegativeInteger,
  /** used to specify the element type of the rendered ListBox component. The default is div. Example alternatives include ol, ul, span, etc. */
  tag: PropTypes.string
};
ListBox.defaultProps = {
  className: undefined,
  selectedOptionIndex: undefined,
  tag: 'div'
};
//# sourceMappingURL=index.js.map