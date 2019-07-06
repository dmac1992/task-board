import React, { Component } from 'react'
import styled from 'styled-components';
import { connect } from 'react-redux';

import CloneSprintFloatingPopup from 'components/floated-popup-system/single-board-page/CloneSprintFloatingPopup';
//Move List Popup
//Sort By Popup
//Move All Cards in List Popup
//Archive All Cards in List Popup
//Archive List Popup

//action handlers

const Container = styled.div`
    padding: 5px;
    width: 304px;
    position: absolute;
    background-color: white;
    box-shadow: 0 8px 16px -4px rgba(9,30,66,.25), 0 0 0 1px rgba(9,30,66,.08);
`;

const Title = styled.div`
    height: 32px;
    line-height: 32px;
    text-align: center;
    border-bottom: 1px solid rgba(9,30,66,.13);
    padding-bottom: 10px;
    margin-bottom: 10px;

`;

const CloseIcon = styled.span`
    position: absolute;
    top: 10px;
    right: 10px;
`;

const Menu = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 250px;
    padding: 5px;
`;
const ListItem = styled.li`
    cursor: pointer;
    :hover { 
        background-color: #e4f0f6 
    }
    padding: 5px;
`;
const MenuDivider = styled.hr`
    margin-top: 3px;
    margin-bottom: 3px;
`;

export class SprintActionsFloatingPopup extends Component {

    constructor(props) {
        super(props);
        this.state = {
            sprint: this.props.sprints.find((sprint) => sprint.id === this.props.sprintID)
        }
    }


    addCard = () => {}
    
    copyListFloatingPopup = () => {
        this.props.setFloatingPopupInplace(CloneSprintFloatingPopup, { sprintID: this.props.sprintID });
    }
    
    moveList = () => {}
    watchList = () => {}
    moveAllListCards = () => {}
    archiveAllListCards = () => {}
    archiveList = () => {}


    render() {
        const { coords, clearFloatingPopup} = this.props;
        return (
            <Container style={coords}>
                <Title>Sprint Actions</Title>
                <CloseIcon className='icon-times' onClick={clearFloatingPopup} />
                <Menu>
                    <ListItem>Add Card...</ListItem>
                    <ListItem onClick={this.copyListFloatingPopup}>Copy list...</ListItem>
                    <ListItem>Move list...</ListItem>
                    <ListItem>Watch</ListItem>
                    <MenuDivider />
                    <ListItem>Sort By...</ListItem>
                    <MenuDivider />
                    <ListItem>Move All Cards in this list...</ListItem>
                    <ListItem>Archive All Cards in this list</ListItem>
                    <MenuDivider />
                    <ListItem></ListItem>
                </Menu>
            </Container>
        )

    }


}

const mapStateToProps = (state, ownProps) => {
    return {
        sprints: state.sprints
    }
}

export default connect(mapStateToProps, {})(SprintActionsFloatingPopup);
