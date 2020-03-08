import React from "react";
import SecureTemplate from "../static/secure-template";
import OptionEditable from "../components/OptionEditable";

const PegsDisplay = ({ collection, loggedInUser }) => {
  return (
    <>
      <h1> My Pegs!</h1>
      <div className="pegs">
        {[...Array(11)].map((v, i) => (
          <div className={"peg-group " + i}>
            {[...Array(10)].map((vv, j) => (
              <OptionEditable
                id={i * 10 + j}
                writePermitted={collection === loggedInUser.nickname}
                collection={collection}
              />
            ))}
          </div>
        ))}
      </div>
    </>
  );
};

export default SecureTemplate(PegsDisplay);
