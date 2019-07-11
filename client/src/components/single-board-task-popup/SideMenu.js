import React from 'react'
import styled from 'styled-components';
import { connect } from 'react-redux';

import { setFloatingPopup } from 'actions/floatingPopups';
import  { toggleWatchTask, archiveTask , unarchiveTask} from 'actions/tasks';


//import floating popups to pass into action handler
import AddMembersFloatingPopup from 'components/floated-popup-system/single-board-task-popup/AddMembersFloatingPopup';
import DueDateFloatingPopup from 'components/floated-popup-system/single-board-task-popup/DueDateFloatingPopup';
import AddLabelsFloatingPopup from 'components/floated-popup-system/single-board-task-popup/AddLabelsFloatingPopup'; 
import AddChecklistFloatingPopup from 'components/floated-popup-system/single-board-task-popup/AddChecklistFloatingPopup';
import MoveTaskFloatingPopup from 'components/floated-popup-system/single-board-task-popup/MoveTaskFloatingPopup';

const Container = styled.div`
`;
const MenuHeader = styled.span`
    color: #6b778c;
    display: block;
    margin-bottom: 5px;
`;
const Menu = styled.ul`
    display: flex;
    flex-direction: column;
`;
const Button = styled.li`
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
        this.ButtonRef = React.createRef();
        this.addLabelsRef = React.createRef();
        this.addChecklistRef = React.createRef();
        this.addDuedateRef = React.createRef();

        this.moveButtonRef = React.createRef();
        this.copyButtonRef = React.createRef();
    
    }

    renderAddUsersPopup = () => {
        this.props.setFloatingPopup(AddMembersFloatingPopup, this.ButtonRef);
    }

    renderAddLabelsPopup = () => {
        this.props.setFloatingPopup(AddLabelsFloatingPopup, this.addLabelsRef);
    }

    renderAddChecklistPopup = () => {
        this.props.setFloatingPopup(AddChecklistFloatingPopup, this.addChecklistRef);
    }

    renderAddDueDatePopup = () => {
        this.props.setFloatingPopup(DueDateFloatingPopup, this.addDuedateRef)
    }

    renderMoveCardPopup = () => {
        this.props.setFloatingPopup(MoveTaskFloatingPopup, this.moveButtonRef, { currentTask: this.props.currentTask })
    }
    
    renderCopyCardPopup = () => {}
    toggleWatchTask = () => {
        this.props.toggleWatchTask(this.props.currentTask.ID);
    }
    archiveTask = () => {
        this.props.archiveTask(this.props.currentTask.ID);
     }
     unarchiveTask = () => {
         this.props.unarchiveTask(this.props.currentTask.ID);
     }

    renderSharePopup = () => { }


    renderArchiveButton = () => {
        if ( this.props.currentTask.archived ) {
            return (
               <Button onClick={this.unarchiveTask}>
                    <span className='icon-circle' />
                    <span>Send to board</span>
               </Button>
            )
        } else {
            return (
                <Button onClick={this.archiveTask}>
                    <span className='icon-archive' />
                    <span>Archive</span>
                </Button>
            )
        }
    }
    

    render() {
      
        return (
            <Container>
                <MenuHeader>ADD TO CARD</MenuHeader>
                <Menu>
                    <Button ref={this.ButtonRef} onClick={this.renderAddUsersPopup}>
                        <span className='icon-user' /> 
                        <span>Members</span>
                    </Button>
                    <Button ref={this.addLabelsRef} onClick={this.renderAddLabelsPopup}>
                        <span className='icon-tag' /> 
                        <span>Labels</span>
                    </Button>
                    <Button ref={this.addChecklistRef} onClick={this.renderAddChecklistPopup}>
                        <span className='icon-check-square-o' /> 
                        <span>Checklist</span>
                    </Button>
                    <Button ref={this.addDuedateRef} onClick={this.renderAddDueDatePopup}>
                        <span className='icon-clock-o' /> 
                        <span>Due Date</span>
                    </Button>
                </Menu>
                <Menu>
                    {/*TODO - get icon to replace right arrow html code*/}
                    <Button ref={this.moveButtonRef} onClick={this.renderMoveCardPopup}>
                        <span>&#8594;</span>
                        <span>Move</span>
                    </Button>
                    <Button>
                        <span className='icon-page-multiple'/>
                        <span>Copy</span>
                    </Button>
                    <Button onClick={this.toggleWatchTask}>
                        <span className='icon-eye' />
                        <span>Watch</span>
                    </Button>
                    {this.renderArchiveButton()}
                    <Button>
                        <span className='icon-share' />
                        <span>Share</span>
                    </Button>
                </Menu>
            </Container>
        )
    }
    
}

export default connect(null, { setFloatingPopup, toggleWatchTask, archiveTask , unarchiveTask})(SideMenu);
