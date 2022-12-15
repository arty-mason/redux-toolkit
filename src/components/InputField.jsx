import React from "react";

const InputField = ({ text, handleInput, handdleSubmit }) => {
  return (
    <label>
      <input
        value={text}
        onChange={(event) => handleInput(event.target.value)}
      />
      <button onClick={handdleSubmit}>Add Todo</button>
    </label>
  );
};

export default InputField;
