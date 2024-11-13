import React, { useState } from "react";

const initialColors = [
  { id: 1, title: "Red", color: "#FF0000" },
  { id: 2, title: "Green", color: "#00FF00" },
  { id: 3, title: "Blue", color: "#0000FF" },
];

const ColorItem = ({ item, openDrawer }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [colors, setColors] = useState(initialColors);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const editItem = (item) => {
    openDrawer(item); // Open the drawer with the item’s data for editing
  };

  const duplicateItem = (item) => {
    const duplicate = {
      ...item,
      id: colors.length + 1,
      title: `${item.title} Copy`,
    };
    setColors([...colors, duplicate]); // Add duplicated item to the list
  };

  //   const deleteItem = (id) => {
  //     setColors(colors.filter((color) => color.id !== id)); // Remove item by ID
  //   };
  const deleteItem = (id) => {
    console.log("Deleting item with id:", id);
    setColors(colors.filter((color) => color.id === id)); // Remove item by ID
  };

  return (
    <li className="kzui-color-item">
      <div
        style={{ backgroundColor: item.color }}
        className="kzui-color-preview"
      />
      <span>{item.title}</span>
      <button onClick={toggleMenu} className="kzui-menu-button">
        ...
      </button>
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
