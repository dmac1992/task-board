import React from 'react';

import "./generic-popup.scss";
import "./create-popup.scss";

import PopUpTitle from "./PopUpTitle";


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

    render() {
        return (
            <div className="popup createPopUp" style={this.generatePopUpStyles(this.props.position)}>
                <PopUpTitle title="Create" position={this.props.position}/>
                <div className="create-popup-link-section">
                    <span className="create-popup-link-title">Create Board...</span>
                    <span className="create-popup-link-blurb">A board is made up of cards ordered on lists. Use it to manage projects, track information, or organize anything.</span>
                </div>
                <div className="create-popup-link-section">
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

export default CreatePopup;

//all going to have piece of state that says whether they are showing their respective popup