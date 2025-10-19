import React from 'react'

function Greeting({ name = '朋友' }) {
  return (
    <div className="greeting">
      <h2>👋 你好，{name}！</h2>
      <p>欢迎体验 Vite 的快速开发环境！</p>
    </div>
  )
}

export default Greeting