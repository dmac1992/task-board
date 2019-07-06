import React, { Component } from 'react'
import styled from 'styled-components';
import { connect } from 'react-redux';
import _ from 'lodash';
import uniqid from 'uniqid';

//action handlers
import { cloneSprint } from 'actions/sprints';

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

const SprintNameTextArea = styled.textarea`
    padding: 7px;
    margin-bottom: 5px;
    width: 100%;
`

const SaveButton = styled.button`
    padding: 7px;
    color: white;
    background-color: green;
`;


export class CloneSprintFloatingPopup extends Component {

    constructor() {
        super();
        this.state = {
            sprintName: ''
        }
    } 

    sprintNameChangeHandler = (e) => this.setState({sprintName: e.target.value})

    cloneSprint = () => {

        const newSprintID = uniqid();
        const clonedSprint = this.getClonedSprint(newSprintID);
        const clonedTasks = this.getClonedTasks(newSprintID);
        const clonedComments = this.getClonedComments(clonedTasks);
        const clonedActivities = this.getClonedActivities(clonedTasks);
        const clonedChecklist = this.getClonedChecklists(clonedTasks);
        const clonedChecklistItems = this.getClonedChecklistItems(clonedChecklist);
        debugger;
      
            
    }

    getClonedSprint = (newSprintID) => {
        const { sprints, sprintID } = this.props;
        const newSprint = _.cloneDeep(sprints.find(sprint => sprint.id === sprintID));
        newSprint.id = newSprintID;
        if (this.state.sprintName)
            newSprint.name = this.state.sprintName;
        return newSprint;
    }

    //the fuck goes here.
    getClonedTasks = (newSprintID) => {
        const { sprintID, tasks } = this.props;
        let clonedTasks = [];
         tasks
            .filter(task => task.sprintID === sprintID )
            .forEach(task => {
                let newTask = _.cloneDeep(task);
                newTask.sprintID = newSprintID;
                newTask.ID = uniqid();
                clonedTasks.push(newTask);
            })
        return clonedTasks;
    }

    getClonedComments = (clonedTasks) => {
        const { comments } = this.props;

        let newComments = [];
        comments.forEach((comment) => {
            if (clonedTasks.find(task => task.ID === comment.taskID)) {
                let clonedComment = _.cloneDeep(comment);
                clonedComment.id = uniqid();
                newComments.push(clonedComment);
            }
        })

        return newComments;
    }

    getClonedActivities = (clonedTasks) => {
        const { activities } = this.props;

        let newActivities = [];
        activities.forEach((activity) => {
            if (clonedTasks.find(task => task.ID === activity.taskID)) {
                let clonedActivity = _.cloneDeep(activity);
                clonedActivity.id = uniqid();
                newActivities.push(clonedActivity);
            }
        })
        return newActivities;
    }

    getClonedChecklists = (clonedTasks) => {
        const { checklists } = this.props;
        let newChecklists = [];
        checklists.forEach((checklist) => {
            if (clonedTasks.find(task => task.ID === checklist.taskID)) {
                let clonedChecklist = _.cloneDeep(checklist);
                clonedChecklist.id = uniqid();
                newChecklists.push(clonedChecklist);
            }
        })
        return newChecklists;
    }

    getClonedChecklistItems = (clonedChecklists) => {
        const { checklistItems } = this.props;
        let newChecklistItems = [];
        checklistItems.forEach((checklistItem) => {
            if (clonedChecklists.find(checklist => checklist.id === checklistItem.taskID)) {
                let clonedChecklistItem = _.cloneDeep(checklistItem);
                clonedChecklistItem.id = uniqid();
                newChecklistItems.push(clonedChecklistItem);
            }
        })
        return newChecklistItems;
    }



    
    
    render() {
        const { coords, clearFloatingPopup } = this.props;
        return (
            <Container style={coords}>
                <Title>Sprint Actions</Title>
                <CloseIcon className='icon-times' onClick={clearFloatingPopup} />
                <SprintNameTextArea onChange={this.sprintNameChangeHandler} value={this.state.sprintName} />
                <SaveButton onClick={this.cloneSprint}>Create Sprint</SaveButton>
            </Container>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        sprints: state.sprints,
        comments: state.comments,
        activities: state.activities,
        tasks: state.tasks,
        checklists: state.checklists,
        checklistItems: state.checklistItem
    }
}

export default connect(mapStateToProps, {cloneSprint})(CloneSprintFloatingPopup)
