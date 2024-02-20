import { LeftSidebarCss } from "./LeftSidebarCss.css";
import { useState } from "react";

const taskGroupList = [
  { id: 0, icon: "fa-list-check", text: "Display all", choice: "all" },
  { id: 1, icon: "fa-house", text: "Household duties", choice: "home" },
  { id: 2, icon: "fa-computer", text: "Tasks at work", choice: "work" },
  { id: 3, icon: "fa-cart-shopping", text: "Shopping list", choice: "shop" },
];

export const LeftSidebar = ({ taskArr, setTaskArr }) => {
  const [isGrey, setIsGrey] = useState(true);
  const [clickedId, setClickedId] = useState(taskGroupList[0].id);

  console.log(taskArr);

  return (
    <>
      <div
        className="Todos"
        style={{
          backgroundColor: "lightgray",
          width: "20%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        Dinuś Mrowiec
        <div
          className="select-Todo-Group"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "20%",
            height: "80%",
            position: "absolute",
            backgroundColor: "lightgrey",
            top: "10%",
            paddingTop: "2%",
          }}
        >
          {taskGroupList.map((group) => (
            <div
              className="showGroup"
              onClick={() => setClickedId(group.id)}
              style={{
                backgroundColor: clickedId === group.id ? "grey" : "darkgrey",
              }}
            >
              <div>
                <i
                  className={`fa-solid ${group.icon} fa-sm`}
                  style={{ color: "grey", marginRight: 10 }}
                ></i>
                {group.text}
              </div>
              <div className="sumOfElementChoices">
                {
                  taskArr.filter((task) => {
                    if (group.choice === "all") {
                      return true;
                    } else {
                      return group.choice === task.choice;
                    }
                  }).length
                }
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

// klikajac w dany element ma rozpoznawac jaki element kliknelam i zmieniac jego kolor
// zeby wiedzialo ktory element zaznaczylam
