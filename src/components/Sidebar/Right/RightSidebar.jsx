import { RightSidebarCss } from "./RightSidebarCss.css";

export const RightSidebar = (
  clickedTaskChoice,
  setClickedTaskChoice,
  taskArr,
  setTaskArr
) => {
  return (
    <div className="rightSidebar-Background">
      empty
      <div className="display-Selected-Task">
        <label className="label-TypeOfTask">Type of task:</label>
        <div className="typeofTaskDiv"></div>
        <label className="label-TextTodo">To do:</label>
        <div className="todoDiv">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </div>
      </div>
    </div>
  );
};
