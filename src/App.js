import Sidebar1 from "./components/Sidebar1";
import Sidebar2 from "./components/Sidebar2";
import Sidebar3 from "./components/Sidebar3";
import Sidebar4 from "./components/Sidebar4";
import "./App.css";

function App() {
  return (
    <>
      <header>
        <div className="left">
          <h1>Filip J AB</h1>
        </div>
        <div className="right">
          <img src="../images/griever.png" alt="" />
        </div>
      </header>
      <div className="container">
        <Sidebar1 />
        <Sidebar2 />
        <Sidebar4/>
        <Sidebar3/>
      </div>
    </>
  );
}

export default App;
