import React from "react";
import "../assets/scss/styles.scss";

const QuestionCard = ({ questionNumber, correct, nextCard }) => {
  let questionNumberString = questionNumber.toString();
  questionNumberString =
    questionNumber > 99 ? questionNumberString.slice(1) : questionNumberString;

  if (correct) {
    return (
      <div className="question-card">
        <h1 className="question" onPointerDown={() => nextCard()}>
          ✓
        </h1>
        <div className="next-card" onPointerDown={() => nextCard()}>
          Next Card
        </div>
      </div>
    );
  }
  return (
    <div className="question-card">
      <h1 className="question">{questionNumberString}</h1>
    </div>
  );
};

export default QuestionCard;
