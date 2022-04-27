import React from "react";
import './style.css'

const ButtonCustom = ({
    animation, 
    className = '',
    children,
    onClick,
    size = 'medium',
    icon,
    type = 'primary', 
    shape = 'round',
    background = '',
    color = '',
    ...props
}) => {
    return (
        <div
            onClick={onClick}
            className = {`btn btn-size-${size} btn-icon-${icon} btn-type-${type} btn-shape-${shape} btn-bg-${background} btn-color-${color}`} 
        >
            {children}
        </div>
    )
}

export default ButtonCustom