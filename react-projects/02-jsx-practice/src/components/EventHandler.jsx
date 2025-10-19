import React from "react";
import { useState } from "react";

function EventHandler() {
  const [inputValue, setInputValue] = useState("");

  // 鼠标悬浮事件
  const [isHovered, setIsHovered] = useState(false);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    // 阻止表单的默认提交行为
    event.preventDefault();
    alert(`你输入了: ${inputValue}`);
    setInputValue("");
  };
  return (
    <div>
      <h2>🎯 事件响应</h2>
      {/* 点击事件示例 */}

      <h3>点击事件</h3>
      <MyButtonA />
      <MyButtonB />

      {/* 输入事件 */}
      <div>
        <h3>输入事件</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="输入一些内容..."
            value={inputValue}
            onChange={handleInputChange}
          />
          <button type="submit">提交</button>
        </form>
        <p>实时显示: {inputValue || "(空)"}</p>
      </div>

      <div
        style={{backgroundColor: isHovered ? 'lightblue' : 'lightgray'}}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <h3>鼠标事件</h3>
        {isHovered ? "鼠标在我上面！" : "鼠标移过来试试"}
      </div>
      {/* 悬浮事件 */}
    </div>
  );
}

function MyButtonA() {
  function handlerClick() {
    alert("You clicked me!");
  }
  return <button onClick={handlerClick}> click me</button>;
}

function MyButtonB() {
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount((count) => count + 1)}>
      count is {count}
    </button>
  );
}

// 统一导出
export { MyButtonA, MyButtonB, EventHandler };
