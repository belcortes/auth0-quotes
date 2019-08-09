import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { fetchSingleQuote } from '../api-helpers';

class QuotePage extends Component {
  state = {
    quote: {}
  }

  componentDidMount() {
    const { quoteId } = this.props.match.params;
    const quote = fetchSingleQuote(quoteId)
    console.log(quote)
    fetchSingleQuote(quoteId).then(quote => this.setState({ quote }));
  }

  render() {
    const { quote } = this.state;
    return (
      <div>
        {quote.id}
        {quote.text}
        {quote.author}
      </div>
    );
  }
}

QuotePage.propTypes = {
  match: PropTypes.shape().isRequired
};

export default QuotePage;
