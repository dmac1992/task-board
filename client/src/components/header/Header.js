import React from 'react';
import { connect } from 'react-redux'
import { compose } from 'redux';
import { withRouter } from "react-router";
import styled from 'styled-components';

import HeaderButton from './HeaderButton';
import HeaderSearch from './HeaderSearch';
import LeftPopUp from './LeftPopUp';
import RightPopUp from './RightPopUp';

//popups
import BoardsPopup from 'components/popups/BoardsPopup';
import CreatePopup from 'components/popups/CreatePopup';
import NotificationsPopup from 'components/popups/NotificationsPopup';
import MenuPopup from 'components/popups/MenuPopup';

import * as headerActions from 'actions/header';

//icons
import 'styles/icons.css';


const HeaderContainer =  styled.div`
    background-color: #BB342F;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2.5px;
    height: 35px;

`;
//


//this is not working as intended 
const HeaderButtonGroup = styled.div`
    display: flex;
    align-items: center;
    height: 30px;
    position: relative;
    > * {
        margin-left: 2.5px;
        margin-right: 2.5px;
    }
    :first-child {
        margin-left: 0px;
    }
    :last-child {
        margin-right: 0px;
    }
`;



class Header extends React.Component {

    constructor() {
        super();
        document.addEventListener("click", (e) => {
            //if click outside header container clear all header popups.
            let headerContainer = document.querySelector(".header-container");
            //check if redux store is already null
            if (!headerContainer.contains(e.target)) {
                this.props.setActiveRightPopUp(null);
                this.props.setActiveLeftPopUp(null);
            }
        }, false);
    }

    navigateHome = () => {
        this.props.history.push("/");
    }

    render() {
        //current active popups on store
        const { activeLeftPopUp, activeRightPopUp } = this.props;
        //set current active headerpopups
        const {setActiveLeftPopUp, setActiveRightPopUp } = this.props;
        return (
            <HeaderContainer className="header-container" >
                <HeaderButtonGroup>
                    <HeaderButton icon="icon-home"  onClick={this.navigateHome}></HeaderButton>
                    <HeaderButton text="Boards" onClick={() => setActiveLeftPopUp(BoardsPopup)} icon="icon-page-multiple" />
                    <HeaderSearch />
                    {activeLeftPopUp ? <LeftPopUp Popup={activeLeftPopUp} clearPopup={() => setActiveLeftPopUp(null)} /> : null}
                </HeaderButtonGroup>
                <HeaderButtonGroup>
                    <HeaderButton  onClick={() => setActiveRightPopUp(CreatePopup)} text="Create" icon="icon-plus"   />
                    <HeaderButton  onClick={() => setActiveRightPopUp(NotificationsPopup)} icon="icon-bell"/>
                    <HeaderButton  onClick={() => setActiveRightPopUp(MenuPopup)} icon="icon-user"/>
                    {activeRightPopUp ? <RightPopUp Popup={activeRightPopUp} clearPopup={() => setActiveRightPopUp(null)} /> : null}
                </HeaderButtonGroup>
             </HeaderContainer>
        )
    }
}

const mapStateToProps = (state) => ({ ...state.header });

const enhance = compose(
    withRouter,
    connect(mapStateToProps, { ...headerActions })
);

export default enhance(Header); 
