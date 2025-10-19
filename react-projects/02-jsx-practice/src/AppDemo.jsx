import { useState } from "react";
import "./App.css";
import DataDisplay from './components/DataDisplay'
function App() {
  const [currentView, setCurrentView] = useState("display");

  const views = [{
     id: "dataDisplay", name: "数据展示" }
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
        <div>{currentView === "dataDisplay" && <DataDisplay />}</div>
        {/* 学习提示 */}

      </div>
    </>
  );
}

export default App;
