import React from 'react';

import "../generic-popup.scss";
import "./boardsPopUp.scss";

import FindBoardsInput from "./FindBoardsInput";

class BoardsPopup extends React.Component {
    
    generatePopUpStyles(position) {
        const styles = {};
        switch(position) {
            case "left-menu":
                styles['left'] = "0px";
            case "right-menu":
                styles['right'] = "0px";
        }
        return styles;
    }

    render() {
        // const styles = ( this.props.pullPopUp === "left") ? { left: "0px"} : { right: "0px" };

        return (
            <div className="popup boardsPopUp" style={this.generatePopUpStyles(this.props.position)}>
                <FindBoardsInput />
                <div className="starredBoards">
                </div>
                <div className="personalBoards">
                </div>
                <div><span>create new board</span></div>
                <div><span>always keep this menu open</span></div>
                <div><span>see closed boards...</span></div>
            </div>
        )
    }
}

export default BoardsPopup;

//all going to have piece of state that says whether they are showing their respective popup