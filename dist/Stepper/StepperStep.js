import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { StepperContext } from './StepperContext';
export default function StepperStep(_ref) {
  var children = _ref.children,
    eventKey = _ref.eventKey,
    className = _ref.className,
    title = _ref.title,
    index = _ref.index,
    description = _ref.description,
    hasError = _ref.hasError,
    onClick = _ref.onClick;
  var _useContext = useContext(StepperContext),
    activeKey = _useContext.activeKey,
    registerStep = _useContext.registerStep,
    removeStep = _useContext.removeStep;
  useEffect(function () {
    registerStep({
      title: title,
      index: index,
      eventKey: eventKey,
      description: description,
      hasError: hasError,
      onClick: onClick
    });
    return function () {
      return removeStep(eventKey);
    };
  }, [title, eventKey, description, hasError, index, registerStep, removeStep, onClick]);
  var isActive = activeKey === eventKey;
  if (!isActive) {
    return null;
  }
  return /*#__PURE__*/React.createElement("div", {
    className: classNames('pgn__stepper-step', className)
  }, children);
}
StepperStep.propTypes = {
  /** Specifies the content of the `Step`. */
  children: PropTypes.node.isRequired,
  /** Specifies class name to append to the base element */
  className: PropTypes.string,
  /**
   * An identifier of the `Step`. When `activeKey` on the
   * `Stepper` equals to the `eventKey`, the `Step` will be displayed.
   */
  eventKey: PropTypes.string.isRequired,
  /** A text of the `Step`. */
  title: PropTypes.string.isRequired,
  /** A text under the `title`. */
  description: PropTypes.string,
  /** Informs user if this `Step` has errors. */
  hasError: PropTypes.bool,
  /**
   * Position of the `Step`, only required if adding error state
   * or conditionally rendering steps.
   * */
  index: PropTypes.number,
  /**
   * Click handler for the `Step`. Takes effect only after the `Step` has been visited, making it clickable
   * and invoking this function on click. Should be used to provide navigation between steps.
   */
  onClick: PropTypes.func
};
StepperStep.defaultProps = {
  className: undefined,
  description: undefined,
  hasError: false,
  index: undefined,
  onClick: undefined
};
//# sourceMappingURL=StepperStep.js.map