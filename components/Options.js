import React, { useEffect, useState, useRef } from "react";
import Option from "./Option";
import { COLOR, SPACING } from "../assets/css/globalStyles";

const optionsCSS = {
  background: COLOR.mainColorDarker,
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "space-around",
  width: `calc(100vh - ${SPACING.header})`,
  height: `calc(100vh - ${SPACING.header})`,
  position: "absolute",
  top: SPACING.header,
  left: 0,
  right: 0,
  margin: "0 auto",
  boxSizing: "border-box",
  padding: SPACING.MD
};

const keyboardOptionsCSS = {
  position: "fixed",
  height: "100vh",
  width: "100vw",
  top: 0,
  outline: "none"
};

const Options = ({
  optionsAmount,
  range,
  answer,
  sendAnswer,
  nextCard,
  newOptions,
  setNewOptions
}) => {
  const [optionNumbers, setOptionNumbers] = useState([]);
  const keyboardDiv = useRef(null);

  useEffect(() => {
    newOptions ? setOptionNumbers(createOptionNumbers(optionsAmount)) : "";
    setNewOptions(false);
  }, [newOptions]);

  const url =
    process.env.NODE_ENV !== "production" ? devUrlServer : productionUrlServer;
  console.log(`${process.env.NODE_ENV}: ${url}`);

  const createOptionNumbers = optionsAmount => {
    let options = [answer];
    let randomNumber = Math.round(Math.random() * range);
    for (let i = 0; i < optionsAmount - 1; i++) {
      do {
        randomNumber = Math.round(Math.random() * range);
      } while (randomNumber === answer || options.indexOf(randomNumber) > -1);
      options.push(randomNumber);
    }
    shuffleArray(options);

    return options;
  };

  const shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };

  const handleKeyDown = e => {
    console.table(e.key);
    switch (e.key) {
      case "q":
      case "Q":
        sendAnswer(optionNumbers[0]);
        break;
      case "w":
      case "W":
        sendAnswer(optionNumbers[1]);
        break;
      case "s":
      case "D":
        sendAnswer(optionNumbers[2]);
        break;
      case "d":
      case "D":
        sendAnswer(optionNumbers[3]);
        break;
      case "Enter":
        nextCard();
        break;
    }
  };

  const reFocusKeyboardDiv = () => {
    console.log("running:", keyboardDiv);
    keyboardDiv.current.focus();
    // document.body.focus();
    console.log("ran:", document.activeElement);
  };
  return (
    <>
      <div
        style={keyboardOptionsCSS}
        onKeyDown={e => handleKeyDown(e)}
        tabIndex="0"
        onClick={sendAnswer}
        ref={keyboardDiv}
        // onBlur={keyboardDiv.current ? keyboardDiv.current.focus() : ""}
      ></div>
      <div style={optionsCSS}>
        {optionNumbers.map(number => (
          <Option
            id={number}
            pegNumber={number}
            sendAnswer={sendAnswer}
            refocusKeyboardDiv={reFocusKeyboardDiv}
          />
        ))}
      </div>
    </>
  );
};

export default Options;
