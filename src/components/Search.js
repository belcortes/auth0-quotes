import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Search extends Component {
  state = {
    search: ''
  }

  handleInputChange = e => {
    this.setState({search: e.target.value})
  }

  onSubmit = e => {
    e.preventDefault();
    this.props.history.push({
      pathname: '/',
      search: `search=${this.state.search}`,
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input type="text" placeholder='Search' onChange={this.handleInputChange} />
        </form>
      </div>
    )
  }
};

export default withRouter(Search);
