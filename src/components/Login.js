import React from "react";
import { useAuth0 } from "../auth/react-auth0-wrapper";
import { Link } from 'react-router-dom';

const Login = () => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();
  return (
    <>
    {!isAuthenticated
      ?(<button
          onClick={() =>
            loginWithRedirect({})
          }
        >
          Log in
        </button>)
      :(
      <Link to="/profile" className="navbar_search-user is-flex">
        <img src="/assets/user_icon.svg" alt="user-icon" />
      </Link>

    )}
    </>
  )
}

export default Login;
