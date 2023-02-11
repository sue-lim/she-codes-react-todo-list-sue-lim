import React, { useState } from "react";

// props is an object like a dictionary & is the standard 
// the below if deconstructing and we are are only grabbing what we need 
function TodoForm(props){
    // props 
    const {addTodo} = props;
    //state for the to do form 
    const [todo, setTodo] = useState("");

    //action 
    const handleSubmit = (event) => {
        //don't refresh the page 
        event.preventDefault();
        // if to do then this is a thruthy value and needs to be a full string and pass it into the function 
        if (!value) {
            return;}
            addTodo(todo)
            setTodo("");
        
    };

    return(
        //each time you hit submit it saves 
        <form onSubmit={handleSubmit}>
            <input 
            type="text" 
            placeholder="Add todo here..." 
            value={todo} 
            //everytime the user puts in an input and save it 
            onChange={(event) => setTodo(event.target.value)} />
        </form>
    );
}

export default TodoForm;