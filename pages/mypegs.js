import React from "react";
import SecureTemplate from "../static/secure-template";
import OptionEditable from "../components/OptionEditable";
import axios from "axios";
import { productionUrlServer, devUrlServer } from "../globalVariables";

const PegsDisplay = ({ loggedInUser }) => {
  const url =
    process.env.NODE_ENV !== "production" ? devUrlServer : productionUrlServer;
  axios
    .post(url + "setCollection", loggedInUser)
    .then(res => console.log(res))
    .catch(err => {
      console.log("ERROR");
      console.log(err);
    });

  return (
    <>
      <h1> My Pegs!</h1>
      <div>
        {[...Array(110)].map((v, index) => (
          <OptionEditable id={index} />
        ))}
      </div>
    </>
  );
};

export default SecureTemplate(PegsDisplay);
