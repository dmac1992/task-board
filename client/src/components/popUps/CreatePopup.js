import React from 'react';

import "./header-popup.scss";
import "./createPopUp.scss";

import PopUpTitle from "./PopUpTitle";


class CreatePopup extends React.Component {

    render() {
        const styles = ( this.props.pullPopUp === "left") ? { left: "0px"} : { right: "0px" };
        return (
            <div className="popup createPopUp" style={styles}>
                <PopUpTitle title="Create"/>
                <div className="createPopUp-link-section">
                    <span className="createPopUp-link-title">Create Board...</span>
                    <span className="createPopUp-link-blurb">A board is made up of cards ordered on lists. Use it to manage projects, track information, or organize anything.</span>
                </div>
                <div className="createPopUp-link-section">
                    <span className="createPopUp-link-title">Create Team...</span>
                    <span className="createPopUp-link-blurb">A team is a group of boards and people. Use it to organize your company, side hustle, family, or friends.</span>
                </div>
                <div className="createPopUp-link-section">
                    <span className="createPopUp-link-title">Create Business Team...</span>
                    <span className="createPopUp-link-blurb">With Business Class your team has more security, administrative controls, and unlimited Power-Ups.</span>
                </div>
             </div>
        )
    }
}

export default CreatePopup;

//all going to have piece of state that says whether they are showing their respective popup