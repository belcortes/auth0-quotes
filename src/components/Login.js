import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from '../react-auth0-wrapper';

const Login = () => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();
  return (
    <>
      {!isAuthenticated
        ? (
            <button
              className="navbar_button login"
              type="button"
              onClick={() => loginWithRedirect({})}
            >
              LOGIN
            </button>
        )
        : (
          <Link to="/profile" className="navbar_search-user is-flex">
            <img src="/assets/user_icon.svg" alt="user-icon" />
          </Link>
        )
      }
    </>
  );
};

export default Login;
