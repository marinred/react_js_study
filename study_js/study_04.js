const testArr = [1, 2, 3, 4, 5];

const [one, two, three, four, five, six] = testArr;

console.log("one", one);
console.log("two", two);
console.log("three", three);
console.log("four", four);
console.log("five", five);
console.log("six", six); // Undefined

// 전개 연산자 (Spread Operator)
let [name, ...rest] = ["donggeun", 23, "seoul"];
console.log("name", name);
console.log("rest", rest); // rest [ 23, 'seoul' ]
