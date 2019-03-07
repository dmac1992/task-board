import React from 'react';
import { connect } from 'react-redux';

import "./generic-popup.scss";
import { clearActiveLeftPopUp, clearActiveRightPopUp  } from 'actions/header'; 


class PopUpTitle extends React.Component  {

    clearPopUp = () => {
        console.log("called clear Pop Up");
        switch(this.props.position) {
            case "left-menu":
                this.props.clearActiveLeftPopUp();
                break;
            case "right-menu":
                this.props.clearActiveRightPopUp();
        }
    }

    render() {
        return (
            <div className="popup-title-container">
                <span className="popup-title">{this.props.title}</span>
                <span className="popup-close icon-times" onClick={this.clearPopUp}></span>
            </div>
        )
    }
   
}

export default connect(null, {clearActiveLeftPopUp, clearActiveRightPopUp})(PopUpTitle);