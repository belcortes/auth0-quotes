import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { fetchQuotes } from '../api-helpers';

import QuotesList from '../components/QuotesList';
import Sorting from '../components/Sorting';

class Quotes extends Component {
  state = {
    quotes: [],
    filter: 'text',
    search: 'a',
    searchBy: 'text'
  }

  componentDidMount() {
    const { search, searchBy, filter } = this.state;
    fetchQuotes(searchBy, search, filter).then(quotes => this.setState({ quotes }));
  }

  componentDidUpdate(prevProps) {
    const { search, searchBy } = this.props.location;
    const { filter } = this.state;
    const prevSearch = prevProps.location.search;

    if (search && search !== prevSearch) {
      const newSearch = search.split('=')[1];
      const newSearchBy = searchBy.split('=')[1];

      fetchQuotes(newSearchBy, newSearch, filter)
        .then(quotes => this.setState({ quotes, search: newSearch, searchBy: newSearchBy }));
    }
  }

  onFilterSelect = filter => {
    const { search, searchBy } = this.state;

    this.setState({ filter });
    fetchQuotes(searchBy, search, filter).then(quotes => this.setState({ quotes }));
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
