import React, { useState, useRef } from "react";
import { FaTimes } from "react-icons/fa";

const Task = ({ task, onDelete, onToggle, onEdit }) => {
  const [editing, setEditing] = useState(false);
  const textRef = useRef(null);

  const handleDoubleClick = () => {
    setEditing(true);
  };

  const handleSaveClick = () => {
    onEdit(task.id, textRef.current.textContent);
    setEditing(false);
  };

  return (
    <div
      className={`task ${task.reminder ? "reminder" : ""}`}
      onDoubleClick={handleDoubleClick}
      onClick={() => onToggle(task.id)}
    >
      {editing ? (
        <div
          ref={textRef}
          contentEditable
          onInput={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              handleSaveClick();
            }
          }}
          onBlur={handleSaveClick}
          style={{ outline: "none", fontWeight: 'bold' }}
        >
          {task.text}
        </div>
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
