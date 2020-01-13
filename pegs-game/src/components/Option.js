import React, { useState, useEffect } from 'react';


const Option = ({...props}) => {
    const {answer, id, sendAnswer} = props;

    let answerStr = answer.toString();
    answerStr = answer>99 ? answerStr.slice(1) : answerStr;

    return (
        <>
            <h1>Option with image number {answerStr}</h1>
            <div onPointerDown={() => sendAnswer(answer)}>
                Send me as answer!
            </div>
        </>
        )
}

export default Option