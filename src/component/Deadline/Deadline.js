import React from 'react'
import "./Deadline.css"
import 'antd/dist/antd.css';
import {
    CalendarOutlined,
} from '@ant-design/icons';
import moment from "moment";

function Deadline({deadline}) {
      return (
        <div className='time-dis'>
                <CalendarOutlined  style={{marginRight: '6px'}}/>
                {moment(deadline).format('DD MMM, YYYY')}
        </div>
      )
  
}

export default Deadline