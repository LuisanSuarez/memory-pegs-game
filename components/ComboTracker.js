import React, { useState, useEffect } from "react";
import * as Icon from "react-feather";

const ComboTracker = ({ combo }) => {
  const [maxScore, setMaxScore] = useState(0);
  useEffect(() => {
    setMaxScore(Math.max(combo, maxScore));
  }, [combo]);
  return (
    <>
      <h1 style={{ marginTop: "80px" }}>A React ComboTracker</h1>
      <h3>Top Score: {maxScore}</h3>
      <div className="combo-bar">
        {[...Array(combo)].map((i, v) => (
          <Icon.Star />
        ))}
      </div>
    </>
  );
};

export default ComboTracker;
