import React, { useState } from "react";

const inputElement = () => {
  const [inputText, setInputText] = useState("");
  return (
    <div>
      <input
        onChange={e => {
          setInputText(e.target.value); //updates internal state with new value in text field
        }}
        placeholder="Enter some text"
      />
      <br />
      {inputText} // reflects value in state
    </div>
  );
};

export default inputElement;
