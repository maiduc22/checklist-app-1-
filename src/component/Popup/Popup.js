import { Input } from 'antd'
import React, { useState } from 'react'
import {message} from "antd";
import { Form, Select, DatePicker, Button} from 'antd'
import 'antd/dist/antd.css'
import "./Popup.css"

function Popup({trigger, setTrigger, todos, setTodos}) {
    const [select, setSelect] = useState()  //priority level
    const [hsd, setHsd] = useState()        //date
    const [input, setInput] = useState('')
    function handleAdd(e){
        if (!input) {
            e.preventDefault();
            message.error("You need to input a task!")
        }
        else {
            e.preventDefault();
            let newtodos = [...todos];
            newtodos.push({title: input, isDone: false, level: select, deadline: hsd, timeLeft: 0});     
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
    function changeDate(){
        let a = document.getElementById('date-picker')
        setHsd(a.value)
        console.log(a.value)
    }
    return (
      (trigger) ? (<div className='popup'>
          <div className='popup-container'>
              
                <Form className='add-form'>
                <h1>Add todo</h1>   
               
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
                        <DatePicker id='date-picker' onChange={changeDate}/>
                    </Form.Item>
                    <Form.Item className="btn-container">
                        <Button onClick={()=>setTrigger(false)}>Cancel</Button>
                        <Button type="primary" onClick={(e) => handleAdd(e)}>Save</Button>
                    </Form.Item>
                </Form>
          </div>
      </div>) : ""
  )
}

export default Popup