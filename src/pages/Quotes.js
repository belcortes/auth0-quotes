import React, { Component } from 'react';
import PropTypes from 'prop-types';
import qs from 'query-string';

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

    // Parsing search query from URL
    const newSearch = qs.parse(this.props.location.search).search;
    if (newSearch) {
      fetchQuotes(searchBy, newSearch, filter, page)
        .then(quotes => this.setState({ quotes, search: newSearch }));
    } else {
      fetchQuotes(searchBy, search, filter, page).then(quotes => this.setState({ quotes }));
    }

    // Load more data when window scrolls to bottom
    window.addEventListener('scroll', () => {
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        this.loadMore();
      }
    });
  }

  componentDidUpdate(prevProps) {
    const { filter, searchBy } = this.state;

    // Parsing search query from URL
    const search = qs.parse(this.props.location.search).search;

    // Parsing searchBy query from URL, if null use the state searchBy
    const newSearchBy = qs.parse(this.props.location.searchBy).searchBy || searchBy;

    const prevSearch = qs.parse(prevProps.location.search, { ignoreQueryPrefix: true }).search;

    if (search && search !== prevSearch) {
      fetchQuotes(newSearchBy, search, filter, 1)
        .then(quotes => this.setState({ quotes, search, searchBy: newSearchBy }));
    }
  }

  onFilterSelect = filter => {
    const { search, searchBy } = this.state;

    this.setState({ filter });
    fetchQuotes(searchBy, search, filter, 1).then(quotes => this.setState({ quotes }));
  }

  loadMore = () => {
    const {
      search,
      searchBy,
      filter,
      page
    } = this.state;

    fetchQuotes(searchBy, search, filter, page + 1)
      .then(quotes => this.setState(prevState => ({
        page: page + 1,
        quotes: [...prevState.quotes, ...quotes]
      })));
  }

  render() {
    const { quotes } = this.state;
    return (
      <div className="container quotes">
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
