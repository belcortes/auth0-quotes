import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  fetchQuotes,
  fetchSearchedQuotes,
  fetchSortedQuotes,
  fetchPages
} from '../api-helpers';

import QuotesList from '../components/QuotesList';
import Sorting from '../components/Sorting';

class Quotes extends Component {
  state = {
    quotes: [],
    currentPage: 1,
    totalPage: null,
    filter: null
  }

  componentDidMount() {
    fetchQuotes().then(data => this.setState({
      quotes: data.results,
      currentPage: data.pagination.page,
      totalPage: data.pagination.pageCount
    }));
  }

  componentDidUpdate(prevProps) {
    const { search, searchBy } = this.props.location;
    const prevSearch = prevProps.location.search;

    if (search && search !== prevSearch) {
      fetchSearchedQuotes(search.split('=')[1], searchBy.split('=')[1]).then(data => this.setState({
        quotes: data.results,
        currentPage: data.pagination.page,
        totalPage: data.pagination.pageCount
       }));
    }
  }
  onFilterSelect = value => {
    fetchSortedQuotes(value).then(data => this.setState({
      quotes: data.results,
      currentPage: data.pagination.page,
      totalPage: data.pagination.pageCount
    }));
    this.setState({filer: value});
  }

  // loadMore = () => {
  //   fetchPages(this.state.currentPage+1, this.props.location.search.split('=')[1], this.state.filter).then(data => this.setState({ quotes: [...this.state.quotes, ...data] }))
  // };

  render() {
    const { quotes, currentPage, totalPage } = this.state;
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

// <button
//   onClick={() => {
//     this.loadMore();
//   }}
// >
//   Load More
// </button>

export default Quotes;
