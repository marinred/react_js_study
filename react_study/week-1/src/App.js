import React from "react";

// props를 통해 부모 -> 자식 데이터가 전달
function Son(props) {
  console.log("props", props.motherName); // props Object motherName: "홍부인"
  return <div>나는 {props.motherName}의 아들</div>; // 전달된 부분
}

// 부모 컴포넌트에서 자식 컴포넌트에게 정보를 전달
function Mother() {
  const name = "홍부인";
  return <Son motherName={name} />;
}

function GrandFather() {
  return <Mother />;
}

function App() {
  return <GrandFather />;
}

export default App;
