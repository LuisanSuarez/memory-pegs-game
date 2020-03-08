import React, { useRef } from "react";

const Input = ({ sendAnswer }) => {
  const refContainer = useRef(null);

  const handleSubmit = e => {
    e.preventDefault();
    sendAnswer(refContainer.current.value);
    refContainer.current.value = "";
  };

  return (
    <>
      <form onSubmit={e => handleSubmit(e)}>
        <label for="userGuess">Peg Number</label>
        <input name="userGuess" type="number" ref={refContainer} />
      </form>
    </>
  );
};

export default Input;
