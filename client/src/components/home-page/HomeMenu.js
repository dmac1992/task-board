import React from 'react'
import styled from 'styled-components';

import HomeMenuPopup from './HomeMenuPopup';
import CreateTeamPopup from 'components/popups/CreateTeamPopup';

// import "./home-menu.scss";

const HomeMenuContainer = styled.div`
    width: 200px;
    margin-top: 50px;
`;

const HomeMenuList = styled.ul`
    list-style-type: none;
`;

const HomeMenuListItem = styled.li`
    padding: 5px;
    padding-left: 35px;
    position: relative;
    margin-bottom: 3px;
    border-radius: 6px;
    cursor: pointer;
    &:hover {
        background-color: #BB342F;
        color: #DDA448;
    }
`;

const HomeMenuIcon = styled.span`
    position: absolute;
    left: 5px;
    top: 7px;
`;

const HomeMenuTeamsTitle = styled.span`
    margin-top: 10px;
    display: block;
    margin-bottom: 10px;
    padding: 5px;
`;


//will get passed home menu popup component
const HomeMenu = () =>{
    return (
      <HomeMenuContainer>
        <HomeMenuList>
            <HomeMenuListItem>
                <HomeMenuIcon className="icon-page-multiple home-menu-icon"></HomeMenuIcon>
                <span>Boards</span>
            </HomeMenuListItem>
            <HomeMenuListItem>
                <HomeMenuIcon className="icon-home home-menu-icon"></HomeMenuIcon>
                <span>Home</span>
            </HomeMenuListItem>
            <HomeMenuTeamsTitle>TEAMS</HomeMenuTeamsTitle>
            <HomeMenuListItem>
                <HomeMenuIcon className="icon-plus home-menu-icon"></HomeMenuIcon>
                <span >Create a team</span>
            </HomeMenuListItem>
        </HomeMenuList>
        <HomeMenuPopup Popup={CreateTeamPopup}/>
      </HomeMenuContainer>
    )

}

export default HomeMenu;
