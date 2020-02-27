import { useEffect } from "react";
import PropTypes from "prop-types";
import { getToken } from "../static/auth.js";
import template from "../static/template";
import axios from "axios";
import { Service } from "../utils/DBService";
import { productionUrlServer, devUrlServer } from "../globalVariables";

const placeholderImage =
  "https://res.cloudinary.com/luisan/image/upload/v1581793149/placeholder_nyd71e.jpg";

const url =
  process.env.NODE_ENV !== "production" ? devUrlServer : productionUrlServer;

const loadPegImages = () => {
  let data;
  for (let id = 0; id < 110; id++) {
    data = { peg: id };
    let pegNumberStr = id.toString();
    pegNumberStr = id > 99 ? pegNumberStr.slice(1) : pegNumberStr;
    axios
      .get(url + "getImageUrl", {
        params: data
      })
      .then(res => {
        id < 3 ? console.log(res) : " ";
        Service.setFileToIndexedDB(
          pegNumberStr,
          res.data.data[0] ? res.data.data[0].imageURL : placeholderImage,
          res.data.data[0] ? res.data.data[0].pegName : "add a name to this peg"
        );
      })
      .catch(err => {
        if (id == 60) {
          console.log("Error:", err);
        } else {
          console.log("Err");
        }
      });
  }
};

//TODO: check if the database has already been loaded.
loadPegImages();

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
  isLoggedIn ? console.log("logged in :") : console.log("is not logged in");
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
