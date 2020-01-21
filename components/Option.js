import React, { useState, useEffect } from 'react';
import axios from 'axios';
// const express = require('express')
// const cloudinary = require('cloudinary')
// const formData = require('express-form-data')
// const cors = require('cors')

//TODO: destructure here
const Option = ({...props}) => {
    const placeholderImage = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ebayimg.com%2Fimages%2Fi%2F172778278123-0-1%2Fs-l1000.jpg&f=1&nofb=1'
    const {answer, id, sendAnswer} = props;
    const [pegName, setPegName] = useState('give me a name');
    const [image, setImage] = useState(placeholderImage)

    let answerStr = answer.toString();
    answerStr = answer>99 ? answerStr.slice(1) : answerStr;

    useEffect(() => {
        get({ "peg": answer })
    }, [])

    const url = 'http://localhost:8000/';
    const get = (data) => {
        axios
            .get(url+'getImageUrl', {
                params: data
            })
            .then(res => setImage(res.data.data[0].imageURL ? res.data.data[0].imageURL : placeholderImage  ))
            .catch(err => console.log(err))
    }
    return (
        <>
            <div onPointerDown={() => sendAnswer(answer)}>
                <h1>{pegName}</h1>
                <h1>{answerStr}</h1>
                <img src={image} style={{height: '100px', width: '100px'}}/>
                Send me as answer!
            </div>
        </>
        )
}

export default Option