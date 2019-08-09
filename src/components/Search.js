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
    const { history } = this.props;
    const { search } = this.state;

    history.push({
      pathname: '/',
      search: `search=${search}`
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input type="text" placeholder="Search" onChange={this.handleInputChange} />
        </form>
      </div>
    );
  }
}

Search.propTypes = {
  history: PropTypes.shape().isRequired
};

export default withRouter(Search);
