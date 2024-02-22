function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
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
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { FocusOn } from 'react-focus-on';
import SheetContainer from './SheetContainer';
export var POSITIONS = {
  left: 'left',
  right: 'right',
  top: 'top',
  bottom: 'bottom'
};
export var VARIANTS = {
  light: 'light',
  dark: 'dark'
};
var Sheet = /*#__PURE__*/function (_React$Component) {
  _inherits(Sheet, _React$Component);
  var _super = _createSuper(Sheet);
  function Sheet(props) {
    var _this;
    _classCallCheck(this, Sheet);
    _this = _super.call(this, props);
    _this.wrapperRef = /*#__PURE__*/React.createRef();
    _this.renderSheet = _this.renderSheet.bind(_assertThisInitialized(_this));
    return _this;
  }
  _createClass(Sheet, [{
    key: "renderSheet",
    value: function renderSheet() {
      var _this$props = this.props,
        children = _this$props.children,
        position = _this$props.position,
        variant = _this$props.variant;
      return /*#__PURE__*/React.createElement("div", {
        className: classNames('pgn__sheet-component', "pgn__sheet__".concat(variant), position),
        role: "alert",
        "aria-live": "polite",
        "aria-atomic": "true"
      }, /*#__PURE__*/React.createElement("div", {
        className: "pgn__sheet-content"
      }, children));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
        blocking = _this$props2.blocking,
        show = _this$props2.show,
        onClose = _this$props2.onClose;
      if (!show) {
        return null;
      }
      return /*#__PURE__*/React.createElement(SheetContainer, null, /*#__PURE__*/React.createElement("div", {
        className: classNames('pgn__sheet-skrim', {
          hidden: !blocking
        }),
        role: "presentation"
      }), /*#__PURE__*/React.createElement(FocusOn, {
        onClickOutside: blocking ? function () {} : onClose,
        onEscapeKey: blocking ? function () {} : onClose,
        shards: [this.wrapperRef]
      }, this.renderSheet()));
    }
  }]);
  return Sheet;
}(React.Component);
Sheet.propTypes = {
  /** specifies whether the sheet provides a click-blocking scrim */
  blocking: PropTypes.bool,
  /** an element rendered inside the sheet */
  children: PropTypes.node,
  /** a string designating the sheet's position on the window */
  position: PropTypes.oneOf([POSITIONS.left, POSITIONS.right, POSITIONS.top, POSITIONS.bottom]),
  /** Boolean used to control whether the Sheet shows. */
  show: PropTypes.bool,
  /** Specifies function that controls `show` value. */
  onClose: PropTypes.func,
  /** a string designating which version of the sheet to show (light vs dark) */
  variant: PropTypes.oneOf([VARIANTS.light, VARIANTS.dark])
};
Sheet.defaultProps = {
  blocking: false,
  children: undefined,
  position: POSITIONS.bottom,
  show: true,
  onClose: function onClose() {},
  variant: VARIANTS.light
};
export default Sheet;
//# sourceMappingURL=index.js.map