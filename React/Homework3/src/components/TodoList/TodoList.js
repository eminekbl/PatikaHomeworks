import React from 'react';
import TodoItem from "../TodoItem/TodoItem";
import "./TodoList.css";


function TodoList(props) {

  return (
    <div>
      <ul>
        {props.todos.map((todo, index) => {
          return (
            <li key={index}>
              <TodoItem {...todo} key={todo.id} deleteItem={props.deleteItem} checked={props.checked} check={todo.check} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default TodoList;
