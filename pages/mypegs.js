import React from "react";
import SecureTemplate from "../static/secure-template";
import OptionEditable from "../components/OptionEditable";
import axios from "axios";
import { productionUrl, devUrl } from "../globalVariables";

const PegsDisplay = ({ loggedInUser }) => {
  console.log("NODE_ENV:", process.env.NODE_ENV);
  const url = false ? devUrl : productionUrl;
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
