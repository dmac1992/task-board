import React from 'react'
import styled from 'styled-components';

import BoardSlideMenu from './BoardSlideMenu';

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
    :hover {
        background-color: gray;
    }
`;
const PrivacyTab = styled.div`
    display: flex;
    align-items: center;
    margin-right: 15px;
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

function SingleBoardHeader(props) {
    return (
        <Container>
            <HeadingTab>[2019 T1] SIT302</HeadingTab>
            <StarTab className='icon-star'></StarTab>
            <PrivacyTab className=''>
                <span className='icon-lock' style={{'marginRight': '5px'}}></span>
                <span>Private</span>
            </PrivacyTab>
            <BoardCollaboratorsTab>
                <Collaborator>A</Collaborator>
                <Collaborator>B</Collaborator>
                <Collaborator>C</Collaborator>
            </BoardCollaboratorsTab>
            <InviteButton>
                Invite
            </InviteButton>
            <OpenSlideMenuButton onClick={props.toggleMenu}>Show Menu</OpenSlideMenuButton>
            <MenuContainer>
                <BoardSlideMenu toggleMenu={props.toggleMenu}/>
            </MenuContainer>
        </Container>
    )
}

export default SingleBoardHeader