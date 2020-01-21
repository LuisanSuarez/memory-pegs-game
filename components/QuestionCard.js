import React, { useState, useEffect } from 'react';


const QuestionCard = ({...props}) => {

    const {questionNumber, userAnswer, nextCard} = props;
    let questionNumberString = questionNumber.toString();
    questionNumberString = questionNumber>99 ? questionNumberString.slice(1) : questionNumberString;

    if (questionNumber === userAnswer) {
        return (
            <>
                <h1> Correct Answer!</h1>
                <div onPointerDown={() => nextCard()}>
                    Next Card
                </div>
            </>
        )
    }
    return (
        <>
            <h1>A React QuestionCard</h1>
            <div>
                {questionNumberString}
            </div>
        </>
        )
}

export default QuestionCard