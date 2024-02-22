var _excluded = ["now", "label", "variant", "threshold", "thresholdLabel", "thresholdVariant", "progressHint", "thresholdHint"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React, { useCallback, useEffect } from 'react';
import ProgressBarBase from 'react-bootstrap/ProgressBar';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Annotation from '../Annotation';
import { getOffsetStyles, placeInfoAtZero } from './utils';
export var ANNOTATION_CLASS = 'pgn__annotation';
var HINT_SWAP_PERCENT = 50;
var PROGRESS_DEFAULT_VARIANT = 'warning';
var THRESHOLD_DEFAULT_VARIANT = 'dark';
var VARIANTS = ['dark', 'warning', 'success', 'error'];
function ProgressBar(props) {
  return /*#__PURE__*/React.createElement(ProgressBarBase, props);
}
function ProgressBarAnnotated(_ref) {
  var now = _ref.now,
    label = _ref.label,
    variant = _ref.variant,
    threshold = _ref.threshold,
    thresholdLabel = _ref.thresholdLabel,
    thresholdVariant = _ref.thresholdVariant,
    progressHint = _ref.progressHint,
    thresholdHint = _ref.thresholdHint,
    props = _objectWithoutProperties(_ref, _excluded);
  var progressInfoRef = React.useRef();
  var thresholdInfoRef = React.useRef();
  var thresholdPercent = (threshold || 0) - (now || 0);
  var isProgressHintAfter = now < HINT_SWAP_PERCENT;
  var isThresholdHintAfter = threshold < HINT_SWAP_PERCENT;
  var progressColor = VARIANTS.includes(variant) ? variant : PROGRESS_DEFAULT_VARIANT;
  var thresholdColor = VARIANTS.includes(thresholdVariant) ? thresholdVariant : THRESHOLD_DEFAULT_VARIANT;
  var direction = window.getComputedStyle(document.body).getPropertyValue('direction');
  var positionAnnotations = useCallback(function () {
    placeInfoAtZero(progressInfoRef, direction, isProgressHintAfter, ANNOTATION_CLASS);
    placeInfoAtZero(thresholdInfoRef, direction, isThresholdHintAfter, ANNOTATION_CLASS);
  }, [direction, isProgressHintAfter, isThresholdHintAfter]);
  useEffect(function () {
    positionAnnotations();
    var observer = new ResizeObserver(function () {
      positionAnnotations();
    });
    var progressInfoEl = progressInfoRef.current;
    observer.observe(progressInfoEl);
    return function () {
      return progressInfoEl && observer.unobserve(progressInfoEl);
    };
  }, [positionAnnotations]);
  var getHint = function getHint(text) {
    return /*#__PURE__*/React.createElement("span", {
      className: "pgn__progress-hint",
      "data-testid": "progress-hint"
    }, text);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "pgn__progress-annotated"
  }, !!label && /*#__PURE__*/React.createElement("div", {
    className: "pgn__progress-info",
    style: getOffsetStyles(now, direction),
    ref: progressInfoRef
  }, !isProgressHintAfter && getHint(progressHint), /*#__PURE__*/React.createElement(Annotation, {
    variant: progressColor
  }, label), isProgressHintAfter && getHint(progressHint)), /*#__PURE__*/React.createElement(ProgressBarBase, null, /*#__PURE__*/React.createElement(ProgressBarBase, _extends({}, props, {
    now: now,
    className: classNames("pgn__progress-bar--".concat(progressColor), thresholdPercent > 0 ? 'pgn__progress-tick--white' : 'pgn__progress-tick--black'),
    srOnly: true
  })), !!threshold && /*#__PURE__*/React.createElement(ProgressBarBase, {
    now: thresholdPercent,
    className: "pgn__progress-bar--".concat(thresholdColor),
    srOnly: true
  })), !!threshold && !!thresholdLabel && /*#__PURE__*/React.createElement("div", {
    className: "pgn__progress-info",
    style: getOffsetStyles(threshold, direction),
    ref: thresholdInfoRef
  }, !isThresholdHintAfter && getHint(thresholdHint), /*#__PURE__*/React.createElement(Annotation, {
    arrowPlacement: "top",
    variant: thresholdColor
  }, thresholdLabel), isThresholdHintAfter && getHint(thresholdHint)));
}
ProgressBarAnnotated.propTypes = {
  /** Current value of progress. */
  now: PropTypes.number,
  /** Show label that represents visual percentage. */
  label: PropTypes.node,
  /** The `ProgressBar` style variant to use. */
  variant: PropTypes.oneOf(VARIANTS),
  /** Specifies an additional `className` to add to the base element. */
  className: PropTypes.string,
  /** Threshold current value. */
  threshold: PropTypes.number,
  /** Specifies label for `threshold`. */
  thresholdLabel: PropTypes.node,
  /** Variant for threshold value. */
  thresholdVariant: PropTypes.oneOf(VARIANTS),
  /** Text near the progress annotation. */
  progressHint: PropTypes.node,
  /** Text near the threshold annotation. */
  thresholdHint: PropTypes.node
};
ProgressBarAnnotated.defaultProps = {
  now: undefined,
  label: undefined,
  variant: PROGRESS_DEFAULT_VARIANT,
  className: undefined,
  threshold: undefined,
  thresholdLabel: undefined,
  thresholdVariant: THRESHOLD_DEFAULT_VARIANT,
  progressHint: undefined,
  thresholdHint: undefined
};
ProgressBar.Annotated = ProgressBarAnnotated;
export default ProgressBar;
//# sourceMappingURL=index.js.map