import React from "react";
import './style.css'
const Icon = ({
    children,
    size = 'medium',
    onClick,
    color = 'default',
    ...props
}) => {
    return (
        <div 
            onClick={onClick}
            className={`icon icon-size-${size} icon-color-${color}`}
        >
            {children}
        </div>
    )
}

export default Icon