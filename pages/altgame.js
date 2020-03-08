import React, { useState } from "react";
import ComboTracker from "../components/ComboTracker";
import Input from "../components/Input";
import Option from "../components/Option";
import secureTemplate from "../static/secure-template";

const AltGame = ({ collection }) => {
  const [range, setRange] = useState(110);
  const [answer, setAnswer] = useState(58);
  const [correct, setCorrect] = useState(false);
  const [combo, setCombo] = useState(0);

  //on user input
  //setOptionsAmount
  const sendAnswer = userGuess => {
    userGuess = userGuess[0] == 0 && userGuess[1] ? 1 + userGuess : userGuess;
    userGuess == answer ? setCombo(combo + 1) : setCombo(0);
    userGuess == answer ? nextCard() : "";
  };

  const nextCard = () => {
    setCorrect(false);
    setAnswer(Math.round(Math.random() * range));
  };

  return (
    <>
      <ComboTracker combo={combo} />
      <Option
        pegNumber={answer}
        id={answer}
        sendAnswer={() => {}}
        collection={collection}
      />
      <Input sendAnswer={sendAnswer} />
    </>
  );
};

export default secureTemplate(AltGame);
