import React, { useState } from "react";

export default function DragAndDropList() {
  const [items, setItems] = useState([
    "🍎 Apple",
    "🍌 Banana",
    "🍊 Orange",
    "🍇 Grape",
    "🍍 Pineapple",
  ]);

  const [draggedItemIndex, setDraggedItemIndex] = useState<number | null>(null);

  const handleDragStart = (index: number) => {
    setDraggedItemIndex(index);
  };

  const handleDragOver = (event: React.DragEvent<HTMLLIElement>) => {
    event.preventDefault(); // required to allow drop
  };

  const handleDrop = (dropIndex: number) => {
    if (draggedItemIndex === null || draggedItemIndex === dropIndex) return;

    const updatedItems = [...items];
    const [draggedItem] = updatedItems.splice(draggedItemIndex, 1);
    updatedItems.splice(dropIndex, 0, draggedItem);

    setItems(updatedItems);
    setDraggedItemIndex(null);
  };

  return (
    <div style={{ padding: "1rem", maxWidth: "400px", margin: "auto" }}>
      <h2>Drag & Drop List (No Library)</h2>
      <ul style={{ padding: 0, listStyle: "none" }}>
        {items.map((item, index) => (
          <li
            key={index}
            draggable
            onDragStart={() => handleDragStart(index)}
            onDragOver={handleDragOver}
            onDrop={() => handleDrop(index)}
            style={{
              padding: "10px",
              marginBottom: "5px",
              border: "1px solid #ccc",
              borderRadius: "6px",
              backgroundColor: "#f9f9f9",
              cursor: "grab",
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
