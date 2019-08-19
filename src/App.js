import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { useAuth0 } from "./auth/react-auth0-wrapper";
import './App.scss';

import Navbar from './components/Navbar';
import Quotes from './pages/Quotes';
import QuotePage from './pages/QuotePage';
import Profile from './pages/Profile';

function App() {
  const { loading } = useAuth0();
  console.log(useAuth0())
  if (loading) {
    return (
      <div>Loading...</div>
    );
  }

  return (
    <div className="App is-centered">
      <Router>
        <Navbar />
        <div className="content column is-one-third">
          <Route exact path="/" component={Quotes} />
          <Route exact path="/quotes/:quoteId" component={QuotePage} />
          <Route exact path="/profile" component={Profile} />
        </div>
      </Router>
    </div>
  );
}

export default App;
