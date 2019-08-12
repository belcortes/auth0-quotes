import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.scss';

import Navbar from './components/Navbar';
import Quotes from './pages/Quotes';
import QuotePage from './pages/QuotePage';
import Profile from './pages/Profile';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Route exact path="/" component={Quotes} />
        <Route exact path="/quotes/:quoteId" component={QuotePage} />
        <Route exact path="/profile" component={Profile} />
      </Router>
    </div>
  );
}

export default App;
