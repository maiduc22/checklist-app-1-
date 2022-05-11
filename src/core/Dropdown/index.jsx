import React from "react";
import {useState} from "react";
import './style.css'
const Dropdown = ({
    children,
    title,
    className,
    options,
    selected,
    setSelected,
    size,
    width,
    ...props
}) => {
    const [isActive, setIsActive] = useState(false)
    return (
        <div className="dropdown">
            <div 
                onClick={() => setIsActive(!isActive)}
                className="dropdown-btn"
            >
                {title}
            </div>

            {isActive &&  (
                <div 
                    className="dropdown-content"
                    style={{width: width}}
                >
                    {
                        children.map((option) => (
                            <div 
                                style={{fontSize: size}}
                                className="dropdown-content-item"
                                onClick={() => setSelected(option)}
                            >
                                {option}
                            </div>
                        ))
                    }
                </div>
            )}
        </div>
    )
}

export default Dropdown