import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import { fetchQuotes } from '../helpers';

import QuotesList from '../components/QuotesList';
import Sorting from '../components/Sorting';

class Quotes extends Component {
  state = {
    quotes: [],
  }

  componentDidMount() {
    fetchQuotes().then(quotes => this.setState({ quotes }));
  }

  componentDidUpdate(prevProps) {
    const { search } = this.props.location;
    if (search !== prevProps.location.search) {
      axios.get(`https://auth0-exercise-quotes-api.herokuapp.com/api/quotes?text=${search.split('=')[1]}`)
        .then(res => {
          this.setState({ quotes: res.data.results });
        });
    }
  }

  onFilterSelect = value => {
    axios.get(`https://auth0-exercise-quotes-api.herokuapp.com/api/quotes?sortBy=${value}`)
      .then(res => {
        this.setState({ quotes: res.data.results });
      });
  }


  render() {
    const { quotes } = this.state;
    return (
      <div>
        <Sorting onFilterSelect={this.onFilterSelect} />
        <QuotesList quotes={quotes} />
      </div>
    );
  }
}

Quotes.propTypes = {
  location: PropTypes.shape().isRequired,
};

export default Quotes;
