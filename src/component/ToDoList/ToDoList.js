import React from "react";
import Level from "../Level/Level";
import "./ToDoList.css";
import {message} from "antd";
import { Row, Col, Divider } from 'antd';
import 'antd/dist/antd.css';
import {
    CheckOutlined,
    DeleteOutlined
} from '@ant-design/icons';

function ToDoList({todos, setTodos, search}){


    function handleDelete(index){
        let newtodos = [...todos];
        newtodos.splice(index, 1);
        setTodos(newtodos);
        message.warning("You deleted a task!")
    }
    function handleChange(e, index){
        let newarr = [...todos];
        newarr[index].title = e.target.value;
        if (e.target.value == '') {handleDelete(index)}
        setTodos(newarr);           
    }
    function handleEdit(index){
        document.getElementsByClassName("todo")[index].focus();
        message.success("You've updated a task")
    }
    function handleDone(index){
        let a = document.getElementsByClassName("todo")[index];
        if (!todos[index].isDone){
            todos[index].isDone = true;
            a.style.textDecoration = "line-through";
            a.style.opacity = "0.5";
            message.success("You've finished a task")
        }
        else{
            todos[index].isDone = false;
            a.style.textDecoration = "none";
            a.style.opacity = "1";
        }
        console.log(todos)
    }

    return (
        <div className="todo-list-wrapper">
            {
                todos.map((todo, index) => (
                    <li key={index}>
                        <Row  className='row-input' >
                            <Col span={1}><div className={`label-${todo.level}`}></div></Col>
                            <Col span={5}>{todo.deadline}</Col>
                            <Col span={10}>
                                <input
                                    onClick={(e) => e.preventDefault()}
                                    className= "todo"
                                    value={todo.title}
                                    onChange={(e) => handleChange(e, index)}
                                ></input>
                            </Col>
                            <Col span={4}>
                                <Level level={todo.level}></Level>
                            </Col>
                            <Col span={4}>
                                <button className="btn-done" onClick={() => handleDone(index)}>
                                    <CheckOutlined style={{color: '#4D77FF'}}/>
                                </button>
                                <button className="btn-delete" onClick={()=> handleDelete(index)}>
                                    <DeleteOutlined style={{color: '#FD5D5D'}} />
                                </button>
                            </Col>
                        </Row>
                    </li>
                ))
            }
        </div>
    )
}
export default ToDoList;