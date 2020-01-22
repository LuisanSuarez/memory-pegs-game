import React, { useState, useEffect } from 'react';
import QuestionCard from '../components/QuestionCard'
import ComboTracker from '../components/ComboTracker'
import Options from '../components/Options'


const Game = () => {
    const [optionsAmount, setOptionsAmount] = useState(4);
    const [answer, setAnswer] = useState(1);
    const [userAnswer, setUserAnswer] = useState(null);
    const [newOptions, setNewOptions] = useState(true)
    //on user input
        //setOptionsAmount
    const sendAnswer = userAnswer => {
        setUserAnswer(userAnswer);
    }

    const nextCard = () => {
        setUserAnswer(null);
        setNewOptions(true);
        setAnswer(Math.round(Math.random()*110))
    }
    console.log("Game is Rendering:", newOptions);
    return (
        <>
            <h1>Memory Game</h1>
            <QuestionCard
                questionNumber={answer}
                userAnswer={userAnswer}
                nextCard={nextCard}
            />
            <ComboTracker />
            <Options
                optionsAmount={optionsAmount}
                answer={answer}
                sendAnswer={sendAnswer}
                newOptions={newOptions}
                setNewOptions={setNewOptions}
            />
        </>
        )
}

export default Game