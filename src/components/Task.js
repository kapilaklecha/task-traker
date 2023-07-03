import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";

const Task = ({ task, onDelete, onToggle, onEdit }) => {
  const [editing, setEditing] = useState(false);
  const [text, setText] = useState(task.text);

  const handleDoubleClick = () => {
    setEditing(true);
  };

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  const handleSaveClick = () => {
    onEdit(task.id, text);
    setEditing(false);
  };

  return (
    <div
      className={`task ${task.reminder ? "reminder" : ""}`}
      onDoubleClick={handleDoubleClick}
      onClick={() => onToggle(task.id)}
    >
      {editing ? (
        <input
          type="text"
          value={text}
          onChange={handleInputChange}
          onBlur={handleSaveClick}
          autoFocus
        />
      ) : (
        <>
          <h3>
            {task.text}{" "}
            <FaTimes
              style={{ color: "red", cursor: "pointer" }}
              onClick={(e) => {
                e.stopPropagation();
                onDelete(task.id);
              }}
            />
          </h3>
          <p>{task.day}</p>
        </>
      )}
    </div>
  );
};

export default Task;
