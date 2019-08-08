import React from 'react';
import { withRouter } from 'react-router-dom';

const QuotesListItem = ({ quote, history }) => (
  <div onClick={() => history.push(`/quotes/${quote.id}`)}>
    {quote.id}
    {quote.text}
    {quote.author}
  </div>
);

export default withRouter(QuotesListItem);
