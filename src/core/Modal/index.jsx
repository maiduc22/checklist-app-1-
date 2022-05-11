import React from "react";
import ButtonCustom from "../Button";
import { MdOutlineCancel } from 'react-icons/md';

import './style.css';

const Modal = ({
    children,
    className,
    title,
    onOk,
    onCancel,
    visible,
    content,
    width='',
    height='',
    ...props
}) => {
    return (
        visible && <div className="modal">
            <div 
                className="modal-content"
                style={{width: width, height: height}}
            >
                <div className="modal-header">
                    <div className="modal-header-title">
                        {title}
                    </div>
                    <div className="modal-header-close"
                        onClick={onCancel}
                    >
                        <MdOutlineCancel/>
                    </div>
                </div>

                <div className="modal-body">
                    {children}
                </div>

                <div className="modal-footer">
                    <ButtonCustom
                        type="primary"
                        onClick={onOk}
                        content='OK'
                        width="70px"
                        height="30px"
                    ></ButtonCustom>

                    <ButtonCustom
                        type="secondary"
                        onClick={onCancel}
                        content='Cancel'
                        width="70px"
                        height="30px"
                    ></ButtonCustom>
                </div>
            </div>
        </div>
    )
}

export default Modal