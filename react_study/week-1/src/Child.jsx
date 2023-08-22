import React from "react";

function Child({ age, name, children }) {
  console.log(age);
  console.log(name);
  console.log(children);
  return <div>Child</div>;
}

// default 설정
// Child.defaultProps = {
//   age: "기본 이름",
// };

// 이 방법 선호

// function Child(props) {
//     console.log(age);
//     console.log(name);
//     console.log(children);
//     return <div>Child</div>;
//   }
export default Child;
