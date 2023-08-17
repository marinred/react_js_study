// import "./App.css";
import "App.css"; // 절대경로 설정후... root/jsconfig.json
// ./ 상대경로

// im: 안쪽 + port
// ex: 바깥쪽 + port

// 이 파일이 우리의 PlayGround!
// function은 앞에 무조건 대문자로 시작, 폴더는 camel로 진행
function App() {
  // JavaScript를 쓸 수 있는 영역
  const x = 1;
  function testFunc() {}
  // 여기까지
  return (
    // JSX(Javascript + XML - HTML)
    // {} << Javascript
    // {testFunc}
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        ></a>
      </header>
    </div>
  );
}

export default App; // 내보낸다.

// 절대경로 지정(root 경로)
