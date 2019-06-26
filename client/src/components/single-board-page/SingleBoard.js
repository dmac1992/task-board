import React, { Component } from 'react'
import styled from 'styled-components';
import { connect } from 'react-redux';

import SingleBoardHeader from './SingleBoardHeader';
import SprintContainer from './SprintContainer';

//action creators
import { setFloatingPopup } from 'actions/floatingPopups';

//floating popup reference
import BoardInviteFloatingPopup from 'components/single-board-page/BoardInviteFloatingPopup';
import BoardAddTeamFloatingPopup from 'components/single-board-page/BoardAddTeamFloatingPopup';
import BoardCreateTeamFloatingPopup from 'components/single-board-page/BoardCreateTeamFloatingPopup';
import BoardChangePrivacyFloatingPopup from 'components/single-board-page/BoardChangePrivacyFloatingPopup';
import BoardChangeAdminLevelFloatingPopup from './BoardChangeAdminLevelFloatingPopup';


const Container = styled.div`
    height: calc(100vh - 35px);
`;

const BoardsCanvas = styled.div`
    position: relative;
    overflow-x: scroll;
    background-color: purple;
    height: calc(100% - 34px);
    display: flex;
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

    inviteToBoardPopup = () => {
        console.log('invite to board popup');
        this.props.setFloatingPopup(BoardInviteFloatingPopup , this.inviteToBoardButtonRef);
    }

    addTeamPopup = () => {
        console.log('add team popup');
        this.props.setFloatingPopup(BoardAddTeamFloatingPopup, this.addTeamButtonRef);
    }

    createTeamPopup = () => {
        console.log('create team popup');
        this.props.setFloatingPopup(BoardCreateTeamFloatingPopup, this.addTeamButtonRef);
    }

    changePrivacySettings = () => {
        this.props.setFloatingPopup(BoardChangePrivacyFloatingPopup, this.privacySettingsButtonRef);
    }

    changeUserPermissions = () => {
        console.log('change user permissions single board header');
        this.props.setFloatingPopup(BoardChangeAdminLevelFloatingPopup, this.userAdminButtonRef);
    }



    render() {
        return (
            <Container>
                <SingleBoardHeader toggleMenu={this.toggleMenu} 
                    inviteToBoardPopup={this.inviteToBoardPopup}
                    inviteToBoardButtonRef={this.inviteToBoardButtonRef}
                    addTeamPopup={this.addTeamPopup}
                    addTeamButtonRef={this.addTeamButtonRef}
                    createTeamPopup={this.createTeamPopup}
                    privacySettingsButtonRef={this.privacySettingsButtonRef}
                    changePrivacySettings={this.changePrivacySettings}
                    changeUserPermissions={this.changeUserPermissions}
                    userAdminButtonRef={this.userAdminButtonRef}
                     />
                <BoardsCanvas>
                    <SprintContainer />
                    <SprintContainer />
                    <SprintContainer />
                    <SprintContainer />
                    <SprintContainer />
                    <SprintContainer />
                    <SprintContainer />
                    <SprintContainer />
                    <SprintContainer />
                    <SprintContainer />
                    <SprintContainer />
                    <SprintContainer />
                </BoardsCanvas>
            </Container>
        )
    }
}

export default connect(null, { setFloatingPopup })(SingleBoard);
