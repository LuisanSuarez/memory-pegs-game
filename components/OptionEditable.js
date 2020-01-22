import React, { useState, useEffect, useReducer, useCallback } from 'react';
import ImageUpload from './ImageUpload';
import axios from 'axios';
import Dropzone from 'react-dropzone';


const OptionEditable = ({...props}) => {
    const placeholderImage = 'https://apod.nasa.gov/apod/image/2001/22466-22467anaVantuyne900.jpg'
    const placeholderName = 'add a name to this peg';
    const { id } = props;
    //TODO: useReducer?
    const [image, setImage] = useState(placeholderImage)
    const [pegName, setPegName] = useState(placeholderName);
    //placeholder image
    let pegNumberStr = id.toString();

    pegNumberStr = id>99 ? pegNumberStr.slice(1) : pegNumberStr;

    useEffect(() => {
        get({ "peg": id })
    }, [])

    const url = 'http://localhost:8000/';

// #################
//CLOUDINARY UPLOAD
// #################
//stolen from: https://codepen.io/team/Cloudinary/pen/QgpyOK
const cloudName = 'luisan';
const unsignedUploadPreset = 'jufwcv6o';

// *********** Upload file to Cloudinary ******************** //
function uploadFile(file) {
    var url = `https://api.cloudinary.com/v1_1/${cloudName}/upload`;
    var xhr = new XMLHttpRequest();
    var fd = new FormData();
    xhr.open('POST', url, true);
    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');

//TODO: add a progress bar (you find it in the original codepen link, up top)

    xhr.onreadystatechange = function(e) {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var response = JSON.parse(xhr.responseText);
            var url = response.secure_url;
            const serverUrl = 'http://localhost:8000/';
            const data = {
                peg: id,
                imageURL: url,
                pegName: pegName
            }
            console.log("Data:", data);
            axios
                .put(serverUrl+'updateData', data)
                .then(res => {
                //   console.log('AXIOS GET RUNNING:', res);
                  const imageURL = JSON.parse(res.config.data).imageURL;
                  console.log("imageURL:", imageURL);
                  setImage(imageURL)
                //   console.log(JSON.parse(res.config.data).imageURL);
                //   console.log('hopefully I"m refreshing the new image');
                })
                .catch(err => {
                    console.log(err)
                })
            // setTimeout(() => {
            //     get({ "peg": pegNumberStr });
            //     console.log("TIMEOUT GET RUNS");
            //  }, 10000);
            // Create a thumbnail of the uploaded image, with 150px width
            // TODO: use the thumbnail created here to upload that instead of the huge image ;)))
            // var tokens = url.split('/');
            // tokens.splice(-2, 0, 'w_150,c_scale');
        }
    };
    fd.append('upload_preset', unsignedUploadPreset);
    fd.append('tags', 'browser_upload'); // Optional - add tag for image admin in Cloudinary
    fd.append('file', file);
    xhr.send(fd);
}

// *********** Handle selected files ******************** //
var handleFiles = function(files) {
    for (var i = 0; i < files.length; i++) {
        console.log(`this ran ${i} times`)
        uploadFile(files[i]); // call the function to upload the file
    }
};
// #############
//CLOUDINARY UPLOAD END
// #############


//TODO: refactor as HOCs / 'container component pattern'
//TODO: use a container to handle the logic
const get = (data) => {
    console.log("Data:", data);
    axios
    .get(url+'getImageUrl', {
        params: data
    })
    .then(res => {
        // console.log("From GET():", res.data.data)
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
                const pegName = JSON.parse(res.config.data).pegName;
                console.log("pegName:", pegName);
                setPegName(pegName)
            })
            .catch(err => {
                console.log(err)
            })
    }

    const handleChange = (e) => {
        setPegName(e.target.value)
    }

    const uploadAcceptedFiles = (acceptedFiles) => {
        handleFiles(acceptedFiles)
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
                <Dropzone onDrop={acceptedFiles => uploadAcceptedFiles(acceptedFiles)}>
                    {({getRootProps, getInputProps}) => (
                        <section>
                        <div {...getRootProps()}>
                            <input {...getInputProps()} />
                            <p>Drag 'n' drop some files here, or click to select files</p>
                        </div>
                        </section>
                    )}
                </Dropzone>
                {/* <ImageUpload peg={id} update={get} pegName={pegName} /> */}
            </div>
        </>
        )
}

export default OptionEditable