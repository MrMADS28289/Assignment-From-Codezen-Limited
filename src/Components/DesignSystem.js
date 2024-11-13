// DesignSystem.js
import React, { useState } from "react";
import "../Styles/DesignSystem.css";

const DesignSystem = () => {
  const [colors, setColors] = useState({
    Primary: "#156BED",
    Secondary: "#ED1976",
    TitleText: "#000000",
    SupportingText: "#595959",
  });

  const handleColorChange = (e) => {
    const { name, value } = e.target;
    setColors((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="design-system">
      <h3>Design System Settings</h3>
      {Object.keys(colors).map((key) => (
        <div key={key} className="color-setting">
          <label>{key}</label>
          <input
            type="color"
            name={key}
            value={colors[key]}
            onChange={handleColorChange}
          />
        </div>
      ))}
    </div>
  );
};

export default DesignSystem;
