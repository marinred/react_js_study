import React from "react";

export default function App() {
  const number = 11;

  const pTagStyle = {
    color: "blue",
  };
  return (
    <div className="test-class">
      <p>리액트입니다.</p>
      {/* 주석 사용 방법 */}
      {/* 삼항 연산자 사용방법 */}
      {/* <p style="color: red"> 이렇게 하면 안됨 */}
      {/* css 선언 방법 */}
      <p
        style={{
          color: "red",
        }}
      >
        {number > 10 ? number + "은 10보다 크다" : number + "은 10보다 작다"}
      </p>
      <p style={pTagStyle}>
        {number > 10 ? number + "은 10보다 크다" : number + "은 10보다 작다"}
      </p>
    </div>
  );
}
