import React, { useState } from "react";
import "../Styles/styles.css";

const TabsComponent = () => {
  // Track the active tab
  const [activeTab, setActiveTab] = useState("Color");

  // Handle tab clicks
  const handleTabClick = (tab) => {
    if (tab === "Color") {
      setActiveTab(tab);
    }
  };

  return (
    <div className="tabs-container">
      <h3 className="page-title">Settings</h3>
      <div className="tabs">
        <h5 className="tabs-title">MENU</h5>
        <button className="tab" disabled>
          General
        </button>
        <button
          className={`tab ${activeTab === "Color" ? "active" : ""}`}
          onClick={() => handleTabClick("Color")}
        >
          Design System
        </button>
        <button className="tab" disabled>
          Integration
        </button>
      </div>
    </div>
  );
};

export default TabsComponent;
