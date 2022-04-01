import React, { useState } from "react";
import "./ToDoForm.css"

//component ToDoForm nhận props handleInput là function
function ToDoForm({input, setInput, todos, setTodos}){
    function handleSubmit(e){
        if (!input) {
            alert('You have to enter something');
            e.preventDefault();
        }
        else {
            e.preventDefault();
            let newtodos = [...todos];
            newtodos.push({id: Math.floor(Math.random()*100000), title: input, isDone: false, show: false ,isTime: false});
            setTodos(newtodos);
            setInput('');
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                className="task-input"
                type="text"
                value={input}
                placeholder="Add a new task"
                onChange={(e) => setInput(e.target.value)}
            ></input>
            <button className="btn-add" type="submit">Add</button>
        </form>
    );
};
export default ToDoForm;