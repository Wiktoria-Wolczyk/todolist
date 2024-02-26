import logo from "./logo.svg";
import "./App.css";
import { LeftSidebar } from "./components/Sidebar/Left/LeftSidebar";
import { Tasks } from "./components/Tasks";
import { RightSidebar } from "./components/Sidebar/Right/RightSidebar";
import { useState } from "react";

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

const taskGroupList = [
  { id: 0, icon: "fa-list-check", text: "Display all", choice: "all" },
  { id: 1, icon: "fa-house", text: "Household duties", choice: "home" },
  { id: 2, icon: "fa-computer", text: "Tasks at work", choice: "work" },
  { id: 3, icon: "fa-cart-shopping", text: "Shopping list", choice: "shop" },
];

export function App() {
  const [taskArr, setTaskArr] = useState(constantTasks);
  const [clickedGroup, setClickedGroup] = useState(taskGroupList[0].choice);

  return (
    <div className="App">
      <LeftSidebar
        taskArr={taskArr}
        taskGroupList={taskGroupList}
        setTaskArr={setTaskArr}
        clickedGroup={clickedGroup}
        setClickedGroup={setClickedGroup}
      />
      <main
        style={{
          height: "100%",
          width: "60%",
        }}
      >
        <Tasks
          taskArr={taskArr}
          setTaskArr={setTaskArr}
          clickedGroup={clickedGroup}
        />
      </main>
      <RightSidebar />
    </div>
  );
}

export default App;
