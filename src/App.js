import { useState } from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import ToDoList from './component/ToDoList/ToDoList';
import { Row, Col} from 'antd';
import {
  SearchOutlined,
  CheckCircleFilled
} from '@ant-design/icons';
import 'antd/dist/antd.css'
import AddModal from './component/AddModal/AddModal';

function App() {

  const todos = useSelector(state => state)
  console.log(todos)

  const [searchInput, setSearchInput] = useState("") 	//search input
  return (
    <div className='app-container'>
      <div className='app-wrapper'>
        <div className='title'>
          <h1>CHECKLIST APP <CheckCircleFilled /></h1>
        </div >
        
          <Row className='row-header'>
            <Col span={8}>
              <AddModal></AddModal>
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
              search={searchInput}
            >    
            </ToDoList>
          </div>

      </div>
    </div>
    
  )
}

export default App;