import React, { useState } from "react";
import { SortableContainer, SortableElement } from "react-sortable-hoc";
import { arrayMoveImmutable as arrayMove } from "array-move";
import ColorItem from "./ColorItem";
import Drawer from "./Drawer";
import "../Styles/ColorTab.css";

const initialColors = [
  { id: 1, title: "Primary", color: "#156BED" },
  { id: 2, title: "Secondery", color: "#ED1976" },
  { id: 3, title: "Title text", color: "#000000" },
];

const ColorTab = () => {
  const [colors, setColors] = useState(initialColors);
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);

  const onSortEnd = ({ oldIndex, newIndex }) => {
    setColors(arrayMove(colors, oldIndex, newIndex));
  };

  const openDrawer = (item = null) => {
    setCurrentItem(item);
    setDrawerOpen(true);
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
    setCurrentItem(null);
  };

  // Function to handle adding an item
  // const addItem = () => {
  //   const newItem = {
  //     id: colors.length + 1,
  //     title: "New Color",
  //     color: "#CCCCCC",
  //   };
  //   setColors([...colors, newItem]);
  //   openDrawer(newItem);
  // };
  const addItem = () => {
    const name = prompt("Enter the name of the new color:", "New Color");
    const color = prompt("Enter the color (hex code):", "#CCCCCC");

    const newItem = {
      id: colors.length + 1,
      title: name || "New Color",
      color: color || "#CCCCCC",
    };
    setColors([...colors, newItem]);
    openDrawer(newItem);
  };

  return (
    <div className="kzui-color-tab">
      <div className="color-tab-header">
        <button className="color-tab-btn">Name</button>
        <button className="color-tab-btn">Value</button>
      </div>
      <SortableList
        items={colors}
        onSortEnd={onSortEnd}
        openDrawer={openDrawer}
      />
      <button onClick={addItem} className="kzui-add-button">
        + Add Color
      </button>
      {isDrawerOpen && <Drawer item={currentItem} closeDrawer={closeDrawer} />}
    </div>
  );
};

const SortableList = SortableContainer(({ items, openDrawer }) => {
  return (
    <ul className="color-container">
      {items.map((item, index) => (
        <SortableColorItem
          key={item.id}
          index={index}
          item={item}
          openDrawer={openDrawer}
        />
      ))}
    </ul>
  );
});

const SortableColorItem = SortableElement(({ item, openDrawer }) => (
  <ColorItem item={item} openDrawer={openDrawer} />
));

export default ColorTab;
