import React, { createContext } from 'react';
import PropTypes from 'prop-types';
var CardContext = /*#__PURE__*/createContext({});
function CardContextProvider(_ref) {
  var orientation = _ref.orientation,
    children = _ref.children,
    isLoading = _ref.isLoading,
    variant = _ref.variant;
  return /*#__PURE__*/React.createElement(CardContext.Provider, {
    value: {
      orientation: orientation,
      isLoading: isLoading,
      variant: variant
    }
  }, children);
}
CardContextProvider.propTypes = {
  /** Specifies which orientation to use. */
  orientation: PropTypes.oneOf(['horizontal', 'vertical']),
  /** Specifies loading state. */
  isLoading: PropTypes.bool,
  /** Specifies content of the component. */
  children: PropTypes.node,
  /** Specifies `Card` style variant */
  variant: PropTypes.oneOf(['light', 'dark', 'muted'])
};
CardContextProvider.defaultProps = {
  orientation: 'vertical',
  isLoading: false,
  children: null,
  variant: 'light'
};
export { CardContextProvider };
export default CardContext;
//# sourceMappingURL=CardContext.js.map