import logo from "./logo.svg";
import "./App.css";
import { LeftSidebar } from "./components/Sidebar/Left/LeftSidebar";
import { Tasks } from "./components/Tasks";
import { RightSidebar } from "./components/Sidebar/Right/RightSidebar";
import { useEffect, useState } from "react";

const constantTasks = [
  {
    id: 0,
    text: "jeden",
    choice: "home",
    description: "taki opis1",
    complete: false,
    createdAt: new Date(),
  },
  {
    id: 1,
    text: "dwa",
    choice: "work",
    description: "taki opis2",
    complete: false,
    createdAt: new Date(),
  },
  {
    id: 2,
    text: "trzy",
    choice: "home",
    description: "taki opis3",
    complete: false,
    createdAt: new Date(),
  },
  {
    id: 3,
    text: "cztery",
    choice: "work",
    description: "taki opis4",
    complete: false,
    createdAt: new Date(),
  },
  {
    id: 4,
    text: "pięć",
    choice: "home",
    description: "taki opis5",
    complete: false,
    createdAt: new Date(),
  },
  {
    id: 5,
    text: "sześć",
    choice: "work",
    description: "taki opis6",
    complete: false,
    createdAt: new Date(),
  },
  {
    id: 6,
    text: "siedem",
    choice: "home",
    description: "taki opis7",
    complete: false,
    createdAt: new Date(),
  },
  {
    id: 7,
    text: "osiem",
    choice: "work",
    description: "taki opis8",
    complete: false,
    createdAt: new Date(),
  },
  {
    id: 8,
    text: "dziewięć",
    choice: "work",
    description: "taki opis9",
    complete: false,
    createdAt: new Date(),
  },
  {
    id: 9,
    text: "dziesięć",
    choice: "home",
    description: "taki opis10",
    complete: false,
    createdAt: new Date(),
  },
];

const taskGroupList = [
  { id: 0, icon: "fa-list-check", text: "Display all", choice: "all" },
  { id: 1, icon: "fa-house", text: "Household duties", choice: "home" },
  { id: 2, icon: "fa-computer", text: "Tasks at work", choice: "work" },
  { id: 3, icon: "fa-cart-shopping", text: "Shopping list", choice: "shop" },
];

export function App() {
  const initialTasks =
    JSON.parse(localStorage.getItem("tasks")) || constantTasks || [];
  const [taskArr, setTaskArr] = useState(initialTasks);
  const [clickedGroup, setClickedGroup] = useState(taskGroupList[0].choice);
  const [clickedTaskId, setClickedTaskId] = useState(null);
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(taskArr));
  }, [taskArr]);

  const selectedTask = taskArr.find((el) => el.id === clickedTaskId);

  const handleCheckboxClick = (taskId) => {
    const completedTasks = taskArr.map((task) => {
      if (task.id === taskId) {
        const newBooleanValue = !task.complete;
        return {
          ...task,
          complete: newBooleanValue,
          completedAt: newBooleanValue ? new Date() : null,
        };
      }
      return task;
    });
    setTaskArr(completedTasks);
  };

  const handleTextChange = (taskId, newText) => {
    const updatedText = taskArr.map((task) => {
      if (task.id === taskId) {
        return { ...task, description: newText };
      } else {
        return task;
      }
    });
    setTaskArr(updatedText);
  };

  const handleSaveChanges = () => {
    console.log("Tasks with changes:", taskArr);
  };

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
          handleCheckboxClick={handleCheckboxClick}
        />
      </main>

      {/* jakis task */}
      <RightSidebar
        task={selectedTask}
        clickedTaskId={clickedTaskId}
        setClickedTaskId={setClickedTaskId}
        taskArr={taskArr}
        handleTextChange={handleTextChange}
        handleSaveChanges={handleSaveChanges}
      />
    </div>
  );
}

export default App;
