import React from "react";
import "./ToDoList.css"
function ToDoList({list, remove, update}){
    function handleClick1(id){
        remove(id);
    }
    
    return (
        <div className="list-task">
                {
                    list.map( (item, id) => 
                        <div className="each-task"   key={id}>
                            <form onSubmit={(e) => e.preventDefault()}>
                                <input value={item} onChange={(e)=> update(e.target.value, id)}>
                                </input>
                                <input className="check-box" type="checkbox"></input>
                            </form>   
                            <button onClick={()=>handleClick1(id)}>Remove</button>
                        </div>
                        )
                }
        </div>
    )
}
export default ToDoList;