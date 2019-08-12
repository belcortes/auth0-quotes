import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Search from './Search';

class Navbar extends Component {
  state = {
    displaySearchBar: false,
    searchBy: 'text'
  }

  onSearchOpen = () => this.setState({ displaySearchBar: true });
  onSearchClose = () => this.setState({ displaySearchBar: false });
  onSearchChange = e => this.setState({ searchBy: e.target.value });

  render() {
    const { displaySearchBar, searchBy } = this.state;
    return (
      <nav className="is-flex navbar">
        <Link to="/" className="is-flex navbar-logo">
          <img alt="auth0-logo" src="/assets/auth0_black.svg" />
          | Quotes
        </Link>
        {
          displaySearchBar
            ? <Search
                onSearchChange={this.onSearchChange}
                onSearchClose={this.onSearchClose}
                searchBy={searchBy}
              />
            : <img
                alt="search"
                src="/assets/magnifying_glass.svg"
                className="navbar-glass"
                onClick={() => this.onSearchOpen()}
              />
        }


      </nav>
    );
  }
}

export default Navbar;
