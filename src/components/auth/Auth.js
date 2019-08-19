import React from "react";
import { useAuth0 } from "../auth/react-auth0-wrapper";
import { Link } from 'react-router-dom';



const Login = () => (
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

const Logout = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
  return (
    <>
    {isAuthenticated && (
      <Link to="/" className="navbar_button" onClick={() => logout()}>LOGOUT</Link>
    )}
    </>
  )
}

// const Auth = () => {
//   const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
//
//   return (
//     <div>
//     <Link to="/profile" className="navbar_search-user is-flex">
//       <img src="/assets/user_icon.svg" alt="user-icon" />
//     </Link>
//       {!isAuthenticated && (
//         <button
//           onClick={() =>
//             loginWithRedirect({})
//           }
//         >
//           Log in
//         </button>
//       )}
//
//       {isAuthenticated && <button onClick={() => logout()}>Log out</button>}
//
//     </div>
//   );
// };
//
//
//
export default Logout;
