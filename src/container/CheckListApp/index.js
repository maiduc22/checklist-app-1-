import { useState } from 'react';
import React from 'react';
import './style.css'

import { Row, Col} from 'antd';
import {
  SearchOutlined,
  CheckCircleFilled
} from '@ant-design/icons'
import 'antd/dist/antd.css'

import ToDoList from '../../component/ToDoList/ToDoList'
import Filter from '../../component/Filter/Filter'
import HeaderBar from '../../component/HeaderBar';
import AddModal from '../../component/AddModal/AddModal';


const CheckList = () => {
  const [searchInput, setSearchInput] = useState("") 	//search input

  function handleChange(e){
    setSearchInput(e.target.value);
  }

  return (
    <div className='checklistapp-wrapper'>
      <div className='app-container'>
        <div>
          <div className="headerbar">
              <HeaderBar searchInput={searchInput} setSearchInput={setSearchInput}></HeaderBar>
          </div>
        </div>

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
              </Col>
            </Row>
      
            <div>
              <ToDoList 
                search={searchInput}
              >    
              </ToDoList>
            </div>
            {/* <div>
              <Filter></Filter>
            </div> */}
        </div>
      </div>
    </div>
  )
}

export default CheckList;