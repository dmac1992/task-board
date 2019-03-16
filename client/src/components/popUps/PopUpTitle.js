import React from 'react';
import { connect } from 'react-redux';

import "./Popup.scss";
import { clearActiveLeftPopUp, clearActiveRightPopUp  } from 'actions/header'; 


class PopUpTitle extends React.Component  {
    
    render() {
        return (
            <div className="popup-title-container">
                <span className="popup-title">{this.props.title}</span>
                <span className="popup-close icon-times" onClick={this.props.clearPopup}></span>
            </div>
        )
    }
   
}

export default connect(null, {clearActiveLeftPopUp, clearActiveRightPopUp})(PopUpTitle);