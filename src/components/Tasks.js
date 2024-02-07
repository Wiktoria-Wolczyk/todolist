import { useState } from "react";
import backgroundphoto from "./backgroundphoto.jpg";

export const Tasks = () => {
  const [text, setText] = useState("");

  const [taskArr, setTaskArr] = useState(["test"]);

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
            textAlign: "left",
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
          <ul className="taskContainer">
            {taskArr.map((task) => (
              <li className="taskItem">{task}</li>
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
                marginLeft: 35,
              }}
            >
              {" "}
              New todo
            </label>
            <input
              className="textInput"
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              style={{
                position: "absolute",
                left: "20%",
                fontSize: 20,
              }}
            />
            <button
              style={{
                position: "absolute",
                left: "85%",
              }}
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
