// App.js
import React, { useState } from "react";
import Sidebar from "./Components/Sidebar";
import MainContent from "./Components/MainContent";
import "./App.css";

function App() {
  const [activeSection, setActiveSection] = useState("Dashboard");

  return (
    <div className="app">
      <Sidebar setActiveSection={setActiveSection} />
      <div className="main-area">
        <MainContent activeSection={activeSection} />
      </div>
    </div>
  );
}

export default App;
