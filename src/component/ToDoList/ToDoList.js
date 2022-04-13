import React from "react";
import Level from "../Level/Level";
import "./ToDoList.css";
import {Button, message} from "antd";
import { Row, Col } from 'antd';
import 'antd/dist/antd.css';
import moment from "moment";
import {
    CheckOutlined,
    DeleteOutlined,
    CalendarOutlined,
} from '@ant-design/icons';


function ToDoList({todos, setTodos, input, setInput}){
    function handleDelete(id){
        let b = todos.find(item => item.id == id)
        console.log(b)
        let newtodos = todos.filter(item => item.id != id)
        setTodos(newtodos);
        message.warning("You deleted a task!")
    }
    function handleChange(e, index){
        let newarr = [...todos];
        newarr[index].title = e.target.value;
        if (e.target.value == '') {handleDelete(index)}
        setTodos(newarr);           
    }
    function handleDone(id){
        let a = document.getElementsByClassName(`row-input-${id}`)[0];
        let b = todos.find(item => item.id == id)
        if (!b.isDone){
            b.isDone = true;
            a.style.opacity = 0.2;
            message.success("You finished a task!")
        }
        else{
            b.isDone = false;
            a.style.opacity = 1;
        } 
        console.log(todos)
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
                        <Row id="list" className ={`row-input-${todo.id}`} >
                            <Col span={1}><div className={`label-${todo.level}`}></div></Col>
                            <Col span={10}>
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
                                    <div className="task-time">
                                        <CalendarOutlined  style={{marginRight: '5px'}}/>
                                        {moment(todo.deadline).format('DD MMM, YYYY')}
                                    </div>
                                </div>                      
                            </Col>
                            <Col span={5}></Col>
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
                    </li>
                ))
            }
        </div>
    )
}
export default ToDoList;

