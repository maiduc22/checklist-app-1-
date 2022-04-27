import React from "react";

const Button = ({
    animation, 
    className = '',
    children,
    onClick,
    type, 
    shape,
    border,
    background,
    color,
    ...props
}) => {
    return (
        <div
            onClick={onClick}
            className = {`btn btn-type-${type} btn-bd-${border} btn-bg-${background} btn-color-${color}`} 
        >
            {children}
        </div>
    )
}