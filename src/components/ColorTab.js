import React, { useState } from "react";
import { SortableContainer, SortableElement } from "react-sortable-hoc";
import { arrayMoveImmutable as arrayMove } from "array-move";
import ColorItem from "./ColorItem";
import Drawer from "./Drawer";
import "../Styles/ColorTab.css";

const initialColors = [
  { id: 1, title: "Primary", color: "#156BED", group: "Theme Colors" },
  { id: 2, title: "Secondary", color: "#ED1976", group: "Theme Colors" },
  { id: 3, title: "Title Text", color: "#000000", group: "Text Colors" },
  { id: 4, title: "Supporting Text", color: "#595959", group: "Text Colors" },
];

// const groups = ["Theme Colors", "Text Colors"];

const ColorTab = () => {
  const [colors, setColors] = useState(initialColors);
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);

  // Drop/drag array move func
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

  // Function to duplicate an item
  const duplicateItem = (item) => {
    const newId =
      colors.length > 0 ? Math.max(...colors.map((c) => c.id)) + 1 : 1;
    const duplicatedItem = {
      ...item,
      id: newId,
      title: `${item.title} Copy`,
    };
    setColors([...colors, duplicatedItem]);
  };

  // Function to handle adding an item
  const addItem = () => {
    const newItem = {
      id: colors.length + 1,
      title: "New Color",
      color: "#CCCCCC",
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
        duplicateItem={duplicateItem}
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

const SortableList = SortableContainer(
  ({ items, openDrawer, deleteItem, duplicateItem }) => {
    return (
      <ul className="color-container">
        {items.map((item, index) => (
          <SortableColorItem
            key={item.id}
            index={index}
            item={item}
            openDrawer={openDrawer}
            deleteItem={deleteItem}
            duplicateItem={duplicateItem}
          />
        ))}
      </ul>
    );
  }
);

const SortableColorItem = SortableElement(
  ({ item, openDrawer, deleteItem, duplicateItem }) => (
    <ColorItem
      item={item}
      openDrawer={openDrawer}
      deleteItem={deleteItem}
      duplicateItem={duplicateItem}
    />
  )
);

export default ColorTab;
