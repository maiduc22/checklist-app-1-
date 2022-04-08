import { useEffect, useState } from 'react';
import './App.css';
import Search from './component/Search/Search';
import ToDoList from './component/ToDoList/ToDoList';
import { Calendar, Row, Col, Button } from 'antd';
import {
  PlusCircleOutlined
} from '@ant-design/icons';
import 'antd/dist/antd.css'
import Popup from './component/Popup/Popup';

function App() {
  const [trigger, setTrigger] = useState(false)
  const [todos, setTodos] = useState([])

  var storage = JSON.parse(localStorage.getItem("todos"))
  useEffect(()=>{
    setTodos(storage)
  }, [])

  useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  return (
    <div className='app-container'>
      <div className='app-wrapper'>
        <div className='header'>
          <h1>CHECKLIST APP</h1>
        </div>
        <div>
          <Row style={{height:'50px', padding:'10px'}} align='middle'>
            <Col span={10}>
              <Button type="primary" onClick={()=>setTrigger(true)}>
                Add<PlusCircleOutlined />
              </Button>
            </Col>
            <Col span={4}></Col>
            <Col span={10}><Search></Search></Col>
          </Row>
          
        </div>
        <div>
            <Row className='Row'>
              <Col  span={1}></Col>
              <Col  span={5}>Date</Col>
              <Col  span={10}>Title</Col>
              <Col  span={4}>Priority Level</Col>
              <Col  span={4}>Action</Col>
            </Row>
            <hr></hr>
        </div>
        
        <div>
          <ToDoList todos={todos} setTodos={setTodos}></ToDoList>
        </div>
      </div>
      <Popup 
            trigger={trigger} 
            setTrigger={setTrigger}
            todos={todos}
            setTodos={setTodos}
          ></Popup>
      <div><Calendar></Calendar></div>
    </div>
    
  )
}

export default App;