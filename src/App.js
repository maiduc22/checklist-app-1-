import { useEffect, useState } from 'react';
import './App.css';
import ToDoList from './component/ToDoList/ToDoList';
import { Row, Col, Button } from 'antd';
import {
  PlusCircleOutlined,
  DeleteOutlined,
  SearchOutlined,
  CheckCircleFilled
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
          <h1>CHECKLIST APP <CheckCircleFilled /></h1>
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
              <SearchOutlined style={{fontSize: '16px'}}></SearchOutlined>
              <input
                style={{
                  margin: '0 10px 0 0',
                  width: '220px',
                  border: 'none',
                  fontSize: '18px',
                  padding: '5px',
                  background: '#EFF1F2'
                }}
                
                placeholder={`Type to search`}
                value={searchInput}
                onChange = {(e) => setSearchInput(e.target.value)}	
                
              ></input>
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