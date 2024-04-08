import React, { useState } from "react";
import Item from "./Item";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const BucketList = () => {
  const [items, setItems] = useState([]);
  const [text, setText] = useState("");

  const addItem = () => {
    if (text.trim() !== "") {
      const newItem = {
        id: Date.now(),
        text: text,
        completed: false,
      };
      setItems([...items, newItem]);
      setText("");
    }
  };

  const editItem = (id, newText) => {
    setItems(
      items.map((item) => (item.id === id ? { ...item, text: newText } : item))
    );
  };

  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const toggleComplete = (id) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const completionPercentage =
    items.length > 0
      ? Math.round(
          (items.filter((item) => item.completed).length / items.length) * 100
        )
      : 0;

  let progress = "start";
  if (completionPercentage >= 0 && completionPercentage < 25) {
    progress = "low";
  } else if (completionPercentage >= 25 && completionPercentage < 50) {
    progress = "medium";
  } else if (completionPercentage >= 50 && completionPercentage < 75) {
    progress = "almost";
  } else if (completionPercentage >= 75 && completionPercentage < 100) {
    progress = "high";
  } else if (completionPercentage === 100) {
    progress = "complete";
  }

  return (
    <div className="container">
      <div className="add-task">
        <div className="header-title">
          <h1>My Bucket List</h1>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              addItem();
            }}
          >
            <input
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              style={{ textAlign: "center" }}
              placeholder="Add a task!"
            />{" "}
            <button onClick={addItem}>
              <FontAwesomeIcon icon={faPlus} /> to-do
            </button>
          </form>
        </div>
        <div>
          {items.map((item) => (
            <Item
              key={item.id}
              item={item}
              onDelete={deleteItem}
              onEdit={editItem}
              onToggle={toggleComplete}
            />
          ))}
        </div>

        <footer className="percent-bar">
          <div
            className={`progress ${progress}`}
            style={{ width: `${completionPercentage}%` }}
          ></div>
          <p className="text-complete">
            Completion Percentage: {completionPercentage}%
          </p>
        </footer>
      </div>
    </div>
  );
};

export default BucketList;
