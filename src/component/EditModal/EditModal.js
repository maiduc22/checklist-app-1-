import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Modal, Form, Select, DatePicker, Input  } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';

const EditModal = ({id}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos.todos)
  const todo = todos.find(todo => todo.id === id)

  const [newtitle, setTitle] = useState(todo.title)
  const [newdeadline, setDeadline] = useState(todo.deadline)
  const [newlevel, setLevel] = useState(todo.level)

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
    dispatch({
      type: "Edit_Title",
      payload: {id, newtitle}
    })

    dispatch({
      type: "Edit_Level",
      payload: {id,
        newlevel}
    })

    dispatch({
      type: "Edit_Deadline",
      payload: {id, newdeadline}
    })
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
        <button 
          className='btn-edit' 
          style={{color: 'green'}}
          onClick={showModal}
        >
          <EditOutlined />
        </button>
        <Modal title='Edit Task' visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
            <div>
                <Form 
                    className='edit-form'
                    labelCol={{span: 6}}
                    wrapperCol={{span: 18}}
                >
                    <Form.Item className='task-input' label="Title">
                        <Input type='text' value={newtitle} onChange={(e) => setTitle(e.target.value)}/>
                    </Form.Item>
                    <Form.Item  label="Priority Level">
                        <Select defaultValue={newlevel} onChange={(value) => setLevel(value)}> 
                            <Select.Option value="Highest">Highest</Select.Option>
                            <Select.Option value="Critical">Critical</Select.Option>
                            <Select.Option value="Alarming">Alarming</Select.Option>
                            <Select.Option value="Low">Low</Select.Option>
                        </Select>
                    </Form.Item>
                    <Form.Item label="Deadline">
                        <DatePicker onChange={(date, dateString) => setDeadline(dateString)}/>
                    </Form.Item>
                </Form>
            </div>

      </Modal>
    </>
  );
};

export default EditModal;