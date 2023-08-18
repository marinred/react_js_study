import React from "react";

function Son() {
  return <div>자식 컴포넌트</div>;
}

function Mother() {
  return <Son />;
}

function Grand() {
  return <Mother />;
}

function App() {
  return <Grand />;
}

export default App;
