import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { fetchSingleQuote } from '../api-helpers';

class QuotePage extends Component {
  state = {
    quote: {}
  }

  componentDidMount() {
    const { quoteId } = this.props.match.params;
    fetchSingleQuote(quoteId).then(quote => this.setState({ quote }));
  }

  render() {
    const { quote } = this.state;
    return (
      <div className='container quotes-list-item'>
        <span className='quotes-list-item_id'>QUOTE #{quote.id}</span>
        <span className='quotes-list-item_text'>"{quote.text}"</span>
        <span className='quotes-list-item_author'>{quote.authorName}</span>
      </div>
    );
  }
}

QuotePage.propTypes = {
  match: PropTypes.shape().isRequired
};

export default QuotePage;
