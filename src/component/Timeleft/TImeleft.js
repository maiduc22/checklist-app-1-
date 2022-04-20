import React from 'react'
import "./Timeleft.css"
import 'antd/dist/antd.css';
import {
    CalendarOutlined,
} from '@ant-design/icons';
import moment from "moment";

function TImeleft({deadline}) {
      return (
        <div className='time-dis'>
                <CalendarOutlined  style={{marginRight: '6px'}}/>
                {moment(deadline).format('DD MMM, YYYY')}
        </div>
      )
  
}

export default TImeleft