function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Checkpoint from './Checkpoint';
var ProductTour = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var tours = _ref.tours;
  var tourValue = tours.find(function (tour) {
    return tour.enabled;
  });
  var _ref2 = tourValue || {},
    enabled = _ref2.enabled,
    _ref2$checkpoints = _ref2.checkpoints,
    checkpoints = _ref2$checkpoints === void 0 ? [] : _ref2$checkpoints,
    startingIndex = _ref2.startingIndex,
    onEscape = _ref2.onEscape,
    onEnd = _ref2.onEnd,
    tourOnDismiss = _ref2.onDismiss,
    tourAdvanceButtonText = _ref2.advanceButtonText,
    tourDismissButtonText = _ref2.dismissButtonText,
    tourEndButtonText = _ref2.endButtonText;
  var _useState = useState(null),
    _useState2 = _slicedToArray(_useState, 2),
    currentCheckpointData = _useState2[0],
    setCurrentCheckpointData = _useState2[1];
  var _useState3 = useState(0),
    _useState4 = _slicedToArray(_useState3, 2),
    index = _useState4[0],
    setIndex = _useState4[1];
  var _useState5 = useState(false),
    _useState6 = _slicedToArray(_useState5, 2),
    isTourEnabled = _useState6[0],
    setIsTourEnabled = _useState6[1];
  var _useState7 = useState([]),
    _useState8 = _slicedToArray(_useState7, 2),
    prunedCheckpoints = _useState8[0],
    setPrunedCheckpoints = _useState8[1];
  var _ref3 = currentCheckpointData || {},
    title = _ref3.title,
    body = _ref3.body,
    onAdvance = _ref3.onAdvance,
    onDismiss = _ref3.onDismiss,
    advanceButtonText = _ref3.advanceButtonText,
    dismissButtonText = _ref3.dismissButtonText,
    endButtonText = _ref3.endButtonText,
    placement = _ref3.placement,
    target = _ref3.target,
    showDismissButton = _ref3.showDismissButton;

  /**
   * Takes a list of checkpoints and verifies that each target string provided is
   * an element in the DOM.
   */
  var pruneCheckpoints = function pruneCheckpoints(checkpointList) {
    var checkpointsWithRenderedTargets = checkpointList.filter(function (checkpoint) {
      return !!document.querySelector(checkpoint.target);
    });
    setPrunedCheckpoints(checkpointsWithRenderedTargets);
  };
  useEffect(function () {
    if (enabled && checkpoints) {
      setIsTourEnabled(enabled);
      pruneCheckpoints(checkpoints);
      setIndex(startingIndex || 0);
    }
  }, [enabled, checkpoints, startingIndex]);
  useEffect(function () {
    if (isTourEnabled && prunedCheckpoints.length) {
      setCurrentCheckpointData(prunedCheckpoints[index]);
    }
  }, [index, isTourEnabled, prunedCheckpoints]);
  useEffect(function () {
    var handleEsc = function handleEsc(event) {
      if (event.keyCode === 27) {
        setIsTourEnabled(false);
        if (onEscape) {
          onEscape();
        }
      }
    };
    global.addEventListener('keydown', handleEsc);
    return function () {
      global.removeEventListener('keydown', handleEsc);
    };
  }, [onEscape]);
  if (!tourValue || !currentCheckpointData || !isTourEnabled) {
    return null;
  }
  var handleAdvance = function handleAdvance() {
    setIndex(index + 1);
    if (onAdvance) {
      onAdvance();
    }
  };
  var handleDismiss = function handleDismiss() {
    setIndex(0);
    setIsTourEnabled(false);
    if (onDismiss) {
      onDismiss();
    } else {
      tourOnDismiss();
    }
    setCurrentCheckpointData(null);
  };
  /* eslint-disable */
  /**
   * Takes the final checkpoint array index value and looks for an existing onEnd callback.
   * 
   * If an onEnd callback exist on checkpointIndex value and it is the final checkpoint 
   * in the array, the onEnd callback will be called for the parent, and individual onEnd object. 
   * 
   * @param {Integer} checkpointIndex 
   */
  /* eslint-enable */
  var handleEnd = function handleEnd(checkpointIndex) {
    setIndex(0);
    setIsTourEnabled(false);
    if (prunedCheckpoints[checkpointIndex].onEnd) {
      prunedCheckpoints[checkpointIndex].onEnd();
    } else if (onEnd) {
      onEnd(prunedCheckpoints[checkpointIndex]);
    }
    setCurrentCheckpointData(null);
  };
  return /*#__PURE__*/React.createElement(Checkpoint, {
    advanceButtonText: advanceButtonText || tourAdvanceButtonText,
    body: body,
    currentCheckpointData: currentCheckpointData,
    dismissButtonText: dismissButtonText || tourDismissButtonText,
    endButtonText: endButtonText || tourEndButtonText,
    index: index,
    onAdvance: handleAdvance,
    onDismiss: handleDismiss,
    onEnd: handleEnd,
    placement: placement,
    target: target,
    title: title,
    totalCheckpoints: prunedCheckpoints.length,
    showDismissButton: showDismissButton,
    ref: ref
  });
});
ProductTour.defaultProps = {
  tours: {
    advanceButtonText: '',
    checkpoints: {
      advanceButtonText: '',
      body: '',
      dismissButtonText: '',
      endButtonText: '',
      onAdvance: function onAdvance() {},
      onDismiss: function onDismiss() {},
      placement: 'top',
      title: '',
      showDismissButton: undefined
    },
    dismissButtonText: '',
    endButtonText: '',
    onDismiss: function onDismiss() {},
    onEnd: function onEnd() {},
    onEscape: function onEscape() {},
    startingIndex: 0
  }
};
ProductTour.propTypes = {
  tours: PropTypes.arrayOf(PropTypes.shape({
    /** The text displayed on all buttons used to advance the tour. */
    advanceButtonText: PropTypes.node,
    /** An array comprised of checkpoint objects supporting the following values: */
    checkpoints: PropTypes.arrayOf(PropTypes.shape({
      /** The text displayed on the button used to advance the tour for the given Checkpoint
       * (overrides the* `advanceButtonText` defined in the parent tour object). */
      advanceButtonText: PropTypes.node,
      /** The text displayed in the body of the Checkpoint */
      body: PropTypes.node,
      /** The text displayed on the button used to dismiss the tour for the given Checkpoint
       * (overrides the `dismissButtonText` defined in the parent tour object). */
      dismissButtonText: PropTypes.node,
      /** The text displayed on the button used to end the tour for the given Checkpoint
       * (overrides the `endButtonText` defined in the parent tour object). */
      endButtonText: PropTypes.node,
      /** A function that runs when triggering the `onClick` event of the advance
       * button for the given Checkpoint. */
      onAdvance: PropTypes.func,
      /** A function that runs when triggering the `onClick` event of the dismiss
       * button for the given Checkpoint (overrides the `onDismiss` function defined in the parent tour object). */
      onDismiss: PropTypes.func,
      /** A function that runs when triggering the `onClick` event of the advance
      * button if the given Checkpoint is the only or last Checkpoint in a tour. */
      onEnd: PropTypes.func,
      /** A string that dictates the alignment of the Checkpoint around its target. */
      placement: PropTypes.oneOf(['top', 'top-start', 'top-end', 'right-start', 'right', 'right-end', 'left-start', 'left', 'left-end', 'bottom', 'bottom-start', 'bottom-end']),
      /** The CSS selector for the Checkpoint's desired target. */
      target: PropTypes.string.isRequired,
      /** The text displayed in the title of the Checkpoint */
      title: PropTypes.node,
      /** Enforces visibility of the dismiss button under all circumstances */
      showDismissButton: PropTypes.bool
    })),
    /** The text displayed on the button used to dismiss the tour. */
    dismissButtonText: PropTypes.node,
    /** Whether the tour is enabled. If there are multiple tours defined, only one should be enabled at a time. */
    enabled: PropTypes.bool.isRequired,
    /** The text displayed on the button used to end the tour. */
    endButtonText: PropTypes.node,
    /** A function that runs when triggering the `onClick` event of the dismiss button. */
    onDismiss: PropTypes.func,
    /** A function that runs when triggering the `onClick` event of the end button. */
    onEnd: PropTypes.func,
    /** A function that runs when pressing the Escape key. */
    onEscape: PropTypes.func,
    /** The index of the desired `Checkpoint` to render when the tour starts. */
    startingIndex: PropTypes.number,
    /** The ID of the tour */
    tourId: PropTypes.string.isRequired
  }))
};
export default ProductTour;
//# sourceMappingURL=index.js.map