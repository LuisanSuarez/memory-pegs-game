import Link from "next/link"; //client-side routing components
import PropTypes from "prop-types";
import * as Icon from "react-feather";
import "../assets/scss/styles.scss";

const Header = ({
  isLoggedIn,
  availableCollections,
  setCollection,
  collection
}) => {
  console.log({ isLoggedIn, availableCollections, setCollection });
  return (
    <div className="header-container">
      <nav className="nav">
        <ul className="nav-items">
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
              <Link href="/logout">
                <a>
                  <Icon.LogOut />
                </a>
              </Link>
            </li>
          ) : (
            // <li>
            //   {/* <Link href="/settings">
            //     <a>
            //       <Icon.Settings />
            //     </a>
            //   </Link> */}
            // </li>
            <li>
              <Link href="/login">
                <a>
                  <Icon.LogIn />
                </a>
              </Link>
            </li>
          )}
        </ul>
        {isLoggedIn ? (
          <div className="dropdown" className="dropdown">
            <div className="selection">{collection}</div>
            {availableCollections.map(collection => (
              <div
                onClick={() => setCollection(collection)}
                value={collection}
                className="selection"
              >
                {collection}
              </div>
            ))}
          </div>
        ) : (
          ""
        )}
      </nav>
    </div>
  );
};
Header.propTypes = {
  isLoggedIn: PropTypes.bool
};

export default Header;
