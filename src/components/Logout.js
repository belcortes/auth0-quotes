import React from "react";
import { useAuth0 } from "../auth/react-auth0-wrapper";
import { Link } from 'react-router-dom';

const Logout = () => {
  const { isAuthenticated, logout } = useAuth0();
  return (
    <>
    {isAuthenticated && (
      <Link to="/" className="navbar_button" onClick={() => logout()}>LOGOUT</Link>
    )}
    </>
  )
}

export default Logout;
