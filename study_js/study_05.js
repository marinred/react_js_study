// 클래스

class Person {
  // 필수요소 ()
  constructor(name, age) {
    this.name = name;
    this.age = age; // 웹으로부터 받아온 name, age (우측)
  }

  // method 형태의 동사
  sayHello() {
    console.log(this.name + " 님 안녕하세요.");
    console.log(`${this.name} 님 안녕하세요?`);
  }
  sayAge() {
    console.log(`${this.name}님의 나이는 ${this.age}살 입니다.`);
  }
}

// 인스턴스
// 이름은 성명이고, 나이는 30인 사람을 만든다.
const person_1 = new Person("성명", "30");
const person_2 = new Person("오사삼", "22");

person_1.sayHello(); // 성명님 안녕하세요.
person_2.sayHello(); // 오사삼님 안녕하세요.

person_1.sayAge(); // 성명님의 나이는 30살입니다.
