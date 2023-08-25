import React, { useState } from "react";
import "./App.css";

const App = () => {
  // const users = [
  //   { id: 1, age: 30, name: "송중기" },
  //   { id: 2, age: 24, name: "송강" },
  //   { id: 3, age: 26, name: "김유정" },
  //   { id: 4, age: 37, name: "구교환" },
  // ];
  const [users, setUsers] = useState([
    { id: 1, age: 30, name: "송중기" },
    { id: 2, age: 24, name: "송강" },
    { id: 3, age: 26, name: "김유정" },
    { id: 4, age: 37, name: "구교환" },
  ]);

  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setAge(event.target.value);
  };

  const clickAddButtonHandler = () => {
    // 1. 새로운 형태의 { id: 1, age: 30, name: "송중기" } 를 만든다.
    // 2. 배열에 더한다.

    const addArr = {
      id: users.length + 1,
      age,
      name: name,
    };
    // 배열을 풀고 [] 풀고 const addArr을 배열로 다시 진행 (불변성을 유지하기 위하여)
    // state가 바뀌었다는 것을 인식하기 위해
    setUsers([...users, addArr]);
  };
  // onChange={nameChangeHandler(event) 이렇게하면 실행이 화면 전환시
  // map 함수를 쓸 떄 반복적으로 return 하는 부분은 key태그를 붙여줘야함
  // virtual DOM 설명 때
  return (
    <div>
      <div>
        이름:
        <input value={name} onChange={(event) => nameChangeHandler(event)} />
        {/* <input value={name} onChange={nameChangeHandler} /> 이렇게 해도 똑같음 하나만 넘겨줄꺼면 이렇게 하면 된다. */}
        {name}
        <br />
        나이:
        {/* <input
          value={age}
          onChange={function (event) {
            setAge(event.target.value);
          }}
        /> */}
        <input vlaue={age} onChange={ageChangeHandler}></input>
        {age}
        <br />
        <button onClick={clickAddButtonHandler}>추가</button>
      </div>
      <div className="app-style">
        {users.map(function (item) {
          return (
            <div key={item.id} className="component-style">
              {item.age} - {item.name}
            </div>
          );
        })}
        {/* <div className="component-style"> // 하드 코딩의 형태
        {users[0].age} - {users[0].name}
      </div>
      <div className="component-style">
        {users[1].age} - {users[1].name}
      </div>
      <div className="component-style">
        {users[2].age} - {users[2].name}
      </div>
      <div className="component-style">
        {users[3].age} - {users[3].name}
      </div> */}
      </div>
    </div>
  );
};

export default App;
