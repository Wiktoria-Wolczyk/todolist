import { LeftSidebarCss } from "./LeftSidebarCss.css";
import { useState } from "react";

export const LeftSidebar = ({
  taskArr,
  taskGroupList,
  clickedGroup,
  setClickedGroup,
}) => {
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
              onClick={() => setClickedGroup(group.choice)}
              style={{
                backgroundColor:
                  clickedGroup === group.choice ? "grey" : "darkgrey",
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
