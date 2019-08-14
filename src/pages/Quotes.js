import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { fetchQuotes } from '../api-helpers';

import QuotesList from '../components/QuotesList';
import Sorting from '../components/Sorting';

class Quotes extends Component {
  state = {
    quotes: [],
    search: null,
    searchBy: 'text',
    filter: 'text',
    page: 1
  }

  componentDidMount() {
    const {
      search,
      searchBy,
      filter,
      page
    } = this.state;

    fetchQuotes(searchBy, search, filter, page).then(quotes => this.setState({ quotes }));
  }

  componentDidUpdate(prevProps) {
    const { search, searchBy } = this.props.location;
    const { filter } = this.state;
    const prevSearch = prevProps.location.search;

    if (search && search !== prevSearch) {
      const newSearch = search.split('=')[1];
      const newSearchBy = searchBy.split('=')[1];

      fetchQuotes(newSearchBy, newSearch, filter, 1)
        .then(quotes => this.setState({ quotes, search: newSearch, searchBy: newSearchBy }));
    }
  }

  onFilterSelect = filter => {
    const { search, searchBy } = this.state;

    this.setState({ filter });
    fetchQuotes(searchBy, search, filter, 1).then(quotes => this.setState({ quotes }));
  }

  loadMore = () => {
    const { search, searchBy, filter, page } = this.state;
    fetchQuotes(searchBy, search, filter, page + 1)
      .then(quotes => this.setState(prevState => ({
        page: page + 1,
        quotes: [...prevState.quotes, ...quotes]
      })));
  }

  render() {
    const { quotes } = this.state;
    return (
      <div className="container">
        <Sorting onFilterSelect={this.onFilterSelect} />
        <QuotesList quotes={quotes} />
        <button type="button" onClick={() => this.loadMore()}>load more</button>
        <img src="/assets/auth0_shield.svg" alt="auth0-shield" />
      </div>
    );
  }
}

Quotes.propTypes = {
  location: PropTypes.shape().isRequired
};

export default Quotes;
