import logo from "./logo.svg";
import "./App.css";
import { LeftSidebar } from "./components/Sidebar/Left/LeftSidebar";
import { Tasks } from "./components/Tasks";
import { RightSidebar } from "./components/Sidebar/Right/RightSidebar";
import { useEffect, useState } from "react";

const constantTasks = [
  { id: 0, text: "jeden", choice: "home", description: "taki opis1" },
  { id: 1, text: "dwa", choice: "work", description: "taki opis2" },
  { id: 2, text: "trzy", choice: "home", description: "taki opis3" },
  { id: 3, text: "cztery", choice: "work", description: "taki opis4" },
  { id: 4, text: "pięć", choice: "home", description: "taki opis5" },
  { id: 5, text: "sześć", choice: "work", description: "taki opis6" },
  { id: 6, text: "siedem", choice: "home", description: "taki opis7" },
  { id: 7, text: "osiem", choice: "work", description: "taki opis8" },
  { id: 8, text: "dziewięć", choice: "work", description: "taki opis9" },
  { id: 9, text: "dziesięć", choice: "home", description: "taki opis10" },
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
  const [clickedTaskId, setClickedTaskId] = useState(null);

  const selectedTask = taskArr.find((el) => el.id === clickedTaskId);

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
          clickedTaskId={clickedTaskId}
          setClickedTaskId={setClickedTaskId}
        />
      </main>

      {/* jakis task */}
      <RightSidebar task={selectedTask} />
    </div>
  );
}

export default App;
