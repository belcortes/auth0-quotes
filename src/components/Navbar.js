import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';

import Search from './Search';
import Logout from './Logout';
import Login from './Login';

class Navbar extends Component {
  state = {
    displaySearchBar: false,
    searchBy: 'text'
  }

  onSearchOpen = () => this.setState({ displaySearchBar: true });

  onSearchClose = () => this.setState({ displaySearchBar: false });

  onSearchChange = e => this.setState({ searchBy: e.target.value });

  searchBarToggle = () => (
    <div className="navbar_search is-flex">
      <Login />
      <button onClick={() => this.onSearchOpen()} type="button" className="navbar_search-glass is-flex">
        <img
          alt="search"
          src="/assets/magnifying_glass.svg"
        />
      </button>
    </div>
  )

  render() {
    const { pathname } = this.props.location;
    const { displaySearchBar, searchBy } = this.state;

    return (
      <nav className="navbar">
        <div className="is-flex navbar_content column is-one-third">
        {
          displaySearchBar
            ? <Search
              searchBy={searchBy}
              onSearchChange={this.onSearchChange}
              onSearchClose={this.onSearchClose}
            />
            : <>
                <Link to="/" className="is-flex navbar_logo">
                  <img alt="auth0-logo" src="/assets/auth0_black.svg" />
                  Quotes
                </Link>
                {
                  pathname === '/profile'
                    ? <Logout />
                    : this.searchBarToggle()
                }
              </>
        }
        </div>
      </nav>
    );
  }
}

Navbar.propTypes = {
  location: PropTypes.shape().isRequired
};

export default withRouter(Navbar);
