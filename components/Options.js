import React, { useEffect, useState, useRef } from "react";
import Option from "./Option";
import "../assets/scss/styles.scss";

const Options = ({
  optionsAmount,
  range,
  answer,
  sendAnswer,
  nextCard,
  newOptions,
  setNewOptions,
  collection
}) => {
  const [optionInts, setOptionInts] = useState([]);

  useEffect(() => {
    newOptions ? setOptionInts(createOptionNumbers(optionsAmount)) : "";
    setNewOptions(false);
  }, [newOptions]);

  const createOptionNumbers = optionsAmount => {
    let options = [answer];
    let randomNumber = Math.round(Math.random() * range);
    for (let i = 0; i < optionsAmount - 1; i++) {
      do {
        randomNumber = Math.round(Math.random() * range);
      } while (randomNumber === answer || options.indexOf(randomNumber) > -1);
      options.push(randomNumber);
    }

    //functional components re-render on every change to the DOM - feb21
    //te recordas que we used to declare the Components here, and the state values
    //being passed down seem to freeze? (ya no cuando los declaramos al momento en el return)
    //miremos si es por closure
    //also this: https://reactjs.org/docs/faq-functions.html
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
    // console.table(e.key);
    switch (e.key) {
      case "q":
      case "Q":
        sendAnswer(optionInts[0]);
        break;
      case "w":
      case "W":
        sendAnswer(optionInts[1]);
        break;
      case "s":
      case "D":
        sendAnswer(optionInts[2]);
        break;
      case "d":
      case "D":
        sendAnswer(optionInts[3]);
        break;
      case "Enter":
        nextCard();
        break;
    }
  };

  return (
    <>
      <div
        class="options-keyboard"
        onKeyDown={e => handleKeyDown(e)}
        tabIndex="0"
      ></div>
      <div className="options" tabIndex="0" onKeyDown={e => handleKeyDown(e)}>
        {optionInts.map(number => (
          <Option
            id={number}
            pegNumber={number}
            sendAnswer={sendAnswer}
            collection={collection}
          />
        ))}
      </div>
    </>
  );
};

export default Options;
