import React, { useState } from "react";
import { SortableContainer, SortableElement } from "react-sortable-hoc";
import { arrayMoveImmutable as arrayMove } from "array-move";
import ColorItem from "./ColorItem";
import Drawer from "./Drawer";
import "../Styles/ColorTab.css";

const initialColors = [
  { id: 1, title: "Primary", color: "#156BED" },
  { id: 2, title: "Secondary", color: "#ED1976" },
  { id: 3, title: "Title text", color: "#000000" },
  { id: 4, title: "Supporting Text", color: "#595959" },
];

const ColorTab = () => {
  const [colors, setColors] = useState(initialColors);
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);

  const onSortEnd = ({ oldIndex, newIndex }) => {
    setColors(arrayMove(colors, oldIndex, newIndex));
  };

  // Open drawer to edit an item
  const openDrawer = (item = null) => {
    setCurrentItem(item);
    setDrawerOpen(true);
  };

  // Close drawer
  const closeDrawer = () => {
    setDrawerOpen(false);
    setCurrentItem(null);
  };

  // Save the updated item
  const saveItem = (updatedItem) => {
    console.log(updatedItem);
    setColors(
      colors.map((color) => (color.id === updatedItem.id ? updatedItem : color))
    );
    closeDrawer(); // Close drawer after saving
  };

  // Function to handle adding a new item
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

  // Delete item by id
  const deleteItem = (id) => {
    setColors(colors.filter((color) => color.id !== id));
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
        deleteItem={deleteItem}
      />
      <button onClick={addItem} className="kzui-add-button">
        + Add Color
      </button>
      {isDrawerOpen && (
        <Drawer
          item={currentItem}
          closeDrawer={closeDrawer}
          saveItem={saveItem}
        />
      )}
    </div>
  );
};

const SortableList = SortableContainer(({ items, openDrawer, deleteItem }) => {
  return (
    <ul className="color-container">
      {items.map((item, index) => (
        <SortableColorItem
          key={item.id}
          index={index}
          item={item}
          openDrawer={openDrawer}
          deleteItem={deleteItem}
        />
      ))}
    </ul>
  );
});

const SortableColorItem = SortableElement(
  ({ item, openDrawer, deleteItem }) => (
    <ColorItem item={item} openDrawer={openDrawer} deleteItem={deleteItem} />
  )
);

export default ColorTab;
