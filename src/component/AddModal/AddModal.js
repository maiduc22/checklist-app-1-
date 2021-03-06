import { Input } from 'antd'
import React, { useState } from 'react'
import {ReactComponent as AddSvg} from '../../assets/file-add-svgrepo-com.svg'
import { v4 as uuid } from 'uuid';

import {message} from "antd";
import { Form, Select, DatePicker} from 'antd'
import 'antd/dist/antd.css'
import "./AddModal.css"
import { useDispatch} from 'react-redux';



import ButtonCustom from '../../core/Button';
import Modal from '../../core/Modal';

function AddModal() {
    const [level, setLevel] = useState()                //priority level
    const [deadline, setDeadline] = useState()          //deadline
    const [title, setTitle] = useState('');             //input title
    const dispatch = useDispatch();
    

    function handleSelectTag(value){    
        setLevel(value);
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
        setDeadline(dateString)
    }
    
    const [isModalVisible, setIsModalVisible] = useState(false);
      
    const showModal = () => {
        setIsModalVisible(true);
    };
      
    const handleOk = (e) => {
        setIsModalVisible(false);
        if (title === '') {
            message.error('You need to have a title')
            
        }
        else {
            dispatch({
                type: 'Add',
                id : uuid(),
                title: title,
                idDone: false,
                level: level,
                deadline: deadline
            })
            setTitle('')
            message.success("You added a task!")
        }
    };
      
    const handleCancel = () => {
        setIsModalVisible(false);
    };

    
    return (
        <div className='add-modal'>
            <div className='btn-wrapper'>
                <ButtonCustom 
                    type='primary'
                    onClick={showModal}
                    content='New Task'
                >
                                                                                                                               
                </ButtonCustom>

                <ButtonCustom
                    onClick={() => dispatch({type: 'Clear'})}
                    type = 'secondary'
                    content='Clear'
                >
                   
                </ButtonCustom>
            </div>
            
            <div>
                <Modal
                    visible={isModalVisible}
                    onCancel={handleCancel}
                    onOk={handleOk}
                    title='Add Task'
                    width='450px'
                    height='max-content'
                >
                    <div>
                        <Form 
                            className='edit-form'
                            labelCol={{span: 6}}
                            wrapperCol={{span: 18}}
                        >
                            <Form.Item 
                                className='task-input' 
                                label="Title"
                            >
                                <Input required={true} value={title} onChange={(e) => setTitle(e.target.value)}/>
                            </Form.Item>
                            <Form.Item  label="Priority Level">
                                <Select onChange={handleSelectTag}> 
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
            </div>
        </div>
        )
      }
export default AddModal