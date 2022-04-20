import React from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import Level from "../Level/Level";
import TImeleft from "../Timeleft/TImeleft";
import "./ToDoList.css";
import {message} from "antd";
import { Row, Col } from 'antd';
import 'antd/dist/antd.css';
import {
    CheckOutlined,
    DeleteOutlined,
} from '@ant-design/icons';
import EditModal from "../EditModal/EditModal";

import { useDispatch, useSelector } from "react-redux";


function ToDoList({search}){

    // function handleDelete(id){
    //     // let b = todos.find(item => item.id == id)
    //     // console.log(b)
    //     let newtodos = todos.filter(item => item.id !== id)
    //     setTodos(newtodos);
    //     message.warning("You deleted a task!")
    // }
    // function handleChange(e, id){
    //     let newarr = [...todos];
    //     let b = todos.find(item => item.id === id)
    //     b.title = e.target.value
    //     for (let i=0; i<todos.length; i++){
    //         if (todos[i].id === id){
    //             newarr.splice(i, 1, b)
    //             setTodos(newarr)
    //         }
    //     }
                  
    // }
    // function handleDone(id){
    //     let newarr = [...todos];
    //     let b = todos.find(item => item.id === id)
    //     if (!b.isDone){
    //         b.isDone = true;
    //         message.success("You finished a task!")
    //     }
    //     else{
    //         b.isDone = false;
    //     } 
    //     for (let i=0; i<todos.length; i++){
    //         if (todos[i].id === id){
    //             newarr.splice(i, 1, b)
    //             setTodos(newarr)
    //         }
    //     }
    //     console.log(todos)
    // }
    const todos = useSelector(state => state)
    const dispatch = useDispatch()
    var filter = todos.filter((todo) => {
        if (search === '') return todo
        else return todo.title.includes(search)
    })
    
    function handleDelete(id){
        dispatch({
            type: 'Delete',
            id: id
        })
        console.log(todos)
        console.log(filter)
        message.warning("You deleted a task")
    }

    function handleFinish(id){
        dispatch({
            type: 'Finish',
            id
        })
    }

    function handleDrag(item){
        if (!item.destination) return
        let [drag] = filter.splice(item.source.index, 1)
        filter.splice(item.destination.index, 0, drag)    
    }
    return (
        <DragDropContext onDragEnd={handleDrag}>
            <Droppable droppableId="tasklist">
                {(provided)=> (
                    <ul className="tasklist" {...provided.droppableProps} ref={provided.innerRef}>
                    {
                        filter.map((todo, index) => {
                            return (
                                <Draggable key={todo.id} draggableId={todo.id} index={index}>
                                    {(provided) => (
                                        <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                            <div className = {`task-${todo.isDone}`}>
                                                <Row id="list" className ={`row-searchInput-${todo.id}`} >
                                                    <Col span={1}><div className={`label-${todo.level}`}></div></Col>
                                                    <Col span={15}>
                                                        <div className="main-context">
                                                            <div className="task-name">
                                                                {todo.title}
                                                            </div>
                                                            <div className="btn">
                                                                <button className="btn-finish" onClick={()=> handleFinish(todo.id)}>
                                                                    <CheckOutlined style={{color: '#4D77FF'}}/>
                                                                </button>
                                                                <button className="btn-delete" onClick={() => handleDelete(todo.id)}>
                                                                    <DeleteOutlined style={{color: '#FD5D5D'}} />
                                                                </button>
                                                                <EditModal></EditModal>
                                                            </div>
                                                        </div>                      
                                                    </Col>
                                                    
                                                    <Col span={4}>
                                                        <Level level={todo.level}></Level>
                                                    </Col>
                                                    <Col span={4}>
                                                        <TImeleft deadline={todo.deadline} timeLeft={todo.timeLeft}></TImeleft>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </li>
                                    )}
                                </Draggable>
                            )
                        })
                    }
                    {provided.placeholder}
                    </ul>
                )}
            </Droppable>
        </DragDropContext>
    )
}
export default ToDoList;
