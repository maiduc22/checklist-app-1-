import React from "react";
import { useState } from "react";
import './style.css'

function InputCustom({
    size = 'default',
    placeholder,
    border = 'default',
    colorFocus = 'default',
    type = 'text',
    icon ,
    onPressEnter,
    ...props
    })  {

    const [inputValue, setInputValue] = useState('')
    return (
        <div className={`input input-size-${size}
         input-border-${border} input-color-${colorFocus}`}>
                {icon}
            <input
                type={type}
                placeholder={placeholder}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={onPressEnter}
                value = {inputValue}
            >
            </input>
        </div>
    )
}

export default InputCustom