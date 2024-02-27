import { RightSidebarCss } from "./RightSidebarCss.css";

export const RightSidebar = ({ task }) => {
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
        <textarea className="todoDiv">{task.description}</textarea>
      </div>
      <div className="buttonsPlaceholder">
        <button className="button-Save">Save</button>
        <button className="button-Close">Close</button>
      </div>
    </div>
  );
};
