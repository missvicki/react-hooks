import React, { useState } from "react";

const inputElement = () => {
  const [inputText, setInputText] = useState("");
  const [historyList, setHistoryList] = useState([]);
  return (
    <div>
      <input
        onChange={e => {
          setInputText(e.target.value); //updates internal state with new value in text field
          setHistoryList([...historyList, e.target.value]); //history of state changes
        }}
        placeholder="Enter some text"
      />
      <br />
      {inputText}
      {/*reflects value in state */}
      <hr />
      <br />
      <ul>
        {historyList.map(rec => {
          return <div>{rec}</div>;
        })}
      </ul>
    </div>
  );
};

export default inputElement;
