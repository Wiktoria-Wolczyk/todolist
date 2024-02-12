import logo from "./logo.svg";
import "./App.css";
import { LeftSidebar } from "./components/Sidebar/Left/LeftSidebar";
import { Tasks } from "./components/Tasks";
import { RightSidebar } from "./components/Sidebar/Right/RightSidebar";

function App() {
  return (
    <div className="App">
      <LeftSidebar />
      <main
        style={{
          height: "100%",
          width: "60%",
        }}
      >
        <Tasks />
      </main>
      <RightSidebar />
    </div>
  );
}

export default App;
