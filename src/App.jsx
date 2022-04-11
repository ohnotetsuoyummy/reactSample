import React, { useState } from "react";
import ColorFulMessage from "./components/ColorFulMessage";

const App = () => {
  const [num, setNum] = useState(0);
  const [faceShowFlag, setShowFlag] = useState(true);

  const onClickCountUp = () => {
    setNum(num + 1);
  };

  const onClickSwitchShowFlag = () => {
    setShowFlag(!faceShowFlag);
  };

  if (num % 3 === 0) {
    faceShowFlag || setShowFlag(true);
  } else {
    faceShowFlag && setShowFlag(false);
  }

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは</h1>
      <ColorFulMessage color="blue" message="お元気ですか？" />
      <ColorFulMessage color="pink" message="元気です" />
      <button onClick={onClickCountUp}>カウントアップ</button>
      <br />
      <button onClick={onClickSwitchShowFlag}>on/off</button>
      <p>{num}</p>
      {faceShowFlag && <p>😆</p>}
    </>
  );
};

export default App;
