import React from "react";
import SecureTemplate from "../static/secure-template";
import OptionEditable from "../components/OptionEditable";

const PegsDisplay = () => {
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
