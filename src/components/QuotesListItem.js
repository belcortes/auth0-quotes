import React from 'react';
import PropTypes from 'prop-types';

const QuotesListItem = ({ quote }) => (
  <a href={`/quotes/${quote.id}`} className='quotes-list-item'>
    <span className="quotes-list-item_id">QUOTE #{quote.id}</span>
    <span className="quotes-list-item_text">"{quote.text}"</span>
    <span className="quotes-list-item_author">{quote.authorName}</span>
  </a>
);

QuotesListItem.propTypes = {
  quote: PropTypes.shape().isRequired
};

export default QuotesListItem;
