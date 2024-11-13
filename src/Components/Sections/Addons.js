// Addons.js
import React, { useState } from "react";
import "../../Styles/Addons.css";

const Addons = () => {
  // Sample add-ons list with toggle states
  const [addons, setAddons] = useState([
    { id: 1, name: "Quiz Timer", enabled: false },
    { id: 2, name: "Student Analytics", enabled: true },
    { id: 3, name: "Interactive Lessons", enabled: false },
    { id: 4, name: "Certification Generator", enabled: true },
    { id: 5, name: "Chat Support", enabled: false },
  ]);

  // Toggle enable/disable state for an add-on
  const toggleAddon = (id) => {
    setAddons(
      addons.map((addon) =>
        addon.id === id ? { ...addon, enabled: !addon.enabled } : addon
      )
    );
  };

  return (
    <div className="addons-page">
      <h2>Add-ons</h2>
      <p>Manage your add-ons to enhance the LMS functionality.</p>

      <div className="addons-list">
        {addons.map((addon) => (
          <div key={addon.id} className="addon-item">
            <div className="addon-info">
              <h3>{addon.name}</h3>
              <p>Status: {addon.enabled ? "Enabled" : "Disabled"}</p>
            </div>
            <div className="addon-controls">
              <button onClick={() => toggleAddon(addon.id)}>
                {addon.enabled ? "Disable" : "Enable"}
              </button>
              <button className="config-btn">Configure</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Addons;
