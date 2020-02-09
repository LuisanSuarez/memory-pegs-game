import React, { useState, useEffect } from "react";
import { FONT_SIZE, COLOR, SPACING } from "../assets/css/globalStyles";

const questionCard = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center"
};

const questionCSS = {
  fontSize: FONT_SIZE.H1,
  color: COLOR.support1ColorLightest,
  margin: "auto",
  padding: SPACING.XL
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
      {/* <h1>A React QuestionCard</h1> */}
      <h1 style={questionCSS}>{questionNumberString}</h1>
    </div>
  );
};

export default QuestionCard;
