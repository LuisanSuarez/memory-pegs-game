import React, { useState, useEffect } from "react";
import { Service } from "../utils/DBService";

const Option = ({ pegNumber, id, sendAnswer, collection }) => {
  const placeholderImage =
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ebayimg.com%2Fimages%2Fi%2F172778278123-0-1%2Fs-l1000.jpg&f=1&nofb=1";
  const [image, setImage] = useState(placeholderImage);
  const [pegName, setPegName] = useState("peg name");
  const [showPegName, setShowPegName] = useState(false);

  let answerStr = pegNumber.toString();
  answerStr = pegNumber > 99 ? answerStr.slice(1) : answerStr;

  useEffect(() => {
    console.log("Option changing collection");
    setShowPegName(false);
    collection ? get({ peg: answerStr, collection }) : "";
  }, [id, collection]);

  const handlePointerDown = (pegNumber) => {
    sendAnswer(pegNumber);
  };

  const get = async (data) => {
    const img = await Service.get(data.peg, data.collection)
      .then((res) => {
        setImage(res.image);
        setPegName(res.pegName);
      })
      .catch((err) => {
        setPegName("peg name");
        setImage(placeholderImage);
      });
  };

  return (
    <div onPointerDown={() => handlePointerDown(pegNumber)} className="option">
      <h3 className={showPegName ? "show-answer-str" : "hide-answer-str"}>
        {pegName}
      </h3>
      {/* <p style={{ display: "none" }}>{id}</p>  //here to debug */}
      <img src={image} className="image" />
    </div>
  );
};

export default Option;
