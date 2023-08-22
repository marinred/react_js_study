import { useState } from "react";
import "./App.css";

function App() {
  const [fruit, setFruit] = useState("");

  return (
    <div>
      과일:{" "}
      <input
        value={fruit}
        onChange={function (event) {
          // console.log("event", event.target.value);
          setFruit(event.target.value); // 타이핑하는 것들이 value로 들어온다.
        }}
      />
      <br />
      <br />
      {fruit}
    </div>
  );
}

export default App;
