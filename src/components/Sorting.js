import React from 'react';
import PropTypes from 'prop-types';

const Sorting = ({ onFilterSelect }) => (
  <select onChange={e => onFilterSelect(e.target.value)}>
    <option value="authorName">Author A-Z</option>
    <option value="-authorName">Author Z-A</option>
    <option value="text">Text A-Z</option>
    <option value="-text">Text Z-A</option>
  </select>
);

Sorting.propTypes = {
  onFilterSelect: PropTypes.func.isRequired,
};

export default Sorting;
