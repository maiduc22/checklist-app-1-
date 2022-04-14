import React from 'react'
import "./Timeleft.css"
import 'antd/dist/antd.css';
import {
    CalendarOutlined,
} from '@ant-design/icons';
import moment from "moment";

function TImeleft({deadline, timeLeft}) {
  if (timeLeft > 0){
      return (
        <div className='time-dis'>
            <div className="task-time">
                <CalendarOutlined  style={{marginRight: '5px'}}/>
                {moment(deadline).format('DD MMM, YYYY')}
            </div>
            <div className="task-time">
                <CalendarOutlined  style={{marginRight: '5px'}}/>
                {timeLeft} days left
            </div>
        </div>
      )
  }
  else if (timeLeft==0){
    return(
        <div className='time-dis'>
            <div className="task-time">
                <CalendarOutlined  style={{marginRight: '5px'}}/>
                {moment(deadline).format('DD MMM, YYYY')}
            </div>
            <div className="task-time" style={{color: '#4D77FF'}}>
                <CalendarOutlined  style={{marginRight: '5px'}}/>
                Deadline is today
            </div>
        </div>
    )
  }
  else {
        return (
            <div className='time-dis'>
                <div className="task-time">
                    <CalendarOutlined  style={{marginRight: '5px'}}/>
                    {moment(deadline).format('DD MMM, YYYY')}
                </div>
                <div className="task-time" style={{color: '#FD5D5D'}}>
                    <CalendarOutlined  style={{marginRight: '5px'}}/>
                    {-timeLeft} days late
                </div>
            </div>
        )
  }
}

export default TImeleft