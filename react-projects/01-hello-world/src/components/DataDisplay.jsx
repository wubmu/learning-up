import React from "react";

function DisplayData() {
  // 定义数据
  const userName = "React 初学者";
  const currentDate = new Date().toLocaleDateString();
  const website = {
    name: "React 官方文档",
    url: "https://react.dev",
  };

  return (
    <div>
      {/* 直接展示变量 */}
      <p>Hello, {userName}</p>

      {/* 展示计算结果 */}
      <p> Current time: {currentDate}</p>

      {/* 展示对象属性 */}
      <p>推荐学习网站：{website.name}</p>
      <a href={website.url} target="_blank" rel="noopener noreferrer">
        {website.url}
      </a>

      {/* 展示数组 */}
      <p>学习目标：{["组件", "状态", "事件处理"].join("、")}</p>
    </div>
  );
}

export default DisplayData;
