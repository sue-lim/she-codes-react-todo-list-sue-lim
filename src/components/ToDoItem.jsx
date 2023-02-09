import React from "react";

// props is an object like a dictionary & is the standard 
// the below if deconstructing and we are are only grabbing what we need 
function ToDoItem(props){

    const { todo } = props;

    return <div>{todo}</div>;
    // todo is being passed 

}

export default ToDoItem;