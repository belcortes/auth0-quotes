import React from 'react';
import PropTypes from 'prop-types';

const QuotesListItem = ({ quote }) => (
  <div>
    <a href={`/quotes/${quote.id}`}>
      {quote.id}
      {quote.text}
      {quote.author}
    </a>
    <br />
  </div>
);

QuotesListItem.propTypes = {
  quote: PropTypes.shape().isRequired
};

export default QuotesListItem;
