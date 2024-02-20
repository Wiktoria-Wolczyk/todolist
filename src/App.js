import logo from "./logo.svg";
import "./App.css";
import { LeftSidebar } from "./components/Sidebar/Left/LeftSidebar";
import { Tasks } from "./components/Tasks";
import { RightSidebar } from "./components/Sidebar/Right/RightSidebar";
import { useState } from "react";

export function App() {
  const constantTasks = [
    { id: 0, text: "jeden", choice: "home" },
    { id: 1, text: "dwa", choice: "work" },
    { id: 2, text: "trzy", choice: "home" },
    { id: 3, text: "cztery", choice: "work" },
    { id: 4, text: "pięć", choice: "home" },
    { id: 5, text: "sześć", choice: "work" },
    { id: 6, text: "siedem", choice: "home" },
    { id: 7, text: "osiem", choice: "work" },
    { id: 8, text: "dziewięć", choice: "work" },
    { id: 9, text: "dziesięć", choice: "home" },
  ];

  const [taskArr, setTaskArr] = useState(constantTasks);

  return (
    <div className="App">
      <LeftSidebar taskArr={taskArr} setTaskArr={setTaskArr} />
      <main
        style={{
          height: "100%",
          width: "60%",
        }}
      >
        <Tasks taskArr={taskArr} setTaskArr={setTaskArr} />
      </main>
      <RightSidebar />
    </div>
  );
}

export default App;
