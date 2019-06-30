import React from 'react'
import styled from 'styled-components';

import BoardSlideMenuParent from './single-board-page-slide-menu/BoardSlideMenuParent';
import { access } from 'fs';

const Container = styled.div`
    display: flex;
    align-items: center;
    padding: 2px; 5px;
    background-color: #f97f59;
    position: relative;
  
`;

const HeadingTab = styled.div`
    margin-right: 10px
    border-radius: 3px;
    :hover {
        background-color: gray;
    }
`;
const StarTab = styled.div`
    margin-right: 20px;
    cursor: pointer;
    padding: 5px;
    :hover {
        background-color: gray;
    }
`;

const TeamTab = styled.div`
    display: flex;
    align-items: center;
    margin-right: 15px;
    cursor: pointer;
    padding: 5px;
    :hover {
        background-color: rgba(0,0,0,.1);
    }
`;
const PrivacyTab = styled.div`
    display: flex;
    align-items: center;
    margin-right: 15px;
    padding: 5px;
    cursor: pointer;
    :hover {
        background-color: rgba(0,0,0,.1);
    }
    
`;
const BoardCollaboratorsTab = styled.div`
    display: flex;
    align-items: center;
    margin-right: 15px;
`;
const Collaborator = styled.span`
    border-radius: 50%;
    background-color: #dfe1e6;
    display: block;
    width: 28px;
    height: 28px;
    text-align: center;
    line-height: 28px;
    cursor: pointer;
`;

const InviteButton = styled.div`
    line-height: 30px;
    height: 30px;
    text-align: center;
    padding-left: 5px;
    padding-right: 5px;
    background-color: green;
    border-radius: 5px;
    cursor: pointer;
`;

const OpenSlideMenuButton = styled.div`
    line-height: 30px;
    height: 30px;
    text-align: center;
    padding-left: 5px;
    padding-right: 5px;
    background-color: green;
    border-radius: 5px;
    cursor: pointer;
    margin-left: auto;
`;

const MenuContainer = styled.div`
    position: relative;
    height: 34px;
`;

const LockIcon = styled.span`
    color: red;
`;

const PublicIcon = styled.span`
    color: green;
`;

function renderPrivacyIcon(accessibilityLevel)  {
    if ( accessibilityLevel === 'private') {
        return (
            <LockIcon className='icon-lock' />
        )
    } else {
        return <PublicIcon className='icon-world' />
    }
}

function SingleBoardHeader(props) {
    const { board } = props; 
    return (
        <Container>
            <HeadingTab>{board.name}</HeadingTab>
            <StarTab className='icon-star'></StarTab>
            <TeamTab onClick={props.addTeamPopup}   ref={props.addTeamButtonRef}>
                <span>Personal</span>
            </TeamTab>
            <PrivacyTab className='' ref={props.privacySettingsButtonRef} onClick={props.changePrivacySettings}>
                {renderPrivacyIcon(board.accessibilityLevel)}
                <span>{board.accessibilityLevel}</span>
            </PrivacyTab>
            <BoardCollaboratorsTab>
                <Collaborator ref={props.userAdminButtonRef} onClick={props.changeUserPermissions}>A</Collaborator>
                <Collaborator>B</Collaborator>
                <Collaborator>C</Collaborator>
            </BoardCollaboratorsTab>
            <InviteButton onClick={props.inviteToBoardPopup} ref={props.inviteToBoardButtonRef}>
                Invite
            </InviteButton>
            <OpenSlideMenuButton onClick={props.toggleMenu}>Show Menu</OpenSlideMenuButton>
            <MenuContainer>
                <BoardSlideMenuParent toggleMenu={props.toggleMenu} setFloatingPopup={props.setFloatingPopup}/>
            </MenuContainer>
        </Container>
    )
}

export default SingleBoardHeader
