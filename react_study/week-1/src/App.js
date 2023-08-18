import React from "react";

// 자식 컴포넌트
function Child() {
  return <div>자식 컴포넌트</div>;
}

function App() {
  // 부모 컴포넌트 (2개 이상 할 때)
  return (
    <>
      <Child />
      <Child />
      <Child />
      <Child />
    </>
  );
}
// 2개 이상일 떄는  () 안에 넣기

export default App;
