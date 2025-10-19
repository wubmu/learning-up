import { useState } from "react";
import "./App.css";
import { Greeting, HelloWorld } from "./components";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import DisplayData from "./components/DataDisplay";
import UserCard from "./components/UserCard";
function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <div className="app">
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>

        <HelloWorld />

        {/* 数据展示 */}
        <DisplayData />

        <UserCard />

        {/* 组件传参 */}
        <Greeting name="wyb"></Greeting>

        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            计数器: {count}
          </button>
        </div>

        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </div>
    </>
  );
}

export default App;
