import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useAuth0 } from './react-auth0-wrapper';
import './App.scss';

import Navbar from './components/Navbar';
import Quotes from './pages/Quotes';
import QuotePage from './pages/QuotePage';
import Profile from './pages/Profile';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { isAuthenticated } = useAuth0();
  return (
    <Route
      {...rest}
      render={props => (
        isAuthenticated === true
          ? <Component {...props} />
          : <Redirect to="/" />
      )}
    />
  );
};

function App() {
  const { loading } = useAuth0();

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
          <PrivateRoute path="/profile" component={Profile} />
        </div>
      </Router>
    </div>
  );
}

PrivateRoute.propTypes = {
  component: PropTypes.elementType.isRequired
};

export default App;
