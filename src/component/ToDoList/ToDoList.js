import React from "react";
import Level from "../Level/Level";
import TImeleft from "../Timeleft/TImeleft";
import "./ToDoList.css";
import {Button, message} from "antd";
import { Row, Col } from 'antd';
import 'antd/dist/antd.css';
import {
    CheckOutlined,
    DeleteOutlined,
} from '@ant-design/icons';


function ToDoList({todos, setTodos, input, setInput}){

    function handleDelete(id){
        // let b = todos.find(item => item.id == id)
        // console.log(b)
        let newtodos = todos.filter(item => item.id != id)
        setTodos(newtodos);
        message.warning("You deleted a task!")
    }
    function handleChange(e, id){
        let newarr = [...todos];
        let b = todos.find(item => item.id == id)
        b.title = e.target.value
        for (let i=0; i<todos.length; i++){
            if (todos[i].id === id){
                newarr.splice(i, 1, b)
                setTodos(newarr)
            }
        }
        if (b.title==='') handleDelete(id)
                  
    }
    function handleDone(id){
        let newarr = [...todos];
        let a = document.getElementsByClassName(`row-input-${id}`)[0];
        let b = todos.find(item => item.id == id)
        if (!b.isDone){
            b.isDone = true;
            message.success("You finished a task!")
        }
        else{
            b.isDone = false;
        } 
        for (let i=0; i<todos.length; i++){
            if (todos[i].id === id){
                newarr.splice(i, 1, b)
                setTodos(newarr)
            }
        }
        console.log(todos)
    }
    function overtime(id){
        let a = todos.filter(item => item.id === id)
        if (a.timeLeft <= 0) return true
        return false
    }

    const filter = todos.filter((todo) => {
        if (input === '') return todo
        else return todo.title.includes(input)
    })

    return (
        <div className="todo-list-wrapper">
            {
                filter.map((todo) => (
                    <li key={todo.id}>
                        <div 
                            className={`task-${todo.isDone}-${overtime(todo.id)}`} 
                        >
                            <Row id="list" className ={`row-input-${todo.id}`} >
                                <Col span={1}><div className={`label-${todo.level}`}></div></Col>
                                <Col span={15}>
                                    <div className="main-context">
                                        <div className="task-name">
                                            <input
                                                type="text"
                                                onClick={(e) => e.preventDefault()}
                                                className= "todo"
                                                value={todo.title}
                                                onChange={(e) => handleChange(e, todo.id)}
                                            ></input>
                                        </div>
                                        <TImeleft 
                                            deadline={todo.deadline} 
                                            timeLeft={todo.timeLeft}>
                                        </TImeleft>
                                    </div>                      
                                </Col>
                                
                                <Col span={4}>
                                    <Level level={todo.level}></Level>
                                </Col>
                                <Col span={4}>
                                    <button className="btn-done" onClick={() => handleDone(todo.id)}>
                                        <CheckOutlined style={{color: '#4D77FF'}}/>
                                    </button>
                                    <button className="btn-delete" onClick={()=> handleDelete(todo.id)}>
                                        <DeleteOutlined style={{color: '#FD5D5D'}} />
                                    </button>
                                </Col>
                            </Row>
                        </div>
                    </li>
                ))
            }
        </div>
    )
}
export default ToDoList;

