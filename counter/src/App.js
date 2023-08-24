import "./App.css";
import { useState } from "react";

function App() {
  // + 누를 떄 렌더링 => state를 바꿈
  const [count, setCount] = useState(0);
  const plusButtonClickHandler = () => {
    const newPlusCount = count + 1;
    setCount(newPlusCount);
  };
  // 이 상태에서 <button onClick={plusButtonClickHandler()}>+</button> 하면 함수 실행되는 상태
  // 호출하자마자 함수 실행됨
  // 호출하는 것이 아니면 괄호 빼야함
  function plusCount() {}
  return (
    <div>
      <div>{count}</div>
      <div>
        <button
          onClick={() => {
            const newCount = count - 1;
            setCount(newCount);
          }}
        >
          -
        </button>
        <button onClick={plusButtonClickHandler}>+</button>
      </div>
    </div>
  );
}

export default App;
