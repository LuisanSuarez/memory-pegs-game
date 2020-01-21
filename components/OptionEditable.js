import React, { useState, useEffect, useReducer } from 'react';
import ImageUpload from './ImageUpload';
import axios from 'axios';


const OptionEditable = ({...props}) => {
    const placeholderImage = 'https://apod.nasa.gov/apod/image/2001/22466-22467anaVantuyne900.jpg'
    const placeholderName = 'add a name to this peg';
    const { id } = props;
    const [image, setImage] = useReducer(placeholderImage)
    const [pegName, setPegName] = useState(placeholderName);
    //placeholder image
    let pegNumberStr = id.toString();

    pegNumberStr = id>99 ? pegNumberStr.slice(1) : pegNumberStr;

    useEffect(() => {
        get({ "peg": pegNumberStr })
    }, [])

    const url = 'http://localhost:8000/';

    //TODO: refactor as HOCs / 'container component pattern'
    //TODO: use a container to handle the logic
    const get = (data) => {
        axios
            .get(url+'getImageUrl', {
                params: data
            })
            .then(res => {
                setImage(res.data.data[0].imageURL ? res.data.data[0].imageURL : placeholderImage)
                setPegName(res.data.data[0].pegName ? res.data.data[0].pegName : placeholderName)
            })
            .catch(err => {
                // console.log("this is where it's at:", err)
            })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("we'll post:", pegName, "for peg no.", id);
        const data = {
            peg: id,
            pegName: pegName,
        }
        axios
            .put(url + 'updateData', data)
            .then(res => {
                console.log("put res:", res);
                get()
                console.log('RAN GET');
            })
            .catch(err => {
                console.log(err)
            })
    }

    const handleChange = (e) => {
        console.log(e.target.value);
        setPegName(e.target.value)
    }

    return (
        <>
            <div class="option-card" onPointerDown={() => "" }>
                    <form
                        onSubmit={e => { e.preventDefault(); e.target.blur(); }} 
                        onBlur={e => handleSubmit(e)}>
                        <input
                            type='text'
                            onChange={(e) => handleChange(e)}
                            name='pegName'
                            value={pegName}
                            />
                    </form>
                <img src={image} style={{height: '100px', width: '100px', border: '2px solid black', background: 'lightgray'}} />
                <h4>{pegNumberStr}</h4>
                <ImageUpload peg={id} update={get} pegName={pegName} />
            </div>
        </>
        )
}

export default OptionEditable