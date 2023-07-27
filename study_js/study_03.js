const testValue = `

여러 줄을 변수에 넣을 수 있음
멀티라인 가능
`;

// 배열 / 객체 비구조화 (구조분해 할당) (Array/Object Destructuring) 구조를 분해해버린다.

const person = {
  name: "seoul",
  age: 25,
};

const { name, age, sdfsdf } = person;
console.log(`${name}님, ${age}살이네요!`);

console.log("name", name); // name seoul
console.log("age", age); // age 25
console.log(sdfsdf); // Undefinded
