import React, { useState, useEffect } from "react";
import "../Styles/Drawer.css";

const Drawer = ({ item, closeDrawer, saveItem }) => {
  // Initialize title and color state with the item's existing values
  const [title, setTitle] = useState(item ? item.title : "");
  const [color, setColor] = useState(item ? item.color : "#FFFFF");

  // Sync state with new item values if `item` prop changes
  useEffect(() => {
    if (item) {
      setTitle(item.title);
      setColor(item.color);
    }
  }, [item]);

  // Handle saving the updated item
  const handleSave = () => {
    const updatedItem = { ...item, title, color };
    saveItem(updatedItem); // Pass the updated item back to the parent
  };

  return (
    <div className="kzui-drawer">
      <div style={{ borderBottom: "1px solid #EAEAEB", width: "296px" }}>
        <h3 style={{ margin: "0", padding: "20px" }}>Name</h3>
        <input
          className="kzui-drawer-name-input"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
        />
      </div>

      <div>
        <h3 style={{ margin: "0", padding: "20px" }}>Value</h3>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            margin: "20px",
          }}
        >
          <h3 style={{ margin: "0", fontSize: "14px", fontWeight: "400" }}>
            Color
          </h3>
          <div
            style={{
              display: "flex",
              height: "30px",
              width: "130px",
              border: "1px solid #EAEAEB",
              borderRadius: "5px",
              alignItems: "center",
              paddingLeft: "7px",
            }}
          >
            <input
              style={{
                border: "none",
                height: "20px",
                width: "18px",
              }}
              type="color"
              value={color}
              onChange={(e) => setColor(e.target.value)} // Update color on change
            />
            <p
              style={{
                borderLeft: "1px solid #EAEAEB",
                height: "30px",
                paddingLeft: "5px",
                fontSize: "14px",
                display: "flex",
                alignItems: "center",
              }}
            >
              {color} {/* Display selected color hex */}
            </p>
          </div>
        </div>
      </div>

      <div
        style={{
          width: "256px",
          position: "absolute",
          bottom: "0",
          padding: "20px",
          borderTop: "1px solid #EAEAEB",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <button
          style={{
            width: "100px",
            padding: "10px",
            border: "1px solid #EAEAEB",
            borderRadius: "7px",
            backgroundColor: "white",
            cursor: "pointer",
          }}
          onClick={closeDrawer}
        >
          Cancel
        </button>
        <button
          style={{
            width: "100px",
            padding: "10px",
            border: "1px solid #EAEAEB",
            borderRadius: "7px",
            backgroundColor: "black",
            color: "white",
            cursor: "pointer",
          }}
          onClick={handleSave} // Call save logic on save button click
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default Drawer;
