import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Auth0Provider } from './react-auth0-wrapper';

const onRedirectCallback = appState => {
  window.history.replaceState(
    {},
    document.title,
    appState && appState.targetUrl
      ? appState.targetUrl
      : window.location.pathname
  );
};

// const redirectUri = 'http://localhost:3000/profile' || 'https://auth0-quotes.herokuapp.com/profile'
// const redirectUri = process.env.NODE_ENV === 'production' ? 'https://auth0-quotes.herokuapp.com/profile' : 'http://localhost:3000/profile';
// const redirectUri = 'http://localhost:3000/profile' || 'https://auth0-quotes.herokuapp.com/profile';

ReactDOM.render(
  <Auth0Provider
    domain={process.env.REACT_APP_DOMAIN}
    client_id={process.env.REACT_APP_CLIENT_ID}
    redirect_uri={`${window.location.origin}/profile`}
    onRedirectCallback={onRedirectCallback}
  >
    <App />
  </Auth0Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
