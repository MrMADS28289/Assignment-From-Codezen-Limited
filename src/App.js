import TabsComponent from "./Components/TabsComponent";
import Header from "./Components/Header";
import "./App.css";
import DesignSystem from "./Components/DesignSystem";
import Sidebar from "./Components/Sidebar";
import MainContent from "./Components/MainContent";
import { useState } from "react";

function App() {
  const [activeSection, setActiveSection] = useState("AcademyLMS");

  return (
    <>
      <div class="container">
        <Sidebar setActiveSection={setActiveSection} />
        <div class="main-area">
          <MainContent activeSection={activeSection} />
        </div>
      </div>
    </>
  );
}

export default App;
