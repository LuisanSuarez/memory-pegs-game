import React, { useState, useEffect, useReducer, useCallback } from "react";
import axios from "axios";
import Dropzone from "react-dropzone";
import { productionUrlServer, devUrlServer } from "../globalVariables";

const OptionEditable = ({ id }) => {
  const placeholderImage =
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ebayimg.com%2Fimages%2Fi%2F172778278123-0-1%2Fs-l1000.jpg&f=1&nofb=1";
  const placeholderName = "add a name to this peg";
  //TODO: useReducer?
  const [image, setImage] = useState(placeholderImage);
  const [pegName, setPegName] = useState(placeholderName);
  let pegNumberStr = id.toString();

  pegNumberStr = id > 99 ? pegNumberStr.slice(1) : pegNumberStr;

  useEffect(() => {
    get({ peg: id });
  }, []);

  const url =
    process.env.NODE_ENV !== "production" ? devUrlServer : productionUrlServer;
  // productionUrlServer;
  id == 0 ? console.log(`${process.env.NODE_ENV} url: ${url}`) : "";

  //TODO: refactor as HOCs / 'container component pattern'
  //TODO: use a container to handle the logic
  const get = data => {
    axios
      .get(url + "getImageUrl", {
        params: data
      })
      .then(res => {
        id == 0 ? console.log(res) : " ";
        setImage(
          res.data.data[0].imageURL
            ? res.data.data[0].imageURL
            : placeholderImage
        );
        setPegName(
          res.data.data[0].pegName ? res.data.data[0].pegName : placeholderName
        );
      })
      .catch(err => {
        if (id == 0) {
          console.log("Error:", err);
        } else {
          console.log("Err");
        }
      });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const data = {
      peg: id,
      pegName: pegName
    };
    axios
      .put(url + "updateData", data)
      .then(res => {
        const pegName = JSON.parse(res.config.data).pegName;
        console.log("pegName:", pegName);
        setPegName(pegName);
      })
      .catch(err => {
        peg.console.log(err);
      });
  };

  const handleChange = e => {
    setPegName(e.target.value);
  };

  const uploadAcceptedFiles = acceptedFiles => {
    handleFiles(acceptedFiles);
  };
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
        const serverUrl =
          process.env.NODE_ENV !== "production"
            ? devUrlServer
            : productionUrlServer;
        const data = {
          peg: id,
          imageURL: url,
          pegName: pegName
        };
        axios
          .put(serverUrl + "updateData", data)
          .then(res => {
            const imageURL = JSON.parse(res.config.data).imageURL;
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

  return (
    <>
      <div className="option-card" onPointerDown={() => ""}>
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
        <img
          src={image}
          style={{
            height: "100px",
            width: "100px",
            border: "2px solid black",
            background: "lightgray"
          }}
        />
        <h4>{pegNumberStr}</h4>
        <Dropzone onDrop={acceptedFiles => uploadAcceptedFiles(acceptedFiles)}>
          {({ getRootProps, getInputProps }) => (
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
  );
};

export default OptionEditable;
