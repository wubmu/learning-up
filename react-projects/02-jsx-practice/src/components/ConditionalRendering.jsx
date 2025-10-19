import React from "react";

function UserCard() {
  const user = {
    name: "张三",
    age: 25,
    isOnline: true,
    hasUnreadMessages: 3,
    role: "admin", // 可以是 'admin', 'user', 'guest'
  };

  return (
    <div className="user-card">
      <h2>用户信息卡片</h2>

      {/* 基础信息展示 */}
      <p>姓名：{user.name}</p>
      <p>年龄：{user.age}</p>

      {/* 条件渲染：三元运算符 */}
      <p>状态: {user.isOnline ? "🟢 在线" : "🔴 离线"}</p>

      {/* 条件渲染：逻辑与运算符 */}
      {user.hasUnreadMessages > 0 && (
        <div className="notification">
          你有 {user.hasUnreadMessages} 条未读消息
        </div>
      )}

      {/* 多条件渲染 */}
      <div className="user-permissions">
        {user.role === "admin" && <span>👑 管理员权限</span>}
        {user.role === "user" && <span>👤 普通用户</span>}
        {user.role === "guest" && <span>👥 访客权限</span>}
      </div>
    </div>
  );
}

export default UserCard;
