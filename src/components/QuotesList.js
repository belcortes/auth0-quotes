import React, { Component } from 'react';
import PropTypes from 'prop-types';

import QuotesListItem from './QuotesListItem';

class QuotesList extends Component  {
  componentDidMount() {
    this.refs.myscroll.addEventListener("scroll", () => {
  	  if (
  	    this.refs.myscroll.scrollTop + this.refs.myscroll.clientHeight >=
  	    this.refs.myscroll.scrollHeight
  	  ) {
  	    this.props.loadMore();
  	  }
  	});
  }

  render() {
    const { quotes } = this.props;
    return (
      <div className="quotes_list" ref="myscroll">
        {quotes.map((quote, i) => <QuotesListItem key={quote.id + i} quote={quote} />)}
      </div>
    )
  }
};

QuotesList.propTypes = {
  quotes: PropTypes.arrayOf(PropTypes.shape()).isRequired
};

export default QuotesList;
