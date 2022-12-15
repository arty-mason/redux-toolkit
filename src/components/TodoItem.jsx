import React from "react";

const TodoItem = ({ id, text, completed, removeTodo, toggleTodoCompleted }) => {
  return (
    <li
      key={id}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <input
        type="checkbox"
        checked={completed}
        onChange={() => toggleTodoCompleted(id)}
      />
      <span>{text}</span>
      <button
        style={{ color: "red", margin: "5px", cursor: "pointer" }}
        on
        onClick={() => removeTodo(id)}
      >
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
