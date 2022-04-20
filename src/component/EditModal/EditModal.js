import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Modal, Form, Select, DatePicker, Input  } from 'antd';
import { EditOutlined } from '@ant-design/icons';

const EditModal = () => {
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

  const [input, setInput] = useState('')
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
  );
};

export default EditModal;