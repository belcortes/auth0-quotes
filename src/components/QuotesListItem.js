import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

const QuotesListItem = ({ quote, history }) => (
  <div onClick={() => history.push(`/quotes/${quote.id}`)}>
    {quote.id}
    {quote.text}
    {quote.author}
  </div>
);

QuotesListItem.propTypes = {
  quote: PropTypes.shape().isRequired,
  history: PropTypes.shape().isRequired,
};

export default withRouter(QuotesListItem);
