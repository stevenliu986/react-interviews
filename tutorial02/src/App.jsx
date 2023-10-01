import { useState, createContext } from "react";
import Dot from "./Dot";
import { Button } from "./Button";
import "./App.css";

// 创建一个context的实例
export const MyContext = createContext();

function App() {
  const [dots, setDots] = useState([]);
  const [cache, setCache] = useState([]);

  // context api用
  const user = {
    userName: "John",
    age: 33,
  };

  const addDot = (e) => {
    const { clientX, clientY } = e;
    console.log(e);
    setDots([...dots, { x: clientX, y: clientY }]);
  };

  const undo = () => {
    if (dots.length > 0) {
      const popElement = dots.pop();
      setCache([...cache, popElement]);
      setDots([...dots]);
    }
  };

  const redo = () => {
    if (cache.length > 0) {
      const cachedElement = cache.pop();
      setDots([...dots, cachedElement]);
    }
  };

  return (
    <MyContext.Provider value={{ user }}>
      <div className="App" onClick={addDot}>
        {dots.map((dot, index) => {
          return <Dot x={dot.x} y={dot.y} key={index} />;
        })}
      </div>
      <div className="btn">
        <button onClick={undo} className="undo">
          undo
        </button>
        <button onClick={redo} className="redo">
          redo
        </button>
      </div>

      {/* Button组件用来测试context api */}
      <Button />
    </MyContext.Provider>
  );
}

export default App;
