import React, { useCallback } from "react";
import "./styles.css";
import { useState } from "react";
import { ChildArea } from "./ChildArea.jsx";

function App() {
  const [input, setInput] = useState("");
  const [open, setOpen] = useState(false);

  const inputText = (e) => {
    const newInput = e.target.value;
    setInput(newInput);
    console.log(newInput);
  };

  const onClickOpen = () => setOpen(!open);

  const onClickClose = useCallback(() => setOpen(false), [setOpen]);

  return (
    <div className="App">
      <h1>useCallback</h1>
      <input onChange={inputText} value={input} />
      <br />
      <button onClick={onClickOpen}>Open</button>
      <ChildArea open={open} onClickClose={onClickClose} />
    </div>
  );
}

export default App;
