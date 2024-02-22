import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import Form from '../../Form';
import { newId } from '../../utils';
var formatHeaderForLabel = function formatHeaderForLabel(header) {
  if (typeof header === 'function') {
    return header();
  }
  if (typeof header === 'string') {
    return header.toLowerCase();
  }
  return header;
};
function TextFilter(_ref) {
  var _ref$column = _ref.column,
    filterValue = _ref$column.filterValue,
    setFilter = _ref$column.setFilter,
    Header = _ref$column.Header,
    getHeaderProps = _ref$column.getHeaderProps;
  var ariaLabel = useRef(newId("text-filter-label-".concat(getHeaderProps().key, "-")));
  var formattedHeader = formatHeaderForLabel(Header);
  var inputText = /*#__PURE__*/React.isValidElement(formattedHeader) ? formattedHeader : "Search ".concat(formattedHeader);
  return /*#__PURE__*/React.createElement(Form.Group, {
    controlId: ariaLabel.current
  }, /*#__PURE__*/React.createElement(Form.Label, {
    className: "sr-only"
  }, inputText), /*#__PURE__*/React.createElement(Form.Control, {
    value: filterValue || '',
    type: "text",
    onChange: function onChange(e) {
      setFilter(e.target.value || undefined); // Set undefined to remove the filter entirely
    },

    placeholder: inputText
  }));
}
TextFilter.propTypes = {
  /**
   * Specifies a column object.
   *
   * `setFilter`: Function to set the filter value.
   *
   * `Header`: Column header used for labels and placeholders.
   *
   * `getHeaderProps`: Generates a key unique to the column being filtered.
   *
   * `filterValue`: Value for the filter input.
   */
  column: PropTypes.shape({
    setFilter: PropTypes.func.isRequired,
    Header: PropTypes.oneOfType([PropTypes.elementType, PropTypes.node]).isRequired,
    getHeaderProps: PropTypes.func.isRequired,
    filterValue: PropTypes.string
  }).isRequired
};
export default TextFilter;
//# sourceMappingURL=TextFilter.js.map