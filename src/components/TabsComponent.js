import React, { useState } from "react";
import ColorTab from "./ColorTab";

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
      <div className="tabs">
        <button
          className={`tab ${activeTab === "Color" ? "active" : ""}`}
          onClick={() => handleTabClick("Color")}
        >
          Color
        </button>
        <button className="tab" disabled>
          Tab 2
        </button>
        <button className="tab" disabled>
          Tab 3
        </button>
      </div>

      {/* Render ColorTab component if the Color tab is active */}
      {activeTab === "Color" && <ColorTab />}
    </div>
  );
};

export default TabsComponent;
