import PropTypes from "prop-types";
import { getToken } from "../static/auth.js";
import template from "../static/template";
import axios from "axios";
import { productionUrlServer, devUrlServer } from "../globalVariables";

const Index = ({ isLoggedIn, loggedInUser }) => {
  const url =
    process.env.NODE_ENV !== "production" ? devUrlServer : productionUrlServer;
  isLoggedIn
    ? axios
        .post(url + "setCollection", loggedInUser)
        .then(res => console.log(res))
        .catch(err => {
          console.log("ERROR");
          console.log(err);
        })
    : console.log("isNotLoggedIn");
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

export default template(Index);
