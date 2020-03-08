import React, { useState, useEffect, useReducer, useCallback } from "react";
import axios from "axios";
import Dropzone from "react-dropzone";
import { Service } from "../utils/DBService";
import { productionUrlServer, devUrlServer } from "../globalVariables";
import "../assets/scss/styles.scss";

const OptionEditable = ({ id, writePermitted, collection }) => {
  const placeholderImage =
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ebayimg.com%2Fimages%2Fi%2F172778278123-0-1%2Fs-l1000.jpg&f=1&nofb=1";
  const placeholderName = "add a name to this peg";
  //TODO: useReducer?
  const [image, setImage] = useState(placeholderImage);
  const [iDBEntry, setIDBEntry] = useState({});
  const [pegName, setPegName] = useState(placeholderName);
  const serverUrl =
    process.env.NODE_ENV !== "production" ? devUrlServer : productionUrlServer;

  let pegNumberStr = id.toString();

  pegNumberStr = id > 99 ? pegNumberStr.slice(1) : pegNumberStr;

  useEffect(() => {
    Service.get(pegNumberStr, collection)
      .then(res => {
        setIDBEntry(res);
        setImage(res.image);
        setPegName(res.pegName);
      })
      .catch(err => {
        setImage(placeholderImage);
      });
  }, [collection]);

  const handleSubmit = e => {
    e.preventDefault();
    const data = {
      peg: id,
      pegName: pegName
    };
    axios
      .put(serverUrl + "updatePegEntry", data)
      .then(res => {
        const pegName = JSON.parse(res.config.data).pegName;
        setPegName(pegName);
        Service.add({ ...iDBEntry, pegName: pegName }, collection);
      })
      .catch(err => {
        console.log("Image upload error:", err);
      });
  };

  const handleChange = e => {
    setPegName(e.target.value);
  };

  // const uploadAcceptedFiles = acceptedFiles => {
  //   handleFiles(acceptedFiles);
  // };
  // #################
  //UPLOAD TO CLOUDINARY
  // #################
  //stolen from: https://codepen.io/team/Cloudinary/pen/QgpyOK

  const cloudName = "luisan";
  const unsignedUploadPreset = "jufwcv6o";

  // *********** Upload file to Cloudinary ******************** //

  function uploadFile(file) {
    const url = `https://api.cloudinary.com/v1_1/${cloudName}/upload`;
    const xhr = new XMLHttpRequest();
    const fd = new FormData();
    xhr.open("POST", url, true);
    xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");

    //TODO: add a progress bar (you find it in the original codepen link, up top)
    xhr.onreadystatechange = function(e) {
      if (xhr.readyState == 4 && xhr.status == 200) {
        const response = JSON.parse(xhr.responseText);
        const url = response.secure_url;
        // const serverUrl =
        //   process.env.NODE_ENV !== "production"
        //     ? devUrlServer
        //     : productionUrlServer;
        const data = {
          peg: id,
          imageURL: url,
          pegName: pegName
        };
        data.imageURL = data.imageURL
          .split("upload")
          .join("upload/c_thumb,h_250,w_250");
        console.log({ imageUrl: data.imageURL });
        axios
          .put(serverUrl + "updatePegEntry", data)
          .then(res => {
            const imageURL = JSON.parse(res.config.data).imageURL;
            console.log("res:", imageURL);
            Service.setFileToIndexedDB(
              pegNumberStr,
              imageURL,
              pegName,
              collection
            );
            setImage(imageURL);
          })
          .catch(err => {
            id == 1 ? console.log(err) : "";
          });
        // Create a thumbnail of the uploaded image, with 150px width
        // TODO: use the thumbnail created here to upload that instead of the huge image ;)))
        // const tokens = url.split('/');
        // tokens.splice(-2, 0, 'w_150,c_scale');
      }
    };
    fd.append("upload_preset", unsignedUploadPreset);
    fd.append("tags", "browser_upload"); // Optional - add tag for image admin in Cloudinary
    fd.append("file", file);
    xhr.send(fd);
  }

  const handleFiles = function(files) {
    for (let i = 0; i < files.length; i++) {
      uploadFile(files[i]); // call the function to upload the file
    }
  };
  // #############
  //CLOUDINARY UPLOAD END
  // #############

  return writePermitted ? (
    <>
      <div className="option-card">
        <form
          onSubmit={e => {
            e.preventDefault();
            e.target.blur();
          }}
          onBlur={e => handleSubmit(e)}
        >
          <input
            type="text"
            onChange={e => handleChange(e)}
            name="pegName"
            value={pegName}
          />
        </form>
        <img src={image} className="editable-image" />
        <h4>{pegNumberStr}</h4>
        <Dropzone onDrop={acceptedFiles => handleFiles(acceptedFiles)}>
          {({ getRootProps, getInputProps }) => (
            <section>
              <div {...getRootProps()}>
                <input {...getInputProps()} />
                <p>Drag 'n' drop some files here, or click to select files</p>
              </div>
            </section>
          )}
        </Dropzone>
      </div>
    </>
  ) : (
    <>
      <div className="option-card">
        <div>{pegName}</div>
        <img src={image} className="editable-image" />
        <h4>{pegNumberStr}</h4>
      </div>
    </>
  );
};

export default OptionEditable;
