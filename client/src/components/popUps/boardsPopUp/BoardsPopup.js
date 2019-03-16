import React from 'react';
import { connect} from 'react-redux';

import "../Popup.scss";
import "./BoardsPopup.scss";

import FindBoardsInput from "./FindBoardsInput";

class BoardsPopup extends React.Component {
  

    state = {
        starredBoardsOpen: false,
        recentBoardsOpen: false, 
        personalBoardsOpen: false
    }

    render() {

        return (
            <div className="popup boards-popup" >
                <FindBoardsInput />
                <div className="boards-popup-foldout-section">

                    <div className="boards-popup-section">
                        <div className="boards-popup-title-section">
                            <span className="icon-star boards-popup-section-symbol"></span>
                            <span className="boards-popup-foldout-title">STARRED BOARDS</span>
                            <span className="icon-plus boards-popup-section-toggle"></span>
                        </div>
                        <div className="boards-popup-foldout-content-container">
                        </div>
                    </div>
                    
                    <div className="boards-popup-section">
                        <div className="boards-popup-title-section">
                            <span className="icon-star boards-popup-section-symbol"></span>
                            <span className="boards-popup-foldout-title">RECENT BOARDS</span>
                            <span className="boards-popup-section-toggle">
                                <span className="icon-plus"></span>
                            </span>
                            
                        </div>
                        <div className="boards-popup-foldout-content-container">
                        </div>
                    </div>

                    <div className="boards-popup-section">
                        <div className="boards-popup-title-section">
                            <span className="icon-star boards-popup-section-symbol"></span>
                            <span className="boards-popup-foldout-title">PERSONAL BOARDS</span>
                            <span className="icon-plus boards-popup-section-toggle"></span>
                        </div>
                        <div className="boards-popup-foldout-content-container">
                        </div>
                    </div>

                    <ul className="boards-popup-links-ul">
                        <li className="boards-popup-links-li">Create new board...</li>
                        <li className="boards-popup-links-li">Always keep this menu open</li>
                        <li className="boards-popup-links-li">See closed boards...</li>
                    </ul>

                </div>
             
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