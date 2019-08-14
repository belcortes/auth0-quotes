import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

import Search from './Search';

class Navbar extends Component {
  state = {
    displaySearchBar: false,
    searchBy: 'text'
  }

  onSearchOpen = () => this.setState({ displaySearchBar: true });

  onSearchClose = () => this.setState({ displaySearchBar: false });

  onSearchChange = e => this.setState({ searchBy: e.target.value });

  searchBarToggle = () => {
    const { displaySearchBar, searchBy } = this.state;
    return displaySearchBar
        ? <Search
            searchBy={searchBy}
            onSearchChange={this.onSearchChange}
            onSearchClose={this.onSearchClose}
          />
        : <div className="navbar_search is-flex">
            <Link to="/profile" className="navbar_search-user is-flex">
              <img src="/assets/user_icon.svg" alt="user-icon"/>
            </Link>
            <div className="navbar_search-glass is-flex">
              <img
                alt="search"
                src="/assets/magnifying_glass.svg"
                onClick={() => this.onSearchOpen()}
              />
            </div>
          </div>
  }

  render() {
    const { pathname } = this.props.location

    return (
      <nav className="navbar">
        <div className="is-flex navbar_content column is-one-third">
          <Link to="/" className="is-flex navbar_logo">
            <img alt="auth0-logo" src="/assets/auth0_black.svg" />
            Quotes
          </Link>
          {
            pathname === '/profile'
              ? <Link to="/" className="navbar_button">LOGOUT</Link>
              : this.searchBarToggle()
          }
        </div>
      </nav>
    );
  }
}

export default withRouter(Navbar);
