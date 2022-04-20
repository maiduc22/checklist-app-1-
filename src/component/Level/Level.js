import React from 'react'
import { Tag } from 'antd';
import 'antd/dist/antd.css'

function Level({level}) {
    let color
    switch (level) {
        case 'Highest':
            color = '#E64F3B'
            break;
        case 'Critical':
            color = '#FE9319'
            break;
        case 'Alarming':
            color = '#EFD000'
            break;
        case 'Low':
            color = '#54B445'
            break;
        default:
            break;
    }
    return (
        <Tag style={{fontWeight: 'bolder'}}  color={color}>{level}</Tag>
    )
}

export default Level