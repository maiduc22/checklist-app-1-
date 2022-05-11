import React from "react";
import { useState } from "react";
import Modal from "../../core/Modal";
import ButtonCustom from "../../core/Button";
import Icon from "../../core/Icon";
import Dropdown from "../../core/Dropdown";

const Test = () => {
    const [selected, setSelected] = useState('')
    
    return (
        <Dropdown
            title='Choose One'
            selected={selected}
            setSelected={setSelected}
            size='14px'
            width='150px'
            
        >
            <div>React</div>
            <div>React</div>
            <div>React</div>
        </Dropdown>
    )
}

export default Test