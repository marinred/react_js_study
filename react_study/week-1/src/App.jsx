import React, { useState } from "react";

function App() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  // onChagne 확인
  console.log("id", id);
  console.log("password", password);

  // id 필드 변경될 경우
  const onIdChangeHandler = (event) => {
    setId(event.target.value);
  };
  // pw 필드 변경될 경우
  const onPwChangeHandler = (event) => {
    setPassword(event.target.value);
  };
  return (
    <div>
      <div>
        아이디:{" "}
        <input type="text" value={id} onChange={onIdChangeHandler}></input>
      </div>
      <div>
        비밀번호:{" "}
        <input
          type="password"
          value={password}
          onChange={onPwChangeHandler}
        ></input>
      </div>
      <button
        onClick={() => {
          alert(
            `고객님이 입력하신 아이디는 ${id}이며, 비밀번호는 ${password}입니다.`
          );
          // 초기화
          setId("");
          setPassword("");
        }}
      >
        로그인
      </button>
    </div>
  );
}

export default App;
