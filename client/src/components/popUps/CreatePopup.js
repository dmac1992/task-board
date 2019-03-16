import React from 'react';
import  { connect } from 'react-redux';
import { setActiveModal } from "actions/modal";


import "./Popup.scss";
import "./CreatePopup.scss";

import PopUpTitle from "./PopUpTitle";
import CreateBoardModal from "components/modals/CreateBoardModal";

import { setActiveRightPopUp, clearActiveRightPopUp } from 'actions/header';
import CreateTeamPopup from "./CreateTeamPopup";

class CreatePopup extends React.Component {

    generatePopUpStyles(position) {
        const styles = {};
        switch(position) {
            case "left-menu":
                styles['left'] = "0px";
                break;
            case "right-menu":
                styles['right'] = "0px";
                break;
        }
        return styles;
    }

    createBoardHandler = () => { 
        this.props.setActiveModal(CreateBoardModal);  
        this.props.clearActiveRightPopUp();
     }

    setActiveRightPopup = () => {
        this.props.setActiveRightPopUp(CreateTeamPopup);
    }

    render() {
        return (
            <div className="popup createPopUp" style={this.generatePopUpStyles(this.props.position)}>
                <PopUpTitle title="Create" clearPopup={this.props.clearPopup}/>
                <div className="create-popup-link-section" onClick={this.createBoardHandler}>
                    <span className="create-popup-link-title">Create Board...</span>
                    <span className="create-popup-link-blurb">A board is made up of cards ordered on lists. Use it to manage projects, track information, or organize anything.</span>
                </div>
                <div className="create-popup-link-section" onClick={this.setActiveRightPopup}>
                    <span className="create-popup-link-title">Create Team...</span>
                    <span className="create-popup-link-blurb">A team is a group of boards and people. Use it to organize your company, side hustle, family, or friends.</span>
                </div>
                <div className="create-popup-link-section">
                    <span className="create-popup-link-title">Create Business Team...</span>
                    <span className="create-popup-link-blurb">With Business Class your team has more security, administrative controls, and unlimited Power-Ups.</span>
                </div>
             </div>
        )
    }
}

export default connect(null, { setActiveModal, clearActiveRightPopUp, setActiveRightPopUp })(CreatePopup);

//all going to have piece of state that says whether they are showing their respective popup