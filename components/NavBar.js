import React from "react";
import Link from "next/link";
import { useAuth0 } from "../react-auth0-spa.js";
// console.log("Auth0:", useAuth0);
const NavBar = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <div>
      {!isAuthenticated && (
        <button onClick={() => loginWithRedirect({})}>Log in</button>
      )}

      {isAuthenticated && <button onClick={() => logout()}>Log out</button>}
    </div>
    <div>
      // ... some inline styles
      <nav>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/public">
              <a>Public</a>
            </Link>
          </li>
          {isLoggedIn ? (
            <li>
              <Link href="/secret">
                <a>Secret</a>
              </Link>
            </li>
          ) : (
            <li>
              <Link href="/login">
                <a>Login</a>
              </Link>
            </li>
          )}
          {isLoggedIn ? (
            <li>
              <Link href="/logout">
                <a>Logout</a>
              </Link>
            </li>
          ) : (
            ""
          )}
        </ul>
      </nav>
      <h1>Auth0 & Next.js</h1>
    </div>
  );
};

export default NavBar;
