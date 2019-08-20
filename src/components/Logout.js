import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from '../react-auth0-wrapper';

const Logout = () => {
  const { isAuthenticated, logout } = useAuth0();
  // const appUrl = 'http://localhost:3000' || 'https://auth0-quotes.herokuapp.com';
  // const appUrl = process.env.NODE_ENV === 'production' ? 'https://auth0-quotes.herokuapp.com' : 'http://localhost:3000';
  return (
    <>
    {isAuthenticated && (
      <Link
        to={`https://${process.env.REACT_APP_DOMAIN}/v2/logout?returnTo=http%3A%2F%2F${window.location.origin}&client_id=${process.env.REACT_APP_CLIENT_ID}`}
        className="navbar_button"
        onClick={() => logout()}
      >
        LOGOUT
      </Link>
    )}
    </>
  );
};

export default Logout;
