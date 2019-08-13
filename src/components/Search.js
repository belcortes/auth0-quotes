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
      search: `search=${search}`,
      searchBy: `searchBy=${searchBy}`
    });
  }

  render() {
    const { onSearchClose, onSearchChange, searchBy } = this.props;
    return (
      <div className="search-bar is-flex">
        <div>
          <input
            type="radio"
            value="text"
            checked={searchBy === 'text'}
            onChange={e => onSearchChange(e)}
          />
          Text
        </div>
        <div>
          <input
            type="radio"
            value="authorName"
            checked={searchBy === 'authorName'}
            onChange={e => onSearchChange(e)}
          />
          Author
        </div>
        <form onSubmit={this.onSubmit}>
          <img
            alt="search"
            src="/assets/magnifying_glass.svg"
            className="navbar-glass"
          />
          <input type="search" placeholder="Search" onChange={this.handleInputChange} />
          <div onClick={onSearchClose} onKeyUp={onSearchClose}>x</div>
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
