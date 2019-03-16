import React from 'react'

function RightPopUp(props) {

    const { Popup } = props;
    return (
        <div className="header-right-popup-container">
            {Popup && <Popup clearPopup={props.clearPopup}/>}
        </div>
    );

}

export default RightPopUp
