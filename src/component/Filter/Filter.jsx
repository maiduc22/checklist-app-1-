import React from 'react'
import { Select } from 'antd';
import 'antd/dist/antd.css';
import { useDispatch } from 'react-redux';

import "./style.css"

function Filter() {
    const dispatch = useDispatch()

    function handleChangeLevel(value){
        dispatch({
            type: 'Filter_By_Level',
            payload: value
        })
       
    }
    function handleChangeStatus(value){
        dispatch({
            type: 'Filter_By_Status',
            payload: value
        })
        
    }
    return (
    <div>
        <Select defaultValue="Status" onChange={handleChangeStatus} className='Select-filter' >
            <Select.Option value=''>All status</Select.Option>
            <Select.Option value={true}>Finished</Select.Option>
            <Select.Option value={false}>Unfinish</Select.Option>
        </Select>

        <Select defaultValue="Priority"  onChange={handleChangeLevel} className='Select-filter' >
            <Select.Option value=''>All level</Select.Option>
            <Select.Option value='Highest'></Select.Option>
            <Select.Option value='Critical'></Select.Option>
            <Select.Option value='Alarming'></Select.Option>
            <Select.Option value='Low'></Select.Option>
        </Select>
    </div>
    )
}

export default Filter