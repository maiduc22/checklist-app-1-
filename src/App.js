import { useEffect, useState } from 'react';
import './App.css';
import ToDoList from './component/ToDoList/ToDoList';
import { Calendar, Row, Col, Button, Tooltip, message } from 'antd';
import {
  PlusCircleOutlined,
  DeleteOutlined,
  SearchOutlined
} from '@ant-design/icons';
import 'antd/dist/antd.css'
import Popup from './component/Popup/Popup';

function App() {
  const [trigger, setTrigger] = useState(false)	
  const [todos, setTodos] = useState([])		//task list 
  const [searchInput, setSearchInput] = useState("") 	//search result


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
        <div className='title'>
          <h1>CHECKLIST APP</h1>
        </div >
        
          <Row className='row-header'>
            <Col span={8}>
              	<Button 
                	className='btn-popup' 
                	type="primary" 
                	onClick={()=>setTrigger(true)}
              	>
                	Add <PlusCircleOutlined />
              	</Button>
              	<Button 
                	className='btn-reset' 
                	type="primary" 
                	onClick={()=>setTodos([])}
              	>
               	Reset <DeleteOutlined />
              	</Button>
            </Col>
            <Col span={4}></Col>
            <Col span={12} style={{textAlign: 'right'}}>
              <input
                style={{
                  margin: '0 10px 0 0',
                  width: '220px',
                  border: 'none',
                  fontSize: '18px',
                  padding: '5px',
                  background: '#FFFFFF'
                }}
                type="text"
                placeholder='Input title to search'
                value={searchInput}
                onChange = {(e) => setSearchInput(e.target.value)}	
              ></input>

              <Button 
              	type="primary" 
             		shape="circle" 
              	icon={<SearchOutlined />}               	
              />
            </Col>
          </Row>
		
          <div>
            <ToDoList 
              todos={todos} 
              setTodos={setTodos} 
              input={searchInput} 
              setInput={setSearchInput}>    
            </ToDoList>
          </div>

      </div>

      <div className='small-calendar'>
        <Calendar fullscreen={false}></Calendar>
      </div>

      <Popup 
            trigger={trigger} 
            setTrigger={setTrigger}
            todos={todos}
            setTodos={setTodos}
      ></Popup>  
    </div>
    
  )
}

export default App;