import React from "react";
import { Button, Dropdown, Menu } from "antd";
import {
    UserOutlined,
    BellFilled
} from '@ant-design/icons'
import { useNavigate } from "react-router-dom";
import './style.css'

const HeaderBar = () => {
    const history = useNavigate()
    const menu = (
        <Menu
        items={[
            {
              label: (
                <a target="_blank" rel="noopener noreferrer" href="">
                  1st menu item
                </a>
              ),
            },

            {
              label: (
                <a target="_blank" rel="noopener noreferrer" href="">
                  2nd menu item
                </a>
              ),
            },

            {
              label: (
                <a target="_blank" rel="noopener noreferrer" href="">
                  3rd menu item
                </a>
              ),
            },
          ]}
        ></Menu>
    )
    
    const handleClickUserBtn = () => {      
        history('/')
    }
    const handleClickNotiBtn = () => {

    }

    return (
        <div className="headerbar">
            <div className="headerbar-wrapper">
                <Button 
                  type='primary' 
                  className="btn-user" 
                  onClick={handleClickNotiBtn}
                  shape = "circle"
                >
                  <BellFilled />
                </Button>

                <Dropdown overlay={menu} placement='bottom'>
                    <Button 
                      type='primary' 
                      className="btn-user" 
                      onClick={handleClickUserBtn}
                      shape = 'circle'    
                    >
                      <UserOutlined />
                    </Button>
                </Dropdown> 
            </div>
        </div>    
    )
}

export default HeaderBar