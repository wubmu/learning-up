import { useState } from "react";
import "./App.css";
import DataDisplay from "./components/DataDisplay";
import { ConditionalRendering } from "./components";
import ListRendering from "./components/ListRendering";
import { EventHandler } from "./components/EventHandler";
function App() {
  const [currentView, setCurrentView] = useState("display");

  const views = [
    { id: "dataDisplay", name: "数据展示" },
    { id: "conditionalRendering", name: "条件渲染" },
    { id: "listRendering", name: "列表渲染" },
    { id: "eventHandler", name: "事件处理" },
  ];
  return (
    <>
      <div>
        {/* header */}
        <h1>React 学习练习</h1>
        {/* 导航 */}
        <div>
          {views.map((view) => (
            <button key={view.id} onClick={() => setCurrentView(view.id)}>
              {view.name}
            </button>
          ))}
        </div>
        {/* 内容 */}
        <div>
          {currentView === "dataDisplay" && <DataDisplay />}
          {currentView === "conditionalRendering" && <ConditionalRendering />}
          {currentView === "listRendering" && <ListRendering />}
          {currentView === "eventHandler" && <EventHandler/>}
          
        </div>

        {/* 学习提示 */}
            <footer className="app-footer">
        <p>今天学习的概念: 
          <span className="concepts">
            {['数据展示', '条件渲染', '列表渲染', '事件响应', '数据传递'].join(' • ')}
          </span>
        </p>
      </footer>
      </div>
    </>
  );
}

export default App;
