import React from 'react'
import styled from 'styled-components';
import { connect } from 'react-redux';
import { updateTaskName } from 'actions/tasks';

const Container = styled.div`
    position: relative;
    margin-bottom: 10px;
`;

const TitleTextArea = styled.textarea`
    height: 33px;
    background: transparent;
    font-size: 20px;
    width: 100%;
    line-height: 33px;
    border: none;
    
`;
const CloseIcon = styled.span`
    position: absolute;
    right: -40px;
    top: -10px;
    line-height: 36px;
    height: 32px;
    width: 32px;
    text-align: center;
    cursor: pointer;
    border-radius: 50%;
    :hover {
        background-color: rgba(9,30,66,.13);
        color: #091e42;
    }
`;
const HeaderIcon = styled.span`
    position: absolute;
    left: -30px;
    top: -10px;
`;

const FromListTitle = styled.span`
    padding: 3px;
    display: block;
`;

const FromListSpan = styled.span`
    padding: 3px;
    display: block;
`


//TODO - why is task name passed in here


class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            cardName: this.props.task.name
        }
    }

    taskNameHandler = (e) => {
        this.setState({ cardName: e.target.value });
    }

    updateTaskName = (e) => {
        this.props.updateTaskName(this.state.cardName, this.props.task.ID);
    }

 


    render() {
        return (
            <Container>
                <TitleTextArea className='' onChange={this.taskNameHandler} onBlur={this.updateTaskName} value={this.state.cardName}/>
                <CloseIcon className='icon-times' onClick={this.props.clearPopup}/>
                <HeaderIcon className='icon-clone'/>
                <FromListTitle>In List:</FromListTitle>
                <FromListSpan>{this.props.sprintName}</FromListSpan>
            </Container>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        sprintName: state.sprints.find(sprint => sprint.id === ownProps.task.sprintID).name
    }
}


export default connect(mapStateToProps, { updateTaskName })(Header);
