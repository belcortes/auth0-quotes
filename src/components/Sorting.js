import React from 'react';
import PropTypes from 'prop-types';

const Sorting = ({ onSortSelect }) => (
  <select className="quotes_sort" onChange={e => onSortSelect(e.target.value)}>
    <option value="authorName">Author A-Z</option>
    <option value="-authorName">Author Z-A</option>
    <option value="text">Text A-Z</option>
    <option value="-text">Text Z-A</option>
  </select>
);

Sorting.propTypes = {
  onSortSelect: PropTypes.func.isRequired
};

export default Sorting;
