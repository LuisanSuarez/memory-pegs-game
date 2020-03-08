import React from "react";
import "../assets/scss/styles.scss";

const QuestionCard = ({ questionNumber, correct, nextCard }) => {
  let questionNumberString = questionNumber.toString();
  questionNumberString =
    questionNumber > 99 ? questionNumberString.slice(1) : questionNumberString;

  if (correct) {
    return (
      <div class="question-card">
        <h1 class="question" onPointerDown={() => nextCard()}>
          ✓
        </h1>
        <div class="next-card" onPointerDown={() => nextCard()}>
          Next Card
        </div>
      </div>
    );
  }
  return (
    <div class="question-card">
      <h1 class="question">{questionNumberString}</h1>
    </div>
  );
};

export default QuestionCard;
