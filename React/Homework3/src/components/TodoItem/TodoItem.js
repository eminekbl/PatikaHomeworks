import React from "react";
import "./TodoItem.css";

function Todo(props) {
  const { content } = props;

  // console.log(props);
  return (
    <div
      className={`todoItem align-item-center ${
        props.check ? "checked" : ""
      } w-100`}
      onClick={() => props.checked(props.id)}
    >
      {content}
      <button
        className="float-right delete-button btn btn-danger"
        onClick={(e) => {
          e.stopPropagation();
          props.deleteItem(props.id);
        }}
      >
        x
      </button>
    </div>
  );
}

export default Todo;
