import React, { useState } from "react";
import { SortableContainer, SortableElement } from "react-sortable-hoc";
import { arrayMoveImmutable as arrayMove } from "array-move";
import ColorItem from "./ColorItem";
import Drawer from "./Drawer";
import "../Styles/ColorTab.css";

const initialColors = [
  { id: 1, title: "Red", color: "#FF0000" },
  { id: 2, title: "Green", color: "#00FF00" },
  { id: 3, title: "Blue", color: "#0000FF" },
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
  const addItem = () => {
    const newItem = {
      id: colors.length + 1,
      title: "New Color",
      color: "#CCCCCC",
    };
    setColors([...colors, newItem]);
    openDrawer(newItem);
  };

  return (
    <div className="kzui-color-tab">
      <div className="kzui-tabs">
        <button className="kzui-tab kzui-tab-active">Color</button>
        <button className="kzui-tab" disabled>
          Other Tabs
        </button>
      </div>
      <SortableList
        items={colors}
        onSortEnd={onSortEnd}
        openDrawer={openDrawer}
      />
      <button onClick={addItem} className="kzui-add-button">
        Add
      </button>
      {isDrawerOpen && <Drawer item={currentItem} closeDrawer={closeDrawer} />}
    </div>
  );
};

const SortableList = SortableContainer(({ items, openDrawer }) => {
  return (
    <ul>
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

// import React, { useState } from "react";
// import { SortableContainer, SortableElement } from "react-sortable-hoc";
// import { arrayMoveImmutable as arrayMove } from "array-move";

// // Sortable item component
// const SortableItem = SortableElement(
//   ({ color, onEdit, onDuplicate, onDelete }) => (
//     <li
//       style={{
//         backgroundColor: color.color,
//         padding: "10px",
//         margin: "5px 0",
//         position: "relative",
//       }}
//     >
//       {color.title}

//       {/* Three-dot menu */}
//       <div className="menu">
//         <button onClick={() => onEdit(color.id)}>Edit</button>
//         <button onClick={() => onDuplicate(color)}>Duplicate</button>
//         <button onClick={() => onDelete(color.id)}>Delete</button>
//       </div>
//     </li>
//   )
// );

// // Sortable list container
// const SortableList = SortableContainer(({ items }) => {
//   return (
//     <ul className="color-list">
//       {items.map((color, index) => (
//         <SortableItem key={`item-${color.id}`} index={index} color={color} />
//       ))}
//     </ul>
//   );
// });

// const ColorTab = () => {
//   const [colors, setColors] = useState([
//     { id: 1, title: "Red", color: "#FF0000" },
//     { id: 2, title: "Green", color: "#00FF00" },
//     { id: 3, title: "Blue", color: "#0000FF" },
//   ]);

//   const onSortEnd = ({ oldIndex, newIndex }) => {
//     setColors(arrayMove(colors, oldIndex, newIndex));
//   };

//   const addColor = () => {
//     const newColor = {
//       id: colors.length + 1,
//       title: `New Color ${colors.length + 1}`,
//       color: "#cccccc",
//     };
//     setColors([...colors, newColor]);
//   };

//   // Edit color item
//   const editColor = (id) => {
//     const updatedColors = colors.map((color) =>
//       color.id === id ? { ...color, title: "Edited Color" } : color
//     );
//     setColors(updatedColors);
//   };

//   // Duplicate color item
//   const duplicateColor = (color) => {
//     const duplicatedColor = {
//       ...color,
//       id: colors.length + 1,
//       title: `${color.title} Copy`,
//     };
//     setColors([...colors, duplicatedColor]);
//   };

//   // Delete color item
//   const deleteColor = (id) => {
//     setColors(colors.filter((color) => color.id !== id));
//   };

//   return (
//     <div className="color-tab">
//       <SortableList
//         items={colors}
//         onSortEnd={onSortEnd}
//         onEdit={editColor}
//         onDuplicate={duplicateColor}
//         onDelete={deleteColor}
//       />
//       <button onClick={addColor} className="add-button">
//         Add Color
//       </button>
//     </div>
//   );
// };

// export default ColorTab;
