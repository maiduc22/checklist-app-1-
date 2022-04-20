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

    const todos = useSelector(state => state.todos)
    console.log(todos)
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
                                                                <EditModal id={todo.id}></EditModal>
                                                            </div>
                                                        </div>                      
                                                    </Col>
                                                    
                                                    <Col span={4}>
                                                        <Level level={todo.level}></Level>
                                                    </Col>
                                                    <Col span={4}>
                                                        <TImeleft deadline={todo.deadline}></TImeleft>
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
