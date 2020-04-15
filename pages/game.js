import React, { useState } from "react";
import QuestionCard from "../components/QuestionCard";
import ComboTracker from "../components/ComboTracker";
import Options from "../components/Options";
import secureTemplate from "../static/secure-template";

const Game = ({ collection }) => {
  const [optionsAmount, setOptionsAmount] = useState(4);
  const [range, setRange] = useState(110);
  const [answer, setAnswer] = useState(22);
  const [correct, setCorrect] = useState(false);
  const [newOptions, setNewOptions] = useState(true);
  const [combo, setCombo] = useState(0);

  //on user input
  //setOptionsAmount
  const sendAnswer = (userGuess) => {
    !correct ? (userGuess === answer ? setCombo(combo + 1) : setCombo(0)) : "";
    !correct ? setCorrect(userGuess === answer) : "";
  };

  const nextCard = () => {
    if (correct) {
      setCorrect(false);
      setNewOptions(true);
      setAnswer(Math.round(Math.random() * range));
    }
  };

  return (
    <>
      <QuestionCard
        questionNumber={answer}
        correct={correct}
        nextCard={nextCard}
      />
      <ComboTracker combo={combo} />
      <Options
        optionsAmount={optionsAmount}
        range={range}
        answer={answer}
        sendAnswer={sendAnswer}
        nextCard={nextCard}
        newOptions={newOptions}
        setNewOptions={setNewOptions}
        collection={collection}
      />
    </>
  );
};

export default secureTemplate(Game);
