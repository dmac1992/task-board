import React from 'react'

function RightPopUp(props) {

    const { Popup } = props;
    return (
        <div className="header-right-popup-container">
            {Popup && <Popup />}
        </div>
    );

}

export default RightPopUp
