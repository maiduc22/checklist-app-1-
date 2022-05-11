import React from "react";
import './style.css'
const Icon = ({
    size = 'medium',
    onClick,
    color = 'default',
    bg = 'none',
    children,
    ...props
}) => {
    return (
        <div 
            onClick={onClick}
            className={`icon icon-size-${size} 
            icon-color-${color} icon-bg-${bg}`}
        >
            {children}
        </div>
    )
}

export default Icon