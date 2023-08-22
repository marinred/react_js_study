import React from "react";

// props를 통해 부모 -> 자식 데이터가 전달
function Son(props) {
  console.log("props", props);
  return <div>나는 {props.gfName}의 손자</div>; // 전달된 부분
}

// 부모 컴포넌트에서 자식 컴포넌트에게 정보를 전달
function Mother(props) {
  const gfName = props.grandFatherName;
  const name = "홍부인";
  return <Son gfName={gfName} />;
}
// GrandFather로 부터 Son으로 중간다리 역할

function GrandFather() {
  const name = "할아버지";
  return <Mother grandFatherName={name} />;
}

function App() {
  return <GrandFather />;
}

export default App;
