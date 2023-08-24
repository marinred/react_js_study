import React, { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  // 리액트는 화면을 랜더링할지를 state의 변화에 따라 결정한다.
  // 단순 변수는 무시한다.
  let count = 0;
  return (
    <div>
      <input
        value={input}
        onChange={(event) => {
          setInput(event.target.value);
        }}
      />
      {input}
      <button
        onClick={() => {
          count++;
          console.log(`count는 ${count}입니다.`);
        }}
      ></button>
    </div>
  );
}

export default App;
