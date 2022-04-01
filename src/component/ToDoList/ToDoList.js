import React, {useState, useRef} from "react";
import "./ToDoList.css"
import Timer from "../Timer";

function ToDoList({todos, setTodos}){


    function handleDelete(index){
        let newtodos = [...todos];
        newtodos.splice(index, 1);
        setTodos(newtodos);
    }
    function handleChange(e, index){
        let newarr = [...todos];
        newarr[index].title = e.target.value;
        setTodos(newarr);
    }
    function handleEdit(index){
        document.getElementsByClassName("todo")[index].focus();
    }
    function handleDone(index){
        let a = document.getElementsByClassName("todo")[index];
        if (!todos[index].isDone){
            todos[index].isDone = true;
            a.style.textDecoration = "line-through";
            a.style.opacity = "0.5";
        }
        else{
            todos[index].isDone = false;
            a.style.textDecoration = "none";
            a.style.opacity = "1";
        }
        
    }

    const intervalRef = useRef(null);
    function handleTime(index){
        let a = document.getElementsByClassName('todo')[index];
        let b = document.getElementsByClassName('todo-list')[index];
        let newarr = [...todos];
        newarr[index].isTime = false;
        if (!newarr[index].show) {
            newarr[index].show  = true;
        }
        else {
            newarr[index].show = false;
        }
        clearInterval(intervalRef.current);
        setTodos(newarr);
        document.getElementsByClassName('todo-list')[index].style.border = '#c89666 1px solid';
        document.getElementsByClassName('todo')[index].style.color = 'white';
        document.getElementsByClassName('btn-complete')[index].style.color = '#c89666';
        document.getElementsByClassName('btn-edit')[index].style.color = '#c89666';
        document.getElementsByClassName('btn-delete')[index].style.color = '#c89666';
        document.getElementsByClassName('btn-timer')[index].style.color = '#c89666';
    }

    return (
        <div className="todo-list-wrapper">
            {
                todos.map((todo, index) => (
                    <li key={index}>
                       <div className="todo-list">
                        <input
                            onClick={(e) => e.preventDefault()}
                            className= "todo"
                            value={todo.title}
                            onChange={(e) => handleChange(e, index)}
                        ></input> 
                        <div className="btn-wrapper">
                            <button className="btn-timer" onClick={() => handleTime(index)}>
                                <i className="fa fa-clock-o"></i>
                            </button>
                            <button className="btn-complete" onClick={() => handleDone(index)}>
                                <i className="fa fa-check-circle-o"></i>
                            </button>
                            <button className="btn-edit" onClick={() => handleEdit(index)}>
                                <i className="fa fa-edit"></i>
                            </button>
                            <button className="btn-delete" onClick={()=> handleDelete(index)}>
                                <i className="fa fa-trash-o"></i>
                            </button>
                        </div>
                       </div>                      
                            {todo.show&& 
                            
                                <Timer index={index} intervalRef={intervalRef} todos={todos} setTodos={setTodos}></Timer>
                            
                            }
                    </li>
                ))
            }
        </div>
    )
}
export default ToDoList;