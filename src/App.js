import React from "react";
import BucketList from "./BucketList";
import "./styles.css";
import { useState } from "react";

function App() {
  const item = [
    { id: 1, quantity: "1", name: "Wash dish", onToggle: false },
    { id: 2, quantity: "2", name: "Do homework", onToggle: false },
    { id: 3, quantity: "3", name: "Make dinner", onToggle: false },
  ];

  const [items, setItems] = useState(item);

  function handleAddItem(item) {
    setItems((items) => [...items, item]);
    console.log(items);
  }
  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  return <BucketList />;
}

export default App;
