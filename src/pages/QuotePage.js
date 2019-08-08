import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

class QuotePage extends Component {
  state = {
    quote: {},
  }

  componentDidMount() {
    const { quoteId } = this.props.match.params;

    axios.get(`https://auth0-exercise-quotes-api.herokuapp.com/api/quotes/${quoteId}`)
      .then(res => {
        this.setState({ quote: res.data });
      });
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
  match: PropTypes.shape().isRequired,
};

export default QuotePage;
