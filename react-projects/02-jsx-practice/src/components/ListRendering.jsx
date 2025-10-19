import React from "react";

function ListRendering() {
  // 待办事项

  const todos = [
    { id: 1, text: "数据展示", completed: true },
    { id: 2, text: "条件渲染", completed: true },
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
      {/* 复杂列表渲染 */}
      <div className="resource-list">
        {learningResources.map((resource, index) => (
          <div key={index} className="resource-card">
            <h4>{resource.name}</h4>
            <p>类型：{resource.type}</p>
            <p>难度：{resource.difficulty}</p>
            <button>开始学习</button>
          </div>
        ))}
      </div>

      {/* 条件性列表渲染 */}
      <h3>🎯 待完成的任务</h3>
      {todos.filter((todo) => !todo.completed).length > 0 ? (
        <ul>
          {todos
            .filter((todo) => !todo.completed)
            .map((todo) => (
              <li key={todo.id}>{todo.text}</li>
            ))}
        </ul>
      ) : (
        <p>🎉 所有任务都已完成！</p>
      )}
    </div>
  );
}

export default ListRendering;
