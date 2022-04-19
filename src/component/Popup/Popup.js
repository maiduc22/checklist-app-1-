import { Input } from 'antd'
import React, { useState } from 'react'
import { v4 as uuid } from 'uuid';
import {message} from "antd";
import { Form, Select, DatePicker, Button, Modal} from 'antd'
import { PlusSquareOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css'
import "./Popup.css"

function Popup({trigger, setTrigger, todos, setTodos}) {
    const [select, setSelect] = useState()  //priority level
    const [hsd, setHsd] = useState()        //deadline
    const [input, setInput] = useState('')
    const [timeleft, setTimeleft] = useState(0)

    function handleAdd(e){
        if (!input) {
            e.preventDefault();
            message.error("You need to input a task!")
        }
        else {
            e.preventDefault();
            let newtodos = [...todos];
            newtodos.push({id:uuid() ,title: input, isDone: false, level: select, deadline: hsd, timeLeft: timeleft});     
            setTodos(newtodos);       
            setInput('');
            setTrigger(false)
            message.success("You've add a task")
        }
    }

    function handleChange(value){
        console.log(`selected: ${value}`)
        setSelect(value);
    }
    function Calculate(dateString) {
        let deadline = new Date(dateString)
        let a = new Date()
        let today = new Date(a.toLocaleDateString())
        let diff_time = -today.getTime() + deadline.getTime()
        let diff_day = Math.ceil(diff_time / (1000 * 60 * 60 * 24))
        return diff_day-1
    }
    function handleChangeDate(date, dateString){
        setHsd(dateString)
        setInterval(setTimeleft(Calculate(dateString)), 1000*24*60*60)
        console.log(Calculate(dateString))
    }
    
    const [isModalVisible, setIsModalVisible] = useState(false);
      
    const showModal = () => {
        setIsModalVisible(true);
    };
      
    const handleOk = () => {
        setIsModalVisible(false);
    };
      
    const handleCancel = () => {
        setIsModalVisible(false);
    };
    return (
        <>
            <Button 
                type="primary" 
                onClick={showModal} 
                icon={<PlusSquareOutlined />} 
                shape="circle"
            >
            </Button>
            <Modal title='Edit Task' visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <div>
                    <Form 
                        className='edit-form'
                        labelCol={{span: 6}}
                        wrapperCol={{span: 18}}
                    >
                        <Form.Item className='task-input' label="Title">
                            <Input value={input} onChange={(e) => setInput(e.target.value)}/>
                        </Form.Item>
                        <Form.Item  label="Priority Level">
                            <Select defaultValue='None'> 
                                <Select.Option value="Highest">Highest</Select.Option>
                                <Select.Option value="Critical">Critical</Select.Option>
                                <Select.Option value="Alarming">Alarming</Select.Option>
                                <Select.Option value="Low">Low</Select.Option>
                            </Select>
                        </Form.Item>
                        <Form.Item label="Deadline">
                            <DatePicker />
                        </Form.Item>
                    </Form>
                </div>
      
            </Modal>
        </>
        )
      }
export default Popup