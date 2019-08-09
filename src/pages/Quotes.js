import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  fetchQuotes,
  fetchSearchedQuotes,
  fetchSortedQuotes
} from '../api-helpers';

import QuotesList from '../components/QuotesList';
import Sorting from '../components/Sorting';

class Quotes extends Component {
  state = {
    quotes: []
  }

  componentDidMount() {
    fetchQuotes().then(quotes => this.setState({ quotes }));
  }

  componentDidUpdate(prevProps) {
    const { search } = this.props.location;
    const prevSearch = prevProps.location.search;

    if (search && search !== prevSearch) {
      fetchSearchedQuotes(search.split('=')[1]).then(quotes => this.setState({ quotes }));
    }
  }

  onFilterSelect = value => {
    fetchSortedQuotes(value).then(quotes => this.setState({ quotes }));
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
  location: PropTypes.shape().isRequired
};

export default Quotes;
