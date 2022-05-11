import React from "react";

import Icon from '../../core/Icon'
import Dropdown from "../../core/Dropdown";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './style.css'

import {FaRegUser} from 'react-icons/fa'
import {FiLogOut, FiSettings, FiInfo, FiSearch} from 'react-icons/fi'

import { useSelector } from "react-redux";

const HeaderBar = ({searchInput, setSearchInput}) => {
    const history = useNavigate()
    const username = useSelector(state => state.user.username)
    return (
        <div className="header">
            <div className="header-content">
                <Dropdown
                    title={
                        <Icon
                            size="medium"
                        >
                            <FaRegUser />
                        </Icon>
                    }
                    width='125px'
                    className='header-content-button'
                >
                    <div className="header-content-dropdown">User Info <FiInfo /></div>
                    <div className="header-content-dropdown">
                        Setting <FiSettings/>
                    </div>
                    <div 
                        className="header-content-dropdown"
                        onClick={() => history('/')}
                    >
                        Log out <FiLogOut />
                    </div>
                </Dropdown>

                <div className="header-content-welcome">
                    Welcome, {username}!
                </div>
            </div>

            <div className="header-search" style={{background: '#EFF1F2'}}>
                <FiSearch style={{fontSize: '16px'}}/>
                <input
                  style={{
                    margin: '0 10px 0 0',
                    width: '220px',
                    border: 'none',
                    fontSize: '18px',
                    padding: '5px',    
                    background: '#EFF1F2'              
                  }}

                  placeholder={`Search`}
                  value={searchInput}
                  onChange = {(e) => setSearchInput(e.target.value)}	
                ></input>
            </div>
        </div>    
    )
}

export default HeaderBar