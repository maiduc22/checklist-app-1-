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
    function handleDone(index){
        let a = document.getElementsByClassName("row-input")[index];
        if (!todos[index].isDone){
            todos[index].isDone = true;

            a.style.opacity = "0.25";
            message.success("You've finished a task")
        }
        else{
            todos[index].isDone = false;
            a.style.textDecoration = "none";
            a.style.opacity = "1";
        }
        console.log(todos)
    }
    // function Calculate(index) {
    //     let dateString = todos[index].deadline
    //     let deadline = new Date(dateString)
    //     let a = new Date()
    //     let today = new Date(a.toLocaleDateString())
    //     let diff_time = -today.getTime() + deadline.getTime()
    //     let diff_day = Math.ceil(diff_time / (1000 * 60 * 60 * 24))
    //     console.log(diff_day)
    // }
    
    const filter = todos.filter((todo) => {
        if (input === '') return todo
        else return todo.title.includes(input)
    })

    return (
        <div className="todo-list-wrapper">
            {
                filter.map((todo, index) => (
                    <li key={index}>
                        <Row  className='row-input' >
                            <Col span={1}><div className={`label-${todo.level}`}></div></Col>
                            <Col span={15}>
                                <div className="main-context">
                                    <div className="task-name">
                                        <input
                                            type="text"
                                            onClick={(e) => e.preventDefault()}
                                            className= "todo"
                                            value={todo.title}
                                            onChange={(e) => handleChange(e, index)}
                                        ></input>
                                    </div>
                                    <div className="task-time">
                                        <CalendarOutlined  style={{marginRight: '5px'}}/>
                                        {moment(todo.deadline).format('DD MMM, YYYY')}
                                    </div>
                                </div>                      
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

