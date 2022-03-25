import React, { useState } from "react";
import "./ToDoForm.css"

function ToDoForm({handleInput}){
    const [task, setTask] = useState('');
    function handleChange(e){
        setTask(e.target.value);
    };

    function handleSubmit(e){
        e.preventDefault();
        setTask('');
        handleInput(task);
    };
    
    return (
        <>
            <h1>CheckList App</h1>
            <div className="input-task">
            
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    value={task}
                    onChange={handleChange}
                    placeholder="Add new task"
                ></input>     
            </form>
            <button onClick={handleSubmit}>Add</button>
            </div> 
        </>
             
    );
};
export default ToDoForm;