import React from 'react'

function LeftPopUp(props) {

  const { Popup } = props;

  return (
    <div className="header-left-popup-container">
      {Popup ? <Popup clearPopup={props.clearPopup}/> : null}
    </div>
  );

}

export default LeftPopUp
