import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import variables from 'variables';
import HomeMenuPopup from './HomeMenuPopup';
import CreateTeamPopup from 'components/popups/CreateTeamPopup';

// import "./home-menu.scss";

const HomeMenuContainer = styled.div`
    width: 200px;
    font-family: ${variables.primaryFont}
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

const HomeMenuListItemLink = styled(Link)`
    padding: 5px;
    padding-left: 35px;
    position: relative;
    margin-bottom: 3px;
    border-radius: 6px;
    cursor: pointer;
    display: block;
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
class HomeMenu extends React.Component  {
  
    constructor() {
        super();
            document.addEventListener("click", this.clickOutsideHeader, false);
      }

      componentWillUnmount() {
            document.removeEventListener("click", this.clickOutsideHeader);
      }

      clickOutsideHeader = (e) => {
        let homeMenu = document.querySelector("#home-menu");
        if (!homeMenu.contains(e.target)) {
            this.setState({ createTeamPopupShowing: null})
        }
    }
    
    state = {
        createTeamPopupShowing: false
    }

    toggleHome = () => {
        this.setState({ createTeamPopupShowing: !this.state.createTeamPopupShowing });
    }
    clearHomePopup = () =>  {
        this.setState({createTeamPopupShowing: null})
    }

    render() {
        return (
            <HomeMenuContainer id="home-menu">
              <HomeMenuList>
                  <HomeMenuListItemLink to="/boards">
                      <HomeMenuIcon className="icon-page-multiple home-menu-icon"></HomeMenuIcon>
                      <span>Boards</span>
                  </HomeMenuListItemLink>
                  <HomeMenuListItemLink to="/">
                      <HomeMenuIcon className="icon-home home-menu-icon"></HomeMenuIcon>
                      <span>Home</span>
                  </HomeMenuListItemLink>
                  <HomeMenuTeamsTitle>TEAMS</HomeMenuTeamsTitle>
                  <HomeMenuListItem onClick={this.toggleHome}>
                      <HomeMenuIcon className="icon-plus home-menu-icon"></HomeMenuIcon>
                      <span >Create a team</span>
                  </HomeMenuListItem>
              </HomeMenuList>
              {this.state.createTeamPopupShowing ? <HomeMenuPopup Popup={CreateTeamPopup} clearPopup={this.clearHomePopup}/> : null}
              
            </HomeMenuContainer>
          )
        }
    
}

export default HomeMenu;
