import React from "react";
import './style.css'

const ButtonCustom = ({
    animation, 
    className = '',
    children,
    onClick,
    size = 'medium',
    content,
    icon,
    type = 'primary', 
    shape = 'round',
    background = '',
    color = '',
    width = '',
    height = '',
    ...props
}) => {
    return (
        <div
            onClick={onClick}
            className = {`btn btn-size-${size} btn-icon-${icon} btn-type-${type} btn-shape-${shape}`} 
            style={{width: width, height: height}}
        >
            {icon && <div className="button-icon">{icon}</div>}
            {content && <span className="button-content">{content}</span>}
        </div>
    )
}

export default ButtonCustom