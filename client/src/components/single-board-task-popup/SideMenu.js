import React from 'react'
import styled from 'styled-components';

//import floating popups to pass into action handler
import AddMembersFloatingPopup from 'components/floated-popup-system/single-board-task-popup/AddMembersFloatingPopup';
import DueDateFloatingPopup from 'components/floated-popup-system/single-board-task-popup/DueDateFloatingPopup';
import AddLabelsFloatingPopup from 'components/floated-popup-system/single-board-task-popup/AddLabelsFloatingPopup'; 
import AddChecklistFloatingPopup from 'components/floated-popup-system/single-board-task-popup/AddChecklistFloatingPopup';

const Container = styled.div`
`;
const MenuHeader = styled.span`
    color: #6b778c;
    display: block;
    margin-bottom: 5px;
`;
const AddMenu = styled.ul`
    display: flex;
    flex-direction: column;
`;
const AddButton = styled.li`
    padding: 6px 12px;
    background-color: #ebecf0;
    cursor: pointer;
    height: 32px;
    margin-bottom: 8px;
    span {
        margin-right: 5px;
    }
    :hover {
        color: #091e42;
        background-color: #dfe1e6;
    }
`;

class SideMenu extends React.Component {

    constructor() {
        super();
        this.addButtonRef = React.createRef();
        this.addLabelsRef = React.createRef();
        this.addChecklistRef = React.createRef();
        this.addDuedateRef = React.createRef();
    }

    renderAddUsersPopup = () => {
        this.props.MenuFloatingPopup(AddMembersFloatingPopup, this.addButtonRef);
    }

    renderAddLabelsPopup = () => {
        this.props.MenuFloatingPopup(AddLabelsFloatingPopup, this.addLabelsRef);
    }

    renderAddChecklistPopup = () => {
        this.props.MenuFloatingPopup(AddChecklistFloatingPopup, this.addChecklistRef);
    }

    renderAddDueDatePopup = () => {
        this.props.MenuFloatingPopup(DueDateFloatingPopup, this.addDuedateRef)
    }

    render() {
      
        return (
            <Container>
                <MenuHeader>ADD TO CARD</MenuHeader>
                <AddMenu>
                    <AddButton ref={this.addButtonRef} onClick={this.renderAddUsersPopup}>
                        <span className='icon-user' /> 
                        <span>Members</span>
                    </AddButton>
                    <AddButton ref={this.addLabelsRef} onClick={this.renderAddLabelsPopup}>
                        <span className='icon-tag' /> 
                        <span>Labels</span>
                    </AddButton>
                    <AddButton ref={this.addChecklistRef} onClick={this.renderAddChecklistPopup}>
                        <span className='icon-check-square-o' /> 
                        <span>Checklist</span>
                    </AddButton>
                    <AddButton ref={this.addDuedateRef} onClick={this.renderAddDueDatePopup}>
                        <span className='icon-clock-o' /> 
                        <span>Due Date</span>
                    </AddButton>
                </AddMenu>
                
            </Container>
        )
    }
    
}

export default SideMenu
