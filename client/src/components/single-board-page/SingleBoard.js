import React, { Component } from 'react'
import styled from 'styled-components';
import { connect } from 'react-redux';

import SingleBoardHeader from './SingleBoardHeader';
import SprintContainer from './SprintContainer';
import AddSprintColumn from './AddSprintColumn';

//action creators
import { setFloatingPopup } from 'actions/floatingPopups';

//floating popup reference
import BoardHeaderInviteFloatingPopup from 'components/floated-popup-system/single-board-header/BoardHeaderInviteFloatingPopup';
import BoardHeaderAddTeamFloatingPopup from 'components/floated-popup-system/single-board-header/BoardHeaderAddTeamFloatingPopup';
import BoardHeaderCreateTeamFloatingPopup from 'components/floated-popup-system/single-board-header/BoardHeaderCreateTeamFloatingPopup';
import BoardHeaderChangePrivacyFloatingPopup from 'components/floated-popup-system/single-board-header/BoardHeaderChangePrivacyFloatingPopup';
import BoardHeaderChangeAdminLevelFloatingPopup from 'components/floated-popup-system/single-board-header/BoardHeaderChangeAdminLevelFloatingPopup';
import CloseBoardFloatingPopup from 'components/floated-popup-system/slide-out-menu/SlideCloseBoardFloatingPopup';


const Container = styled.div`
    height: calc(100vh - 35px);
`;

const BoardsCanvas = styled.div`
    position: relative;
    overflow-x: scroll;
    background-color: purple;
    height: calc(100% - 34px);
    display: flex;
    padding-top: 3px;
`;



class SingleBoard extends Component {

    constructor(props) {
        super(props);
        this.inviteToBoardButtonRef = React.createRef();
        this.addTeamButtonRef = React.createRef();
        this.privacySettingsButtonRef = React.createRef();
        this.userAdminButtonRef = React.createRef();
    }

    state = {
        MenuOpen: false
    }

    toggleMenu = () => {
        let SlideMenu = document.querySelector('#board-slide-menu');
        if (this.state.MenuOpen) {
            SlideMenu.style.right = '-350px';
            this.setState({'MenuOpen': false});
        } else {
            SlideMenu.style.right = '0px';
            this.setState({'MenuOpen': true});
        }
    }

    inviteToBoardHeaderPopup = () => {
        console.log('invite to board popup');
        this.props.setFloatingPopup(BoardHeaderInviteFloatingPopup , this.inviteToBoardHeaderButtonRef);
    }

    addTeamPopup = () => {
        console.log('add team popup');
        this.props.setFloatingPopup(BoardHeaderAddTeamFloatingPopup, this.addTeamButtonRef);
    }

    createTeamPopup = () => {
        console.log('create team popup');
        this.props.setFloatingPopup(BoardHeaderCreateTeamFloatingPopup, this.addTeamButtonRef);
    }

    changePrivacySettings = () => {
        this.props.setFloatingPopup(BoardHeaderChangePrivacyFloatingPopup, this.privacySettingsButtonRef);
    }

    changeUserPermissions = () => {
        console.log('change user permissions single board header');
        this.props.setFloatingPopup(BoardHeaderChangeAdminLevelFloatingPopup, this.userAdminButtonRef);
    }

    closeBoard = () => {
        this.props.setFloatingPopup(CloseBoardFloatingPopup, )
    }


    render() {
        return (
            <Container>
                <SingleBoardHeader 
                    toggleMenu={this.toggleMenu} 
                    inviteToBoardPopup={this.inviteToBoardPopup}
                    inviteToBoardButtonRef={this.inviteToBoardButtonRef}
                    addTeamPopup={this.addTeamPopup}
                    addTeamButtonRef={this.addTeamButtonRef}
                    createTeamPopup={this.createTeamPopup}
                    privacySettingsButtonRef={this.privacySettingsButtonRef}
                    changePrivacySettings={this.changePrivacySettings}
                    changeUserPermissions={this.changeUserPermissions}
                    userAdminButtonRef={this.userAdminButtonRef}
                    setFloatingPopup={this.props.setFloatingPopup}

                     />
                <BoardsCanvas>
                    <SprintContainer />
                    <AddSprintColumn />
                </BoardsCanvas>
            </Container>
        )
    }
}

export default connect(null, { setFloatingPopup })(SingleBoard);
