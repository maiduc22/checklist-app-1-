import React, { useState } from "react";
import "./ToDoForm.css"
//component ToDoForm nhận props handleInput là function
function ToDoForm({handleInput}){
    const [input, setInput] = useState(''); //input là text mà người dùng đang nhập vào để add 1 task mới
    function handleChange(e){
        setInput(e.target.value);  //cập nhật giá trị mới cho input khi người dùng gõ ký tự
    };

    function handleSubmit(e){
        e.preventDefault(); //khi mình add (submit) task mới vào thì nó sẽ k reload lại
        setInput(''); //sau khi add thì trả lại giá trị của input là trống.
        handleInput(input);
    };
    
    return (
        <>
            <h1>CheckList App</h1>
            <div className="input-task">
            
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    value={input}    
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