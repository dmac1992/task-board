import React from 'react';

import "./generic-popup.scss";
import "./menu-popup.scss";
import PopUpTitle from "./PopUpTitle";


class MenuPopup extends React.Component {

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
            <div className="popup menu-popup" style={this.generatePopUpStyles(this.props.position)}>
                <PopUpTitle title="User name" position={this.props.position} />
                <div className="menu-popup-section">
                    <span className="menu-popup-link">Profile</span>
                    <span className="menu-popup-link">Cards</span>
                    <span className="menu-popup-link">Settings</span>
                </div>
                <div className="menu-popup-section">
                    <span className="menu-popup-link">Help</span>
                    <span className="menu-popup-link">Shortcuts</span>
                    <span className="menu-popup-link">Change Language...</span>
                </div>
                <div className="menu-popup-section">
                    <span className="menu-popup-link">Log Out</span>
                </div>
            </div>
        )
    }
}

export default MenuPopup;

//all going to have piece of state that says whether they are showing their respective popup