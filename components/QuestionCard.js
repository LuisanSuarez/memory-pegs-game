import React, { useState, useEffect } from "react";
import { FONT_SIZE, COLOR, SPACING } from "../assets/css/globalStyles";

const questionCard = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center"
};

const questionCSS = {
  fontSize: FONT_SIZE.H1,
  color: COLOR.support1Color,
  margin: "auto",
  marginTop: SPACING.XL,
  padding: SPACING.XL + " " + SPACING.XL + " " + SPACING.LG,
  zIndex: 2,
  height: "90px"
};

const nextCardCSS = {
  position: "absolute",
  bottom: "30px",
  right: "50px"
};

const QuestionCard = ({ questionNumber, userAnswer, nextCard }) => {
  let questionNumberString = questionNumber.toString();
  questionNumberString =
    questionNumber > 99 ? questionNumberString.slice(1) : questionNumberString;

  if (questionNumber === userAnswer) {
    return (
      <div style={questionCard}>
        <h1 style={questionCSS} onPointerDown={() => nextCard()}>
          ✓
        </h1>
        <div style={nextCardCSS} onPointerDown={() => nextCard()}>
          Next Card
        </div>
      </div>
    );
  }
  return (
    <div style={questionCard}>
      <h1 style={questionCSS}>{questionNumberString}</h1>
    </div>
  );
};

export default QuestionCard;
