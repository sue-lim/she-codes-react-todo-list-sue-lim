//PARENT COMPONENTS 

import React, { useState } from "react";

// CSS 
import "./App.css";

// components
import TodoForm from "./components/TodoForm/TodoForm/";
import TodoItem from "./components/TodoItem/TodoItem/";

// this the parent component 
function App() {
  //state
  const [todos, setTodos] = useState([
  //turning each of these into an object.  
    {
      text: "Learn about React",
      isCompleted: false,
      },
      {
      text: "Meet friend for lunch",
      isCompleted: false,
      },
      {
      text: "Build really cool todo app",
      isCompleted: false,
      },
      ]);

// Actions, the below is an arrow function 
const addTodo = (text) => {
  // the ... makes a copy and expands it vs an array of an array 
  // adding an object
  const newTodos = [...todos, { text: text, isCompleted: false }];
  // setting the state
  setToDos(newTodos);
};

// function for marking todo items as complete 
const completeTodo = (index) => {
  //create a brand new and copy the state and pass it & update the state & rerender & it's own bit of memory vs pointing to it 
  const newTodos = [...todos];
  newTodos[index].isCompleted = true;
  setTodos(newTodos);
  };

// ability to remove todo items
const removeTodo = (index) => {
  //create a brand new and copy the state and pass it & update the state & rerender & it's own bit of memory vs pointing to it 
  const newTodos = [...todos];
  //splicing one 
  newTodos.splice(index, 1);
  setTodos(newTodos);
  };
  
  return (
  <div className="app">
  <div className="todo-list">
    <h1>My todo list</h1>
    {/* mapping is looping and map through the array of strings and pass that to do into each item */}
    {todos.map((todo, index) => (
    <TodoItem 
    todo={todo} 
    key={index} 
    index={index} 
    //passing the function from the above 
    completeTodo={completeTodo}
    removeTodo={removeTodo}
    />
      ))}
      <TodoForm addTodo={addTodo}/>
</div>
</div>
  );
}



export default App;