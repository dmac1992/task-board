import React, {Component} from 'react'
import styled from 'styled-components';
import { connect } from 'react-redux'; 

import  { setActiveModal } from 'actions/modal';
import TaskPopup from 'components/single-board-task-popup/TaskPopup';


const Container = styled.div`
    width: 100%;
    background-color: white;
    margin-bottom: 5px;
    background-color: 0 1px 0 rgba(9,30,66,.25);
    border-radius: 3px;
    cursor: pointer;
    padding: 5px;
`;

const TopHalf = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 30px;
`;

const Title = styled.span``;
const EditIcon = styled.span`
`;


const BottomHalf = styled.div`
    display: flex;
    align-items: center;
    height: 30px;
`;
const WatchingIcon = styled.span`
    margin-right: 8px;
    font-size: 12px;
`;
const ChecklistIcon = styled.span`
    margin-right: 2px;
    font-size: 12px;
`;
const ChecklistFraction = styled.span`
    font-size: 12px;
`;

const UserIconContainer = styled.div`
    margin-left: auto;
`;
const UserIcon = styled.span`
    border-radius: 50%;
    background-color: #dfe1e6;
    display: block;
    width: 28px;
    height: 28px;
    text-align: center;
    line-height: 28px;
`;



class SprintTask extends Component {

    state = {
        hovered: false
    }
    componentDidMount() {
        console.log(this.props);
    }

    createTaskModal = () => {
        this.props.setActiveModal(TaskPopup);
    }

    onMouseEnter = () => {
        this.setState({hovered: true});
    }

    onMouseLeave = () => {
        this.setState({hovered: false});
    }

    hoverContainerStyles = {
        backgroundColor: '#f4f5f7'
    }

    hideElement = {
        display: 'none'
    }

    render() {
        const { task } = this.props;
        return (
            <Container style={this.state.hovered ? this.hoverContainerStyles : null } onClick={this.createTaskModal} onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>
                <TopHalf>
                    <Title>{task.name}</Title>
                    <EditIcon className='icon-pencil' style={!this.state.hovered ? this.hideElement : null}  />
                </TopHalf>
                <BottomHalf>
                    <WatchingIcon className='icon-eye' />
                    <ChecklistIcon className='icon-check-square-o' />
                    <ChecklistFraction>2/5</ChecklistFraction>
                    <UserIconContainer>
                        <UserIcon>M</UserIcon>
                    </UserIconContainer>
                </BottomHalf>
            </Container>
        )
    }

}

const mapStateToProps = (state, ownProps) => {
    return {
        task: state.tasks.find((task) =>  task.ID === ownProps.taskID )
    }
}

export default connect(mapStateToProps, { setActiveModal })(SprintTask);
