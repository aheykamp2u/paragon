var _excluded = ["position", "children", "offset", "className"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React, { useLayoutEffect, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
var POSITION_VARIANTS = ['top', 'bottom'];
var Sticky = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var position = _ref.position,
    children = _ref.children,
    offset = _ref.offset,
    className = _ref.className,
    rest = _objectWithoutProperties(_ref, _excluded);
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    isSticky = _useState2[0],
    setIsSticky = _useState2[1];
  var defaultRef = React.useRef();
  var resolvedRef = ref || defaultRef;

  // eslint-disable-next-line consistent-return
  useLayoutEffect(function () {
    if (resolvedRef.current) {
      var stickyElement = resolvedRef.current;
      // getComputedStyle is used to get real top/bottom
      // values on the page for proper shadows display
      var elementStyles = window.getComputedStyle(stickyElement);
      var elementOffset = elementStyles[position || 'top'];
      // Margin calculations according to the offset.
      // 1 pixel above/bellow + offset pixels that determines
      // when callback function is called
      var elementWithOffset = 1 + (parseInt(elementOffset, 10) || 0);
      var observer = new IntersectionObserver(function (_ref2) {
        var _ref3 = _slicedToArray(_ref2, 1),
          entry = _ref3[0];
        return setIsSticky(entry.intersectionRatio < 1);
      }, {
        threshold: [1],
        rootMargin: position === 'bottom' ? "0px 0px -".concat(elementWithOffset, "px 0px") : "-".concat(elementWithOffset, "px 0px 0px 0px")
      });
      observer.observe(stickyElement);
      return function () {
        observer.unobserve(stickyElement);
      };
    }
  }, [position, resolvedRef]);
  return /*#__PURE__*/React.createElement("div", _extends({
    className: classNames('pgn__sticky', "pgn__sticky-".concat(position || 'top'), offset ? "pgn__sticky-offset--".concat(offset) : '', {
      'pgn__sticky-shadow': isSticky
    }, className),
    ref: resolvedRef
  }, rest), children);
});
Sticky.propTypes = {
  /** Specifies content of the component. */
  children: PropTypes.node.isRequired,
  /** Specifies position of the element. */
  position: PropTypes.oneOf(POSITION_VARIANTS),
  /**
   * Specifies offset from top/bottom depending on the `position` property.
   *
   * Valid values are based on `the spacing classes`:
   * `0, 0.5, ... 6`.
   */
  offset: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /** Specifies an additional `className` to add to the base element. */
  className: PropTypes.string
};
Sticky.defaultProps = {
  position: 'top',
  offset: undefined,
  className: undefined
};
export default Sticky;
//# sourceMappingURL=index.js.map