import React from "react";

function ToDoList() {
  // 待办事项

  const todos = [
    { id: 1, text: "数据展示(Data Display)", completed: false },
    { id: 2, text: "条件渲染(Conditional R)", completed: false },
    { id: 3, text: "列表渲染", completed: false },
    { id: 4, text: "事件响应", completed: false },
  ];

  // 学习资源数据
  const learningResources = [
    { name: "React 官方文档", type: "文档", difficulty: "初级" },
    { name: "React 教程", type: "视频", difficulty: "初级" },
    { name: "React 实战项目", type: "项目", difficulty: "中级" },
  ];
  return (
    <div className="todo-list">
      <h2>📝 我的学习计划</h2>
      {/* 基础列表渲染 */}
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className={todo.completed ? "completed" : ""}>
            {todo.completed ? "✅" : "⭕"} {todo.text}
          </li>
        ))}
      </ul>

      <h3>📚 学习资源</h3>

    <div className="resoure-list"></div>
      {learningResources.map((resource,index) => (
        <div className="resoure-card" key={index}>
            <h4>{resource.name}</h4>
            <p>学习类型：{resource.type}</p>
            <p>学习难度：{resource.difficulty}</p>
        </div>
      ))}
    </div>
  );
}

export default ToDoList;
