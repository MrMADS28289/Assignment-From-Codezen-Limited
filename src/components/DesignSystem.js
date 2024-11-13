import React from "react";
import "../Styles/DesignSystem.css";
import ColorTab from "./ColorTab";

export default function DesignSystem() {
  return (
    <div className="design-system-container">
      <h3 className="design-system-title">Design System</h3>
      <div className="design-system-header">
        <div>
          <button className="design-system-btn-selected">Color</button>
          <button className="design-system-btn">Typography</button>
          <button className="design-system-btn">Shadow</button>
        </div>
        <input
          className="design-system-search-input"
          placeholder="Search..."
          type="text"
        />
      </div>
      <ColorTab />
    </div>
  );
}
