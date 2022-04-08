import React, { useState } from "react";
import {message} from "antd";
import { Form, Input, Select, DatePicker, Button} from 'antd'
import 'antd/dist/antd.css'
import 'antd/dist/antd.css';
import "./ToDoForm.css"

//component ToDoForm nhận props handleInput là function
function ToDoForm({input, setInput, todos, setTodos}){
    function handleSubmit(e){
        if (!input) {
            e.preventDefault();
            message.error("You need to input a task!")
        }
        else {
            e.preventDefault();
            let newtodos = [...todos];
            newtodos.push({id: Math.floor(Math.random()*100000), title: input, isDone: false, show: false ,isTime: false});     
            setTodos(newtodos);       
            setInput('');
            message.success("You've add a task")
        }
    }
    return (
        <div>
            <Form>
                <Form.Item label="Input">
                    <Input />
                </Form.Item>
                <Form.Item className="select-lv" label="Priority Level">
                    <Select>
                        <Select.Option value="Highest">Highest</Select.Option>
                        <Select.Option value="Critical">Critical</Select.Option>
                        <Select.Option value="Alarming">Alarming</Select.Option>
                        <Select.Option value="Low">Low</Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item label="DatePicker">
                    <DatePicker />
                </Form.Item>
                <Form.Item className="btn-container">
                    <Button>Cancel</Button>
                    <Button>Add</Button>
                </Form.Item>
            </Form>

        </div>
        
        
    );
};
export default ToDoForm;