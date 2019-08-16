import React from 'react';
import PropTypes from 'prop-types';

import QuotesListItem from './QuotesListItem';

const QuotesList = ({ quotes }) => (
  <div className="quotes_list">
    {quotes.map((quote, i) => <QuotesListItem key={quote.id + i} quote={quote} />)}
  </div>
);

QuotesList.propTypes = {
  quotes: PropTypes.arrayOf(PropTypes.shape()).isRequired
};

export default QuotesList;
