import React, { useState, useEffect } from "react";
import QuestionCard from "../components/QuestionCard";
import ComboTracker from "../components/ComboTracker";
import Options from "../components/Options";
import secureTemplate from "../static/secure-template";
import { RefreshCcw } from "react-feather";

const gameCSS = {
  outline: "none"
};

const Game = () => {
  const [optionsAmount, setOptionsAmount] = useState(4);
  const [range, setRange] = useState(110);
  const [answer, setAnswer] = useState(58);
  const [correct, setCorrect] = useState("pizza");
  const [userAnswer, setUserAnswer] = useState(null);
  const [newOptions, setNewOptions] = useState(true);

  //on user input
  //setOptionsAmount
  const sendAnswer = userAnswer => {
    // console.log("THIS:", this);
    // console.log("sending answer:", userAnswer);
    // console.log("correct:", correct);
    // console.log("userAnswer === answer:", userAnswer === answer);
    correct != true ? setUserAnswer(userAnswer) : "";
    correct != true ? setCorrect(userAnswer === answer) : "";
  };

  const nextCard = () => {
    console.log("nexting");
    if (correct) {
      setCorrect(false);
      setUserAnswer(null);
      setNewOptions(true);
      setAnswer(Math.round(Math.random() * 110));
    }
  };

  return (
    <>
      <QuestionCard
        questionNumber={answer}
        userAnswer={userAnswer}
        nextCard={nextCard}
      />
      {/* <ComboTracker /> */}
      <Options
        optionsAmount={optionsAmount}
        range={range}
        answer={answer}
        sendAnswer={sendAnswer}
        nextCard={nextCard}
        newOptions={newOptions}
        setNewOptions={setNewOptions}
      />
    </>
  );
};

export default secureTemplate(Game);
