// 복사 (얕은 복사)

const obj_1 = {
  value1: 10,
};

const obj_2 = obj_1;
// 2번째 복사 방법
const obj_3 = JSON.parse(JSON.stringify(obj_1)); // 새로운 주소 값을 생성
obj_2.value1 += 1; // 11,11의 결과가 나온다.

// 복사한 obj_2를 바꾸면?
// obj_1도 바뀌어버린다.

console.log(obj_1); // 11
console.log(obj_2); // 11
console.log(obj_3); // 10
