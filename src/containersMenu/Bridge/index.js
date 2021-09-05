import React, {useState}from "react";
import "./style.css"
import '../../Modal'
import ModalWindow from "../../Modal";

const Bridge = () =>  {
    return (
        <div className="content">
            <div className="title">
                <div className="titleNum" >1</div>
                <span className="titleText">Choose blockchain and asset</span>
            </div>

            <ModalWindow />
        </div>
    )
};

export default Bridge;