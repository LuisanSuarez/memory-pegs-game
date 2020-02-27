import React, { useState, useEffect } from "react";
// import axios from "axios";
import { SIZE, SPACING, COLOR, FONT_SIZE } from "../assets/css/globalStyles";
import { productionUrlServer, devUrlServer } from "../globalVariables";
import { Service } from "../utils/DBService";

// import placeholderImage from '../assets/img/placeholder.jpg'

const optionCSS = {
  position: "relative",
  width: SIZE.vhPercentTo225px,
  height: SIZE.vhPercentTo225px,
  borderRadius: SPACING.SM,
  background: COLOR.thirtyPCLight,
  margin: `${SPACING.SM} 0`,
  border: `5px solid ${COLOR.thirtyPC}`
  // boxShadow: `${SPACING.XS} ${SPACING.XS} ${COLOR.mainColorLighter}`
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
const Option = ({ pegNumber, id, sendAnswer, refocusKeyboardDiv }) => {
  const placeholderImage =
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ebayimg.com%2Fimages%2Fi%2F172778278123-0-1%2Fs-l1000.jpg&f=1&nofb=1";
  const [image, setImage] = useState(placeholderImage);
  const [pegName, setPegName] = useState("peg name");
  const [showPegName, setShowPegName] = useState(false);

  let answerStr = pegNumber.toString();
  answerStr = pegNumber > 99 ? answerStr.slice(1) : answerStr;

  useEffect(() => {
    setShowPegName(false);
    get({ peg: answerStr });
  }, [id]);

  const url =
    process.env.NODE_ENV !== "production" ? devUrlServer : productionUrlServer;
  // console.log(`${process.env.NODE_ENV}: ${url}`);

  const handlePointerDown = pegNumber => {
    sendAnswer(pegNumber);
    refocusKeyboardDiv();
  };

  const get = async data => {
    const img = await Service.get(data.peg)
      .then(res => res.image)
      .catch(err => placeholderImage);
    setImage(img);
  };
  return (
    <div
      onPointerDown={() => handlePointerDown(pegNumber)}
      onKeyDown={e => console.log(e.key)}
      style={optionCSS}
    >
      <h3 style={showPegName ? showAnswerStrCSS : hideAnswerStrCSS}>
        {pegName}
      </h3>
      <p style={{ display: "none" }}>{id}</p>
      <img onKeyDown={e => console.log(e.key)} src={image} style={imageCSS} />
    </div>
  );
};

export default Option;
