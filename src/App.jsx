import React, { useState } from "react";

// components
import ToDoForm from "./components/ToDoForm";
import ToDoItem from "./components/ToDoItem";

// this the parent component 
function App() {
  //state
  const [todos, setToDos] = useState([
    "Do that ",
  "Do this "]);

// Actions, the below is an arrow function 
const addTodo = (text) => {
  // the ... is take the items and put them seperately vs an array of an array 
  const newTodos = [...todos, text];
  // setting the state
  setToDos(newTodos);
};
  
  return (
  <div>
    <h1>My todo list</h1>
    {/* mapping is looping and map through the array of strings and pass that to do into each item */}
    {todos.map((todo, index) => (
      <ToDoItem key={index} todo={todo} />
      ))}
      <ToDoForm addTodo={addTodo}/>

</div>
  );
}



export default App