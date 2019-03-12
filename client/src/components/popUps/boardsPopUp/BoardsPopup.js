import React from 'react';
import { connect} from 'react-redux';

import "../generic-popup.scss";
import "./boards-pop-up.scss";

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

    renderStarred(){
        const open = this.props.starredBoardsOpen;
        return (
            <div className="boards-popup-starred-container">
                <span className="boards-popup-icon icon-star"></span>
                <span className="boards-popup-foldout-title"></span>
                <span className={`boards-popup-collapse-icon boards-popup-icon ${open ? "icon-minus" : "icon-plus"}`}></span>
            </div>
        )
    }

    // renderRecent() {
    //     if (this.props.recentBoardsOpen)
    // }

    // renderPersonal(){
    //     if (this.props.personalBoardsOpen)
    // }

    render() {
        // const styles = ( this.props.pullPopUp === "left") ? { left: "0px"} : { right: "0px" };


        return (
            <div className="popup boards-popup" style={this.generatePopUpStyles(this.props.position)}>
                <FindBoardsInput />
                <ul className="boards-popup-foldouts-ul">
                    <li className="boards-popup-foldouts-li"></li>
                </ul>
                <div className="boards-popup-starred-container">
                </div>
                <div className="boards-popup-recent-container">
                </div>
                <div className="boards-popup-personal-container">
                </div>
                <ul className="board-popup-links-ul">
                    <li className="boards-popup-links-li"><span>Create new board...</span></li>
                    <li className="boards-popup-links-li"><span>Always keep this menu open.</span></li>
                    <li className="boards-popup-links-li"><span>See closed boards...</span></li>
                </ul>
            </div>
        )
    }
}

const mapStateToProps = ({ boardsPopupShowing: { starredBoardsOpen, recentBoardsOpen, personalBoardsOpen } }) => {
    return {
        starredBoardsOpen,
        recentBoardsOpen, 
        personalBoardsOpen
    }
}

export default connect(mapStateToProps)(BoardsPopup);

//all going to have piece of state that says whether they are showing their respective popup