import React, { useState } from "react";
import "../Styles/ColorTab.css";

const ColorItem = ({ item, openDrawer, deleteItem, duplicateItem }) => {
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const [menuOpen, setMenuOpen] = useState(false);
  // const [colors, setColors] = useState(initialColors);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const editItem = (item) => {
    openDrawer(item); // Open the drawer with the item’s data for editing
  };

  return (
    <li
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="kzui-color-item"
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <input
          style={{ display: isHovered ? "flex" : "none" }}
          type="checkbox"
          name="select-color-item"
          id=""
        />
        <span className="item-title">{item.title}</span>
      </div>

      <div
        style={{
          display: "flex",
          height: "30px",
          width: "130px",
          border: "1px solid #EAEAEB",
          borderRadius: "5px",
          justifyContent: "start",
          alignItems: "center",
          margin: "0px",
          padding: "0px",
          paddingLeft: "7px",
        }}
      >
        <input
          style={{
            border: "none",
            borderLeft: "none",
            borderRight: "none",
            backgroundColor: "white",
            height: "20px",
            width: "18px",
          }}
          type="color"
          title={item.title}
          value={item.color}
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
          {item.color}
        </p>
      </div>

      <div
        className="kzui-menu-button-parent"
        style={{ width: "150px", display: "flex", justifyContent: "end" }}
      >
        <button
          style={{
            display: isHovered ? "flex" : "none",
          }}
          onClick={toggleMenu}
          className="kzui-menu-button"
        >
          ...
        </button>
      </div>
      {menuOpen && (
        <div className="kzui-menu">
          <button onClick={() => editItem(item)}>Edit</button>
          <button onClick={() => duplicateItem(item)}>Duplicate</button>
          <button onClick={() => deleteItem(item.id)}>Delete</button>
        </div>
      )}
    </li>
  );
};

export default ColorItem;
