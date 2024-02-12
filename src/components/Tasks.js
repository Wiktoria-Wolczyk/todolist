import { useState } from "react";
import backgroundphoto from "./backgroundphoto.jpg";

export const Tasks = () => {
  const [text, setText] = useState("");

  const [taskArr, setTaskArr] = useState([]);
  let nextId = 0;

  let date = new Date();

  const [selectChoice, setSelectChoice] = useState("");

  return (
    <>
      <div
        className="TodosList"
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          display: "flex",
        }}
      >
        <img
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
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            textAlign: "space-between",
            zIndex: 1,
            width: "100%",
            height: "100%",
            marginTop: 20,
            marginLeft: 25,
            marginRight: 20,
          }}
        >
          <span
            style={{
              fontSize: 45,
            }}
          >
            Today's tasks
          </span>
          {date.toDateString()}
          <ul className="taskContainer">
            {taskArr.map((task) => (
              <li className="taskItem" key={task.id}>
                {task.text}
                <span id="choice">{task.choice}</span>
                <i
                  onClick={() => {
                    setTaskArr(taskArr.filter((t) => t.id !== task.id));
                  }}
                  className="fa-solid fa-trash-can fa-lg"
                  style={{ color: "#000000" }}
                ></i>
              </li>
            ))}
          </ul>

          <div
            style={{
              position: "absolute",
              top: "93%",
              left: "10%",
              display: "flex",
              alignItems: "center",
              width: "80%",
              height: "5%",
              backgroundColor: "white",
            }}
          >
            <label
              style={{
                marginLeft: 25,
                paddingRight: 20,
              }}
            >
              {" "}
              New todo
            </label>
            <select
              name="todos"
              id="todos-select"
              onChange={(e) => setSelectChoice(e.target.value)}
            >
              <option value="">Choose option:</option>
              <option value="home">Household duties</option>
              <option value="work">Tasks at work</option>
              <option value="shop">Shopping list</option>
            </select>
            <input
              className="textInput"
              type="text"
              placeholder="Your new 'todo'"
              value={text}
              onChange={(e) => setText(e.target.value)}
              style={{
                position: "absolute",
                left: "20%",
                fontSize: 20,
              }}
            />
            <button
              onClick={() => {
                setTaskArr([
                  ...taskArr,
                  { id: nextId++, text: text, choice: selectChoice },
                ]);
                setText("");
              }}
              style={{
                position: "absolute",
                left: "90%",
              }}
              disabled={text === "" || selectChoice === "" ? true : false}
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
