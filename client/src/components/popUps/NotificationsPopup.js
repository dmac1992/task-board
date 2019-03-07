import React from 'react';

import "./generic-popup.scss";
import "./notifications-popup.scss";
import PopUpTitle from "./PopUpTitle";

class NotificationsPopup extends React.Component {

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
            <div className="popup notifications-popup" style={this.generatePopUpStyles(this.props.position)}>
                <PopUpTitle title="Notifications" position={this.props.position} />
                <div className="notifications-popup-feed"></div>
                <span className="notifications-popup-email-frequency notifications-popup-link">Change notification email frequency</span>
                <span className="notifications-popup-desktop-notifications notifications-popup-link">Allow desktop notifications</span>
            </div>
        )
    }
}

export default NotificationsPopup;

//all going to have piece of state that says whether they are showing their respective popup