import React from "react";
import template from "../static/template";
import OptionEditable from "../components/OptionEditable";
import axios from "axios";

const PegsDisplay = ({ loggedInUser }) => {
  console.log("Pegs:", loggedInUser);
  const url = "http://localhost:8000/";
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

export default template(PegsDisplay);
