import React from "react";
import "./ToDoList.css"

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
        console.log(todos[index])
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
    return (
        <div>
            {
                todos.map((todo, index) => (
                    <li className="todo-list" key={index}>
                       <input 
                            onClick={(e) => e.preventDefault()}
                            className= "todo"
                            value={todo.title}
                            onChange={(e) => handleChange(e, index)}
                       ></input> 
                       <div>
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
                    </li>
                ))
            }
        </div>
    )
}
export default ToDoList;