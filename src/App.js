import "./App.css";
import Sidebar from "./Components/Sidebar";
import MainContent from "./Components/MainContent";
import { useState } from "react";

function App() {
  const [activeSection, setActiveSection] = useState("AcademyLMS");

  return (
    <>
      <div className="container">
        <Sidebar setActiveSection={setActiveSection} />
        <div className="main-area">
          <MainContent activeSection={activeSection} />
        </div>
      </div>
    </>
  );
}

export default App;
