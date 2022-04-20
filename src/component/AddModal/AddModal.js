import { Input } from 'antd'
import React, { useState } from 'react'
import { v4 as uuid } from 'uuid';
import {message} from "antd";
import { Form, Select, DatePicker, Button, Modal} from 'antd'
import { PlusSquareOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css'
import "./AddModal.css"
import { useDispatch} from 'react-redux';


function AddModal() {
    const [select, setSelect] = useState()  //priority level
    const [hsd, setHsd] = useState()        //deadline
    const [input, setInput] = useState('');
    const dispatch = useDispatch();
    

    function handleSelectTag(value){
        console.log(`selected: ${value}`)
        setSelect(value);
    }
    // function Calculate(dateString) {
    //     let deadline = new Date(dateString)
    //     let a = new Date()
    //     let today = new Date(a.toLocaleDateString())
    //     let diff_time = -today.getTime() + deadline.getTime()
    //     let diff_day = Math.ceil(diff_time / (1000 * 60 * 60 * 24))
    //     return diff_day-1
    // }
    function handleSelectDate(date, dateString){
        setHsd(dateString)
    }
    
    const [isModalVisible, setIsModalVisible] = useState(false);
      
    const showModal = () => {
        setIsModalVisible(true);
    };
      
    const handleOk = () => {
        setIsModalVisible(false);
        dispatch({
            type: 'Add',
            id : uuid(),
            title: input,
            idDone: false,
            level: select,
            deadline: hsd
        })
        message.success("You added a task!")
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
                shape="round"
            >
                Add Task
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
                            <Select defaultValue='None' onChange={handleSelectTag}> 
                                <Select.Option value="Highest">Highest</Select.Option>
                                <Select.Option value="Critical">Critical</Select.Option>
                                <Select.Option value="Alarming">Alarming</Select.Option>
                                <Select.Option value="Low">Low</Select.Option>
                            </Select>
                        </Form.Item>
                        <Form.Item label="Deadline">
                            <DatePicker onChange={handleSelectDate}/>
                        </Form.Item>
                    </Form>
                </div>
      
            </Modal>
        </>
        )
      }
export default AddModal