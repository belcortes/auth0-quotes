import React from 'react';

import QuotesListItem from './QuotesListItem';

const QuotesList = ({ quotes }) => (
  <div>
    Quotes List
    {
      quotes.map(quote => <QuotesListItem key={quote.id} quote={quote} />)
    }
  </div>
);

export default QuotesList;
