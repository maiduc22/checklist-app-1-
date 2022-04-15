import React from 'react'
import { Tag } from 'antd';
import 'antd/dist/antd.css'

function Level({level}) {
    let color
    switch (level) {
        case 'Highest':
            color = '#FFA8A8'
            break;
        case 'Critical':
            color = '#FDD7AA'
            break;
        case 'Alarming':
            color = '#F6FFA4'
            break;
        case 'Low':
            color = '#B6FFCE'
            break;
        default:
            break;
    }
    return (
        <Tag style={{fontWeight: 'bolder'}}  color={color}>{level}</Tag>
    )
}

export default Level