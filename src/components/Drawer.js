import React, { useState } from "react";

const Drawer = ({ item, closeDrawer }) => {
  const [title, setTitle] = useState(item ? item.title : "");
  const [color, setColor] = useState(item ? item.color : "#FFFFFF");

  const saveItem = () => {
    // Logic to save the item
    closeDrawer();
  };

  return (
    <div className="kzui-drawer">
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />
      <input
        value={color}
        onChange={(e) => setColor(e.target.value)}
        type="color"
      />
      <button onClick={saveItem}>Save</button>
      <button onClick={closeDrawer}>Cancel</button>
    </div>
  );
};

export default Drawer;
