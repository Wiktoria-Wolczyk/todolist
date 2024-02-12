import { LeftSidebarCss } from "./LeftSidebarCss.css";

export const LeftSidebar = () => {
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
          <div className="showGroup">
            <i
              class="fa-solid fa-house fa-sm"
              style={{ color: "grey", marginRight: 10 }}
            ></i>
            Household duties
          </div>
          <div className="showGroup">
            <i
              class="fa-solid fa-computer fa-sm"
              style={{ color: "grey", marginRight: 10 }}
            ></i>
            Tasks at work
          </div>
          <div className="showGroup">
            <i
              class="fa-solid fa-cart-shopping"
              style={{ color: "grey", marginRight: 10 }}
            ></i>
            Shopping list
          </div>
        </div>
      </div>
    </>
  );
};
