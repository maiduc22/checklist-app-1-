import React from "react";
import { useEffect } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import Level from "../Level/Level";
import Deadline from '../Deadline/Deadline';
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
    console.log(useSelector(state => state))
    const dispatch = useDispatch()
    const todos = useSelector(state => state.todos.todos)
    const filter = useSelector(state => state.todos.filter.filterTodos)
    

    useEffect(() => {
        dispatch({
            type: "Filter_By_Title",
            search: search
        })
    }, [search, todos])

    function handleDelete(id){
        dispatch({
            type: 'Delete',
            id
        })
        message.warning("You deleted a task")
    }

    function handleFinish(id){
        dispatch({
            type: 'Finish',
            id
        })
        message.success("You finished a task")
    }

    function handleDrag(item){
        dispatch({
            type: 'Drag',
            item
        })
    }
    return (
        <div>
            <div>
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
                                                        <Row 
                                                            id="list" 
                                                            className ={`row-searchInput-${todo.id}`} 
                                                        >
                                                            <Col span={1}>
                                                                <div className={`label-${todo.level}`}></div>
                                                            </Col>
                                                            <Col span={15}>
                                                                <div className="main-context">
                                                                    <div className="task-name-wrapper">
                                                                        {todo.title}
                                                                    </div>

                                                                    <div className="button-wrapper">
                                                                        <button className="btn-finish" 
                                                                            onClick={()=> handleFinish(todo.id)}
                                                                        >
                                                                            <CheckOutlined style={{color: '#4D77FF'}}/>
                                                                        </button>

                                                                        <button 
                                                                            className="btn-delete" 
                                                                            onClick={() => handleDelete(todo.id)}
                                                                        >
                                                                            <DeleteOutlined style={{color: '#FD5D5D'}} />
                                                                        </button>

                                                                        <EditModal id={todo.id}></EditModal>
                                                                    </div>
                                                                </div>                      
                                                            </Col>
                                                            
                                                            <Col span={3}>
                                                                <Level level={todo.level}></Level>
                                                            </Col>
                                                            <Col span={5}>
                                                                <Deadline deadline={todo.deadline}></Deadline>
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
            </div>
        </div>
    )
}
export default ToDoList;
