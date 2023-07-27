// 01. 상수와 변수
// 상수: const(constant: 변함없는 수)
// 변수: let

// a = 3;
// TypeError: Assignment to constant variable. at Object.<anonymous>
// b =1; 오류가 나지 않음

// javascript에서 말하는 object
// key - value가 이루어져있는 쌍

const age = 21;

const testobj = {
  name: "donggeun",
  age: age, // 이 경우 생략이 가능함 age 하나로 (생략해서 표현하는 방법)
  age,
  // key: value
  doSometing: () => {},
};

