import React from 'react';
import PropTypes from 'prop-types';

import QuotesListItem from './QuotesListItem';

const QuotesList = ({ quotes }) => (
  <div>
    Quotes List
    {
      quotes.map(quote => <QuotesListItem key={quote.id} quote={quote} />)
    }
  </div>
);

QuotesList.propTypes = {
  quotes: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default QuotesList;