import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from '../react-auth0-wrapper';

const Logout = () => {
  const { isAuthenticated, logout } = useAuth0();
  return (
    <>
      {isAuthenticated && (
        <Link
          to={`https://${process.env.REACT_APP_DOMAIN}/v2/logout?returnTo=${window.location.origin}&client_id=${process.env.REACT_APP_CLIENT_ID}`}
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
