import React from "react";

// CSS 
import "./TodoItem.css";
// props is an object like a dictionary & is the standard 
// the below if deconstructing and we are are only grabbing what we need 
function TodoItem(props){
    const { todo, index, completeTodo, removeTodo } = props;
    return (
        // if todo is complete, else empty string in "" 
        <div className={`todo ${todo.isCompleted ? "complete" : ""}`}>
        {todo.text}
        {/* todo is being passed  */}
        <div>
        {/* adds button next to the todoItems */}
        <button onClick={() => completeTodo(index)}>Complete</button>
        {/* adds an "x" to remove item */}
        <button onClick={() => removeTodo(index)}>x</button>
        </div>
        </div>
    );
}

export default TodoItem;