import React from 'react'
import "./Timeleft.css"
import 'antd/dist/antd.css';
import {
    CalendarOutlined,
} from '@ant-design/icons';
import moment from "moment";

function TImeleft({deadline, timeLeft}) {
  if (timeLeft >= 0){
      return (
        <div className='time-dis'>
                <CalendarOutlined  style={{marginRight: '5px'}}/>
                {moment(deadline).format('DD MMM, YYYY')}
        </div>
      )
  }
  else {
        return (
            <div className='time-dis' style={{color: 'red'}}>
                    <CalendarOutlined  style={{marginRight: '5px'}}/>
                    {moment(deadline).format('DD MMM YYYY')}
            </div>
        )
  }
}

export default TImeleft