import React, { useState, useEffect } from "react";

const questionCard = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center"
};

const QuestionCard = ({ ...props }) => {
  const { questionNumber, userAnswer, nextCard } = props;
  let questionNumberString = questionNumber.toString();
  questionNumberString =
    questionNumber > 99 ? questionNumberString.slice(1) : questionNumberString;

  if (questionNumber === userAnswer) {
    return (
      <div style={questionCard}>
        <h1> Correct Answer!</h1>
        <div onPointerDown={() => nextCard()}>Next Card</div>
      </div>
    );
  }
  return (
    <div style={questionCard}>
      <h1>A React QuestionCard</h1>
      <div>{questionNumberString}</div>
    </div>
  );
};

export default QuestionCard;
