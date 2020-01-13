import React, {useEffect, useState} from 'react';
import Option from './Option'

const Options = ({...props}) => {
    const {optionsAmount, answer, sendAnswer, setNewOptions} = props;
    let {newOptions} = props;
    const [options, setOptions] = useState([]);

    useEffect(() => {
        setOptions(createOptions(optionsAmount));
        setNewOptions(false);
    }, [newOptions])

    const createOptions = optionsAmount => {
        let options = [];
        let randomNumber = Math.round(Math.random()*110);
        for (let i=0; i<optionsAmount-1; i++) {
            do {
                randomNumber = Math.round(Math.random()*110);
            } while (randomNumber === answer)

            options.push(<Option id={randomNumber} answer={randomNumber} sendAnswer={sendAnswer}/>)
        }
        options.push(<Option id={answer} answer={answer} sendAnswer={sendAnswer}/>)
        //shuffle options order
        return options
    }
    return (
        <>
            {options}
        </>
    )
}

export default Options