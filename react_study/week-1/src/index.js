// 불변성: 메모리에 있는 값을 변경할 수 없는 것

let number = 1;
// 메모리에 1이라는 데이터가 들어감 number= 1
let secondNumber = 1;

number = 2;
// secondNumber = 1 변수 생성 (메모리에 있는 값을 1을 바라본다.)
// 근데 이미 number에 1을 가지고 있음 별도의 1이라는 값을 넣는 것이 아니고
// number에 들어있는 1을 가져온다. (같은 값을 바라보고 있음)

// 원시데이터: 숫자, 문자, 불린...
console.log(number === secondNumber); // true
// number = 2로 변경하니 false

// 원시데이터가 아닌 것들: 배열, 객체, 함수
let obj1 = {
  name: "kim", // 한 공간에 kim 이라는 별도의 공간을 만들고 주소값 생성
  // obj1이 해당 주소값을 바라본다.
};
obj1.name = "park"; // 객체는 불변성이 없다.
// 기존에 저장되어있었던 공간을 park으로 변경한 것

// obj1과 같은 방식이지만, 재사용이 아닌 별도의 공간에 저장
let obj2 = {
  name: "kim",
};

// console.log(obj1 === obj2); // false

// 데이터를 수정하는 경우
