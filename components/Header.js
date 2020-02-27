import Link from "next/link"; //client-side routing components
import PropTypes from "prop-types";
import { COLOR, SPACING } from "../assets/css/globalStyles";
import * as Icon from "react-feather";
// import "../assets/css/header.css";

const headerContainer = {
  paddingBottom: SPACING.header,
  zIndex: 1,
  height: SPACING.header,
  width: "100%",
  display: "flex",
  justifyContent: "center",
  position: "fixed",
  top: "0"
};

const header = {
  width: "840px"
};

const navItems = {
  display: "flex",
  width: "100%",
  flexDirection: "row",
  backgroundColor: COLOR.thirtyPC,
  margin: 0,
  padding: 0,
  height: SPACING.header,
  listStyle: "none"
};

const Header = ({ isLoggedIn }) => {
  return (
    <div style={headerContainer}>
      <nav style={header}>
        <ul style={navItems}>
          <li>
            <Link href="/">
              <a>
                <Icon.Home />
              </a>
            </Link>
          </li>
          <li>
            <Link href="/game">
              <a>
                <Icon.PlayCircle />
              </a>
            </Link>
          </li>
          <li>
            <Link href="/mypegs">
              <a>
                <Icon.Edit3 />
              </a>
            </Link>
          </li>
          {isLoggedIn ? (
            <li>
              {/* <Link href="/settings">
                <a>
                  <Icon.Settings />
                </a>
              </Link> */}
            </li>
          ) : (
            <li>
              <Link href="/login">
                <a>
                  <Icon.LogIn />
                </a>
              </Link>
            </li>
          )}
          {isLoggedIn ? (
            <li>
              <Link href="/logout">
                <a>
                  <Icon.LogOut />
                </a>
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
