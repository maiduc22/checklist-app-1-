import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Modal, Button } from 'antd';

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

  return (
    <>
        <Button type="primary" onClick={showModal} icon={<EditOutlined />} shape="circle">
        </Button>
        <Modal title='Edit Task' visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
            <div className='popup-container'>
                <Form className='edit-form'>
                    <Form.Item className='task-input' label="Title">
                        <Input value={input} onChange={(e) => setInput(e.target.value)}/>
                    </Form.Item>
                    <Form.Item  label="Priority Level">
                        <Select defaultValue='None' value={select} onChange={handleChange}> 
                            <Select.Option value="Highest">Highest</Select.Option>
                            <Select.Option value="Critical">Critical</Select.Option>
                            <Select.Option value="Alarming">Alarming</Select.Option>
                            <Select.Option value="Low">Low</Select.Option>
                        </Select>
                    </Form.Item>
                    <Form.Item label="Deadline">
                        <DatePicker onChange={handleChangeDate}/>
                    </Form.Item>
                    <Form.Item className="btn-container">
                        <Button onClick={()=>setTrigger(false)}>Cancel</Button>
                        <Button type="primary" onClick={(e) => handleAdd(e)}>Save</Button>
                    </Form.Item>
                </Form>
            </div>

      </Modal>
    </>
  );
};

export default EditModal;