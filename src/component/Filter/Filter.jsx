import React from 'react'
import { Select } from 'antd';
import 'antd/dist/antd.css';
import { useDispatch } from 'react-redux';

import "./style.css"

function Filter() {
    const dispatch = useDispatch()

    function handleChange(value){
        dispatch({
            type: 'Filter_By_Level',
        })
    }
    
    return (
    <div>
        <Select defaultValue="Status" className='Select-filter' >
            <Select.Option value={true}>Finished</Select.Option>
            <Select.Option value={false}>Unfinish</Select.Option>
            
        </Select>
        <Select defaultValue="Priority" className='Select-filter' >
            <Select.Option value='Highest'></Select.Option>
            <Select.Option value='Critical'></Select.Option>
            <Select.Option value='Alarming'></Select.Option>
            <Select.Option value='Low'></Select.Option>
        </Select>
    </div>
    )
}

export default Filter