import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

class Search extends Component {
  state = {
    search: ''
  }

  handleInputChange = e => {
    this.setState({ search: e.target.value });
  }

  onSubmit = e => {
    e.preventDefault();
    const { history, searchBy } = this.props;
    const { search } = this.state;

    history.push({
      pathname: '/',
      search: search,
      searchBy: searchBy
    });
  }

  render() {
    const { onSearchClose, onSearchChange, searchBy } = this.props;
    return (
      <div className="search-bar is-flex">
        <div className="search-bar_option">
          <input
            type="radio"
            value="text"
            checked={searchBy === 'text'}
            onChange={e => onSearchChange(e)}
          />
          Text
        </div>
        <div className="search-bar_option">
          <input
            type="radio"
            value="authorName"
            checked={searchBy === 'authorName'}
            onChange={e => onSearchChange(e)}
          />
          Author
        </div>
        <form onSubmit={this.onSubmit} className="is-flex search-form">
          <img
            alt="search"
            src="/assets/magnifying_glass.svg"
            className="form-search"
          />
          <input type="search" placeholder="Search here..." onChange={this.handleInputChange} />
          <img
            src="/assets/close.svg"
            alt="close"
            onClick={onSearchClose}
            onKeyUp={onSearchClose}
            className="form-close"
          />
        </form>
      </div>
    );
  }
}

Search.propTypes = {
  history: PropTypes.shape().isRequired,
  searchBy: PropTypes.string.isRequired,
  onSearchClose: PropTypes.func.isRequired,
  onSearchChange: PropTypes.func.isRequired
};

export default withRouter(Search);
