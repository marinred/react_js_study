import React from "react";
function App() {
  // <---- 자바스크립트 영역 ---->
  function onClickButtonHandler() {
    alert("클릭");
  }
  // 또는
  const onClickButtonHandler2 = () => {
    alert("클릭");
  };

  return (
    /* <---- HTML/JSX 영역  ---->*/
    <div
      style={{
        height: "100vh",
        display: " flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* 이곳에 퀴즈를 위한 html 코드를 작성해 주세요 */}
      <span>이것은 내가 만든 App Componet 입니다.</span>
      <br></br>
      <button onClick={onClickButtonHandler}>클릭!</button>
    </div>
  );
}

export default App;
