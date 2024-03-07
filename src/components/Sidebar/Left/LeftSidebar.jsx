import "./LeftSidebar.css";
import { Link, useNavigate } from "react-router-dom";

export const LeftSidebar = ({
  taskArr,
  taskGroupList,
  clickedGroup,
  setClickedGroup,
}) => {
  const navigate = useNavigate();
  const isLoggedIn = false;

  return (
    <>
      <div className="Todos">
        {isLoggedIn ? (
          <h4 className="groups-title">Dinuś Mrowiec</h4>
        ) : (
          <button
            style={{ height: "50px", margin: "20px" }}
            onClick={(e) => {
              e.preventDefault();
              navigate("/auth");
            }}
          >
            Login
          </button>
        )}

        <Link to="/hello">Hello</Link>
        <div className="select-Todo-Group">
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
                  className={` iconOfDisplayedGroup fa-solid ${group.icon} fa-sm`}
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
