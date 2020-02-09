import Link from "next/link"; //client-side routing components
import PropTypes from "prop-types";
import { SPACING } from "../assets/css/globalStyles";
// import "../assets/css/header.css";

const headerContainer = {
  paddingBottom: SPACING.header
};

const header = {
  display: "flex",
  position: "fixed",
  width: "99vw",
  top: "0"
};

const navItems = {
  display: "flex",
  width: "100%",
  flexDirection: "row",
  backgroundColor: "orange",
  margin: 0,
  height: SPACING.header
};

const Header = ({ isLoggedIn }) => {
  return (
    <div style={headerContainer}>
      <nav style={header}>
        <ul style={navItems}>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/game">
              <a>Game</a>
            </Link>
          </li>
          <li>
            <Link href="/mypegs">
              <a>Your Pegs</a>
            </Link>
          </li>
          {isLoggedIn ? (
            <li>
              <Link href="/settings">
                <a>Settings</a>
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
    </div>
  );
};
Header.propTypes = {
  isLoggedIn: PropTypes.bool
};

export default Header;
