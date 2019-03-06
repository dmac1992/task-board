import React from 'react';
import "./header-popup.scss";

const PopUpTitle = ( {title}) => {
    return (
        <div className="popup-title-container">
            <span className="popup-title">{title}</span>
            <span className="popup-close icon-times"></span>
        </div>
    )
}

export default PopUpTitle;