import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
export var TABLE_FILTERS_BUTTON_TEXT = 'Filter';
function TableFilters(_ref) {
  var columns = _ref.columns,
    manualFilters = _ref.manualFilters,
    onFilter = _ref.onFilter,
    currentFilters = _ref.currentFilters;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", null, "Filters"), columns.map(function (column) {
    return /*#__PURE__*/React.createElement("div", {
      key: column.Header
    }, column.canFilter ? column.render('Filter') : null);
  }), manualFilters && /*#__PURE__*/React.createElement(Button, {
    type: "primary",
    onClick: function onClick() {
      return onFilter(currentFilters);
    }
  }, TABLE_FILTERS_BUTTON_TEXT));
}
TableFilters.defaultProps = {
  manualFilters: false,
  onFilter: function onFilter() {}
};
TableFilters.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.shape({
    Header: PropTypes.oneOfType([PropTypes.elementType, PropTypes.node]).isRequired,
    canFilter: PropTypes.bool,
    render: PropTypes.func.isRequired
  })).isRequired,
  manualFilters: PropTypes.bool,
  onFilter: PropTypes.func,
  currentFilters: PropTypes.arrayOf(PropTypes.shape()).isRequired
};
export default TableFilters;
//# sourceMappingURL=TableFilters.js.map