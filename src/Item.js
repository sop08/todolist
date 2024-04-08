import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faRotateLeft,
  faCheck,
  faEdit,
  faSave,
} from "@fortawesome/free-solid-svg-icons";

const Item = ({ item, onDelete, onToggle, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(item.text);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    onEdit(item.id, editedText);
    setIsEditing(false);
  };

  return (
    <div className={`bucket-item ${item.completed ? "completed" : ""}`}>
      {isEditing ? (
        <input
          type="text"
          value={editedText}
          onChange={(e) => setEditedText(e.target.value)}
        />
      ) : (
        <span>{item.text}</span>
      )}
      <div>
        <button onClick={() => onDelete(item.id)} style={{ width: "30px" }}>
          <FontAwesomeIcon icon={faTrash} />
        </button>
        <button onClick={() => onToggle(item.id)} style={{ width: "100px" }}>
          {item.completed ? "Undo " : "Complete "}
          {item.completed ? (
            <FontAwesomeIcon icon={faRotateLeft} />
          ) : (
            <FontAwesomeIcon icon={faCheck} />
          )}
        </button>
        {isEditing ? (
          <button onClick={handleSave} style={{ width: "30px" }}>
            <FontAwesomeIcon icon={faSave} />
          </button>
        ) : (
          <button onClick={handleEdit} style={{ width: "30px" }}>
            <FontAwesomeIcon icon={faEdit} />
          </button>
        )}
      </div>
    </div>
  );
};

export default Item;
