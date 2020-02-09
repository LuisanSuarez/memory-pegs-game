import React, { useEffect, useState } from "react";
import Option from "./Option";
import { COLOR } from "../assets/css/globalStyles";

const optionsCSS = {
  display: "flex",
  flexWrap: "wrap",
  margin: "0 auto",
  width: "500px",
  justifyContent: "space-around",
  background: COLOR.mainColorDark
};

//TODO: destructure here
const Options = ({ ...props }) => {
  const { optionsAmount, answer, sendAnswer, setNewOptions } = props;
  const { newOptions } = props;
  const [options, setOptions] = useState([]);

  useEffect(() => {
    console.log("newOptions:", newOptions);
    newOptions ? setOptions(createOptions(optionsAmount)) : "";
    setNewOptions(false);
  }, [newOptions]);

  const shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };

  const createOptions = optionsAmount => {
    let options = [];
    let randomNumber = Math.round(Math.random() * 110);
    for (let i = 0; i < optionsAmount - 1; i++) {
      do {
        randomNumber = Math.round(Math.random() * 110);
      } while (randomNumber === answer);

      options.push(
        <Option
          id={randomNumber}
          answer={randomNumber}
          sendAnswer={sendAnswer}
        />
      );
    }
    options.push(
      <Option id={answer} answer={answer} sendAnswer={sendAnswer} />
    );
    shuffleArray(options);
    return options;
  };

  return <div style={optionsCSS}>{options}</div>;
};

export default Options;
