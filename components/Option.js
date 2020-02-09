import React, { useState, useEffect } from "react";
import axios from "axios";
import { SIZE, SPACING, COLOR, FONT_SIZE } from "../assets/css/globalStyles";
import { productionUrlServer, devUrlServer } from "../globalVariables";

// import placeholderImage from '../assets/img/placeholder.jpg'

const optionCSS = {
  position: "relative",
  width: SIZE.cardWidth,
  height: SIZE.cardHeight,
  borderRadius: SPACING.SM,
  background: COLOR.mainColorLightest,
  margin: `${SPACING.SM} 0`,
  boxShadow: `${SPACING.XS} ${SPACING.XS} ${COLOR.mainColorLighter}`
};

const imageCSS = {
  height: "100%",
  width: "100%",
  borderRadius: SPACING.SM
};

const showAnswerStrCSS = {
  zIndex: 10,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "absolute",
  bottom: 0,
  top: 0,
  left: 0,
  right: 0,
  margin: "auto",
  fontSize: FONT_SIZE.H3,
  background: "rgba(255, 255, 255, 0.75)",
  borderRadius: SPACING.SM,
  height: "95%"
  //we can set height and width props to create a box, instead
  //of covering the whole image with a white filter
};

const hideAnswerStrCSS = {
  display: "none"
};

//TODO: destructure here
const Option = ({ answer, id, sendAnswer }) => {
  const placeholderImage =
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ebayimg.com%2Fimages%2Fi%2F172778278123-0-1%2Fs-l1000.jpg&f=1&nofb=1";
  const [image, setImage] = useState(placeholderImage);
  const [pegName, setPegName] = useState("peg name");
  const [showPegName, setShowPegName] = useState(false);

  let answerStr = answer.toString();
  answerStr = answer > 99 ? answerStr.slice(1) : answerStr;

  useEffect(() => {
    console.log("USING EFFECT FOR ID:", id);
    setShowPegName(false);
    get({ peg: answer });
  }, [id]);
  const url =
    process.env.NODE_ENV !== "production" ? devUrlServer : productionUrlServer;
  const get = data => {
    axios
      .get(url + "getImageUrl", {
        params: data
      })
      .then(res => {
        console.log("running:", res);
        const receivedData = res.data.data[0];
        if (receivedData) {
          setImage(res.data.data[0].imageURL);
          setPegName(res.data.data[0].pegaName);
          console.log("receoved:", res.data);
        } else {
          setPegName("peg name");
          setImage(placeholderImage);
          setShowPegName(true);
          console.log("not received:", res.data);
        }
      })
      .catch(err => {
        setShowPegName(true);
        console.log("Error:", err);
      });
  };
  return (
    <div onPointerDown={() => sendAnswer(answer)} style={optionCSS}>
      <h3 style={showPegName ? showAnswerStrCSS : hideAnswerStrCSS}>
        {pegName}
      </h3>
      <p style={{ display: "none" }}>{id}</p>
      <img src={image} style={imageCSS} />
    </div>
  );
};

export default Option;
