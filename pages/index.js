import PropTypes from "prop-types";
import secureTemplate from "../static/secure-template";

const Index = ({ isLoggedIn }) => {
  return (
    <div>
      Hello, this is the main application.
      {!isLoggedIn && <p>You're not logged in yet</p>}
    </div>
  );
};

Index.propTypes = {
  isLoggedIn: PropTypes.bool
};

export default secureTemplate(Index);
