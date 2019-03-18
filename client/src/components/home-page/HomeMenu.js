import React from 'react'
import HomeMenuPopup from './HomeMenuPopup';
import CreateTeamPopup from 'components/popups/CreateTeamPopup';

import "./home-menu.scss";

//will get passed home menu popup component
const HomeMenu = () =>{
    return (
      <div className="home-menu">
        <ul className="home-menu-ul">
            <li className="home-menu-li">
                <span className="icon-page-multiple home-menu-icon"></span>
                <span>Boards</span>
            </li>
            <li className="home-menu-li">
                <span className="icon-home home-menu-icon"></span>
                <span>Home</span>
            </li>
            <span className="home-menu-teams-title">TEAMS</span>
            <li className="home-menu-li">
                <span className="icon-plus home-menu-icon"></span>
                <span >Create a team</span>
            </li>
        </ul>
        <HomeMenuPopup Popup={CreateTeamPopup}/>
      </div>
    )

}

export default HomeMenu;
