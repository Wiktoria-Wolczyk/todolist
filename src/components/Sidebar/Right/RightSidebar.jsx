import { RightSidebarCss } from "./RightSidebarCss.css";
import { useEffect, useState } from "react";

export const RightSidebar = ({
  task,
  setClickedTaskId,
  clickedTaskId,
  taskArr,
  handleTextChange,
  handleSaveChanges,
  handleInputChange,
  setInputClicked,
  inputClicked,
  selectTaskOption,
  setSelectTaskOption,
}) => {
  const [taskDescription, setTaskDescription] = useState("");

  const [taskTitle, setTaskTitle] = useState(task?.text);

  useEffect(() => {
    setTaskTitle(task?.text || "");
    setTaskDescription(task?.description || "");
  }, [task?.description, task?.text]);

  if (!task) {
    return <></>;
  }
  return (
    <div className="rightSidebar-Background" key={task.id}>
      {inputClicked ? (
        <input
          type="text"
          name="taskText"
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
        />
      ) : (
        <span onClick={() => setInputClicked(!inputClicked)}>{task.text}</span>
      )}
      <div className="display-Selected-Task">
        <label className="label-TypeOfTask">Type of task:</label>
        <select
          className="typeofTaskDiv"
          value={selectTaskOption}
          onChange={(e) => setSelectTaskOption(e.target.value)}
        >
          <option value="home">Household duties</option>
          <option value="work">Tasks at work</option>
          <option value="shop">Shopping list</option>
        </select>
        <label className="label-TextTodo">To do:</label>
        <textarea
          className="todoDiv"
          value={taskDescription}
          onChange={(e) => setTaskDescription(e.target.value)}
        />
      </div>
      <div className="buttonsPlaceholder">
        <button
          className="button-Save"
          onClick={(e) => {
            setInputClicked(false);
            handleSaveChanges(task.id, {
              text: taskTitle,
              description: taskDescription,
              choice: selectTaskOption,
            });
          }}
        >
          Save
        </button>
        <button
          className="button-Close"
          onClick={() => {
            setClickedTaskId(null);
            setInputClicked(false);
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
};
