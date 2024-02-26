import { useState } from "react";
import backgroundphoto from "./backgroundphoto.jpg";

export const Tasks = ({
  taskArr,
  setTaskArr,
  clickedGroup,
  clickedTaskId,
  setClickedTaskId,
}) => {
  console.log(123, clickedGroup);
  const [text, setText] = useState("");

  let nextId = 0;

  let date = new Date();

  const [selectChoice, setSelectChoice] = useState("");
  // const [colorOfTask, setColorOfTask] = useState(true);

  // console.log(taskArr.length);
  console.log(taskArr);

  return (
    <>
      <div
        className="todosList"
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          display: "flex",
        }}
      >
        <img
          className="backgroundPicture"
          src={backgroundphoto}
          alt="burdz chalifa"
          height="100%"
          width="100%"
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            zIndex: 0,
            filter: "blur(3px)",
          }}
        />
        <div
          className="displayTodoRectangle"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            textAlign: "space-between",
            zIndex: 1,
            width: "100%",
            height: "80%",
            marginTop: 20,
            marginLeft: 25,
            marginRight: 20,
          }}
        >
          <span
            id="fontInHeading"
            style={{
              fontSize: 45,
            }}
          >
            Today's tasks
          </span>
          {date.toDateString()}
          <ul className="taskContainer">
            {taskArr
              .filter((task) => {
                if (clickedGroup === "all") {
                  return true;
                } else {
                  return task.choice === clickedGroup;
                }
              })
              .map((task, index) => (
                <li
                  className="taskItem"
                  key={task.id}
                  onClick={() => setClickedTaskId(task.id)}
                  style={{
                    backgroundColor:
                      clickedTaskId === task.id ? "darkgrey" : "white",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      width: "100%",
                      padding: "0 20px",
                    }}
                  >
                    <div className="liContainer">
                      {index + 1}. {task.text}
                      <span id="choice">{task.choice}</span>
                    </div>
                    <i
                      onClick={() => {
                        setTaskArr(taskArr.filter((t) => t.id !== task.id));
                      }}
                      className="fa-solid fa-trash-can"
                      style={{
                        color: "#424242",
                      }}
                    ></i>
                  </div>
                </li>
              ))}
          </ul>

          <div
            className="select-And-TextInput-Rectangle"
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              width: "95%",
              height: "5%",
            }}
          >
            <label
              id="label-NewTodo"
              style={{
                marginLeft: 25,
                paddingRight: 20,
              }}
            >
              {" "}
              <i className="fa-solid fa-plus fa-lg"></i>
            </label>
            <input
              className="textInput"
              type="text"
              placeholder="Your new 'todo'"
              value={text}
              onChange={(e) => setText(e.target.value)}
              style={{
                position: "absolute",
              }}
            />
            <label
              value=""
              className="label-ChooseOption"
              style={{
                position: "absolute",
                left: "74%",
                bottom: "65%",
                color: "white",
                fontSize: 15,
              }}
            >
              Choose option:
            </label>
            <select
              className="todos"
              id="todos-Select"
              value={selectChoice}
              onChange={(e) => setSelectChoice(e.target.value)}
              style={{ position: "absolute", bottom: "20%" }}
            >
              <option value="">---select---</option>
              <option value="home">Household duties</option>
              <option value="work">Tasks at work</option>
              <option value="shop">Shopping list</option>
            </select>
            <i
              className="fa-solid fa-chevron-right fa-lg"
              onClick={() => {
                setTaskArr([
                  ...taskArr,
                  { id: nextId++, text: text, choice: selectChoice },
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
      </div>
    </>
  );
};
