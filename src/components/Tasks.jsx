import "./Tasks.css";
import { useState } from "react";
import backgroundphoto from "./backgroundphoto.jpg";
import dateFormat, { masks } from "dateformat";

export const Tasks = ({
  taskArr,
  setTaskArr,
  clickedGroup,
  clickedTaskId,
  setClickedTaskId,
  handleCheckboxClick,
  addTask,
  setInputClicked,
  inputClicked,
  selectTaskOption,
  setSelectTaskOption,
  taskCompleted,
  setTaskCompleted,
}) => {
  const [text, setText] = useState("");
  const [selectChoice, setSelectChoice] = useState("");

  const formatDate = (date) => {
    const formattedDate = new Date(date)
      .toISOString()
      .replace("T", " ")
      .substring(0, 19);

    return formattedDate;
  };

  return (
    <main className="todosList">
      <img
        className="backgroundPicture"
        src={backgroundphoto}
        alt="burdz chalifa"
      />
      <div className="displayTodoRectangle">
        <div className="headingDiv">
          <span className="tasksHeader">Today's tasks</span>
          {new Date().toDateString()}
        </div>

        <div className="listContainer">
          <span className="completedSpan">Completed:</span>
          <ul className="taskContainer">
            {taskArr
              .filter((task) => {
                if (task.complete === true) {
                  if (clickedGroup === "all") {
                    return true;
                  } else {
                    return task.choice === clickedGroup;
                  }
                }
              })
              .sort((a, b) => {
                let da = new Date(a.completedAt);
                let db = new Date(b.completedAt);

                return da - db;
              })
              .map((task, index) => {
                return (
                  <li
                    className="taskItem"
                    key={task.id}
                    onClick={() => {
                      setClickedTaskId(task.id);
                      setSelectTaskOption(task.choice);
                      inputClicked && setInputClicked(!inputClicked);
                    }}
                    style={{
                      backgroundColor:
                        clickedTaskId === task.id ? "darkgrey" : "white",
                    }}
                  >
                    <input
                      className="checkboxItem"
                      type="checkbox"
                      checked={task.complete}
                      onClick={(e) => {
                        e.stopPropagation();
                      }}
                      onChange={() => handleCheckboxClick(task.id)}
                    ></input>

                    <div className="parentLiContainer">
                      <div className="liContainer">
                        <div className="IndexTextAndDateDiv">
                          <span className="index">{index + 1}.</span>
                          <div className="TextAndDateDiv">
                            <span
                              className="textSpan"
                              style={{
                                textDecoration: task.complete
                                  ? "line-through"
                                  : "none",
                              }}
                            >
                              {task.text}
                            </span>
                            <span className="dateSpan">
                              {task.complete
                                ? `Completed at: ${dateFormat(
                                    new Date(task?.completedAt),
                                    " dS, yyyy, h:MM:ss TT"
                                  )}`
                                : dateFormat(
                                    new Date(task.createdAt),
                                    " dS, yyyy, h:MM:ss TT"
                                  )}
                            </span>
                          </div>
                        </div>
                        <span className="taskChoice">{task.choice}</span>
                      </div>
                      <i
                        onClick={() => {
                          setTaskArr(taskArr.filter((t) => t.id !== task.id));
                        }}
                        className="fa-solid fa-trash-can"
                      ></i>
                    </div>
                  </li>
                );
              })}
          </ul>

          <span className="todoSpan">To do:</span>
          <ul className="taskContainer">
            {taskArr
              .filter((task) => {
                if (clickedGroup === "all") {
                  return true;
                } else {
                  return task.choice === clickedGroup;
                }
              })
              .sort((a, b) => {
                let da = new Date(a.createdAt);
                let db = new Date(b.createdAt);

                return da - db;
              })
              .map((task, index) => {
                if (task.complete === true) {
                  return <></>;
                }
                return (
                  <li
                    className="taskItem"
                    key={task.id}
                    onClick={() => {
                      setClickedTaskId(task.id);
                      setSelectTaskOption(task.choice);
                      inputClicked && setInputClicked(!inputClicked);
                    }}
                  >
                    <input
                      className="checkboxItem"
                      type="checkbox"
                      checked={task.complete}
                      onClick={(e) => {
                        e.stopPropagation();
                      }}
                      onChange={(e) => {
                        handleCheckboxClick(task.id);
                      }}
                    ></input>

                    <div className="parentLiContainer">
                      <div className="liContainer">
                        <div className="IndexTextAndDateDiv">
                          <span className="index">{index + 1}.</span>
                          <div className="TextAndDateDiv">
                            <span
                              style={{
                                textDecoration: task.complete
                                  ? "line-through"
                                  : "none",
                              }}
                            >
                              {task.text}
                            </span>
                            <span className="dateSpan">
                              {task.complete
                                ? `Completed at: ${formatDate(
                                    task?.completedAt
                                  )}`
                                : formatDate(task.createdAt)}
                            </span>
                          </div>
                        </div>
                        <span className="taskChoice">{task.choice}</span>
                      </div>
                      <i
                        onClick={() => {
                          setTaskArr(taskArr.filter((t) => t.id !== task.id));
                        }}
                        className="fa-solid fa-trash-can"
                      ></i>
                    </div>
                  </li>
                );
              })}
          </ul>
        </div>

        <div className="addToDoContainer">
          <i className="fa-solid fa-plus fa-lg plus-sign"></i>
          <input
            className="textInput"
            type="text"
            placeholder="Your new 'todo'"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />

          <div className="addTodoSelectContainer">
            <label value="" className="label-ChooseOption">
              Choose option:
            </label>
            <select
              className="addTodoSelect"
              value={selectChoice}
              onChange={(e) => setSelectChoice(e.target.value)}
            >
              <option value="">---select---</option>
              <option value="home">Household duties</option>
              <option value="work">Tasks at work</option>
              <option value="shop">Shopping list</option>
            </select>
          </div>

          <i
            className="fa-solid fa-chevron-right fa-lg"
            onClick={() => {
              setTaskArr([
                ...taskArr,
                {
                  id: taskArr[taskArr.length - 1].id + 1,
                  text: text,
                  choice: selectChoice,
                  createdAt: new Date(),
                },
              ]);
              setText("");
              setSelectChoice("");
            }}
            style={{
              pointerEvents:
                text === "" || selectChoice === "" ? "none" : "auto",
            }}
          ></i>
        </div>
      </div>
    </main>
  );
};
