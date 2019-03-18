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
        const { starredBoardsOpen, recentBoardsOpen, personalBoardsOpen } = this.state;
        return (
            <div className="popup boards-popup" >
                <FindBoardsInput />
                <div className="boards-popup-foldout-section">
                    <div className="boards-popup-section">
                        <div className="boards-popup-title-section">
                            <span className="icon-star boards-popup-section-symbol"></span>
                            <span className="boards-popup-foldout-title">STARRED BOARDS</span>
                            <span className="boards-popup-section-toggle">
                                <span className={starredBoardsOpen ? "icon-minus" : "icon-plus"} onClick={() => this.setState({starredBoardsOpen: !starredBoardsOpen})}></span>
                            </span>
                        </div>
                        { starredBoardsOpen ? (
                            <div className="boards-popup-foldout-content-container">
                                <h1>Starred board Content</h1>
                            </div>
                        ) : null}
                    </div>
                    
                    <div className="boards-popup-section">
                        <div className="boards-popup-title-section">
                            <span className="icon-clock-o boards-popup-section-symbol"></span>
                            <span className="boards-popup-foldout-title">RECENT BOARDS</span>
                            <span className="boards-popup-section-toggle">
                                <span className={recentBoardsOpen ? "icon-minus" : "icon-plus"} onClick={() => this.setState({recentBoardsOpen: !recentBoardsOpen})}></span>
                            </span>
                        </div>
                        { recentBoardsOpen ? (
                            <div className="boards-popup-foldout-content-container">
                                <h1>Recent boards Content</h1>
                            </div>
                        ) : null}
                    </div>

                    <div className="boards-popup-section">
                        <div className="boards-popup-title-section">
                            <span className="icon-page-multiple boards-popup-section-symbol"></span>
                            <span className="boards-popup-foldout-title">PERSONAL BOARDS</span>
                            <span className="boards-popup-section-toggle">
                                <span className={personalBoardsOpen ? "icon-minus" : "icon-plus"} onClick={() => this.setState({personalBoardsOpen: !personalBoardsOpen})}></span>
                            </span>
                        </div>
                        { personalBoardsOpen ? (
                            <div className="boards-popup-foldout-content-container">
                                <h1>Personal boards Content</h1>
                            </div>
                        ) : null}
                        
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

//needs to request the users starred / recent / personal boards. 
const mapStateToProps = () => {
    
}

export default connect(mapStateToProps)(BoardsPopup);

//all going to have piece of state that says whether they are showing their respective popup