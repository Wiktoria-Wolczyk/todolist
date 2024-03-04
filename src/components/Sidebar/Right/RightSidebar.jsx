import { RightSidebarCss } from "./RightSidebarCss.css";
import { useEffect, useState } from "react";

export const RightSidebar = ({
  task,
  setClickedTaskId,
  clickedTaskId,
  taskArr,
  handleTextChange,
  handleSaveChanges,
}) => {
  const [taskDescription, setTaskDescription] = useState("");

  useEffect(() => {
    setTaskDescription(task?.description || "");
  }, [task?.description]);

  if (!task) {
    return <></>;
  }
  return (
    <div className="rightSidebar-Background" key={task.id}>
      {task.text}
      <div className="display-Selected-Task">
        <label className="label-TypeOfTask">Type of task:</label>
        <div className="typeofTaskDiv">{task.choice}</div>
        <label className="label-TextTodo">To do:</label>
        <textarea
          className="todoDiv"
          value={task.description}
          onChange={(e) => handleTextChange(task.id, e.target.value)}
        />
      </div>
      <div className="buttonsPlaceholder">
        <button
          className="button-Save"
          onClick={
            handleSaveChanges
            // const index = taskArr.findIndex((object) => {
            //   return object.id === clickedTaskId;
            // });
            // if (index !== -1) {
            //   taskArr[index].description = taskDescription;
            // }
          }
        >
          Save
        </button>
        <button className="button-Close" onClick={() => setClickedTaskId(null)}>
          Close
        </button>
      </div>
    </div>
  );
};
