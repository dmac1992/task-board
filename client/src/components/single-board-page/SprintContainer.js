import React from 'react'
import styled from 'styled-components';
import { connect } from 'react-redux';


import SprintTask from './SprintTask';
import AddCardForm from './AddCardForm';

import SprintActionsFloatingPopup from 'components/floated-popup-system/single-board-page/SprintActionsFloatingPopup';
import { setFloatingPopup } from 'actions/floatingPopups';


const SprintColumn = styled.div`
    min-width: 272px;
    height: 100%;
    margin-left: 5px;
    background-color: black;
`

const Container = styled.div`
    width: 100%;
    max-height: 100%;
    background-color: #dfe1e6;
    display: flex;
    flex-direction: column;
    padding: 5px;
    border-radius: 3px;
    margin-right: 5px;
    overflow: auto;
`;

const SprintHeadingContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 30px;
    line-height: 30px;
`;

const Heading = styled.h3`
`;
const OpenMenuIcon = styled.span`
    display: inline-block;
    padding: 3px 6px;
    cursor: pointer;
    :hover {
        background-color: rgba(9,30,66,.13);
    }
`;

const AddAnotherCardSection = styled.div`
    height: 30px;
    line-height: 30px;
    cursor: pointer;
    :hover {
        background-color: rgba(9,30,66,.13);
    }
`;
const Plus = styled.span`
    margin-right: 5px;
`;


class SprintContainer extends React.PureComponent {
   
    constructor(props) {
        super(props);
        this. state = {
            addCardFormOpen: false
        }
        this.sprintMenuRef = React.createRef();
    }

    componentDidMount() {
    }

    renderAddCardForm = () => {
        return (
            <AddCardForm closeForm={this.closeForm}/>
        )
    }

    renderOpenAddCard = () => {
        return (
            <AddAnotherCardSection onClick={this.openForm}>
                <Plus className='icon-plus'></Plus>
                <span>Add another card</span>
            </AddAnotherCardSection>
        )
    }

    openForm = () => {
        this.setState({addCardFormOpen: true})
    }

    closeForm = () => {
        this.setState({addCardFormOpen: false})
    }

    renderTasks = () => {
        return this.props.tasks
            .filter((task) => task.sprintID === this.props.sprintID)
            .sort((a, b) =>  a.sprintPosition - b.sprintPosition )
            .map((task) => <SprintTask key={task.ID} taskID={task.ID} /> );
    }

    sprintOptionsPopup = () => {
        this.props.setFloatingPopup(SprintActionsFloatingPopup, this.sprintMenuRef, { sprintID: this.props.sprintID } );
    }

    render() {
        const { sprint  } = this.props;
        return (
            <SprintColumn>
                 <Container>
                    <SprintHeadingContainer>
                        <Heading>{sprint.name}</Heading>
                        <OpenMenuIcon className='icon-dot-3' onClick={this.sprintOptionsPopup} ref={this.sprintMenuRef}></OpenMenuIcon>
                    </SprintHeadingContainer>
                    {this.renderTasks()}
                    {!this.state.addCardFormOpen ? this.renderOpenAddCard() : this.renderAddCardForm()}
                 </Container>
            </SprintColumn>
        )
    }
}

// tasks: state.tasks.filter((task) => task.sprintID === ownProps.sprintID)
const mapStateToProps = (state, ownProps) => {
    return {
        sprint: state.sprints.find((sprint) => sprint.id === ownProps.sprintID ),
        tasks: state.tasks
    }
}

export default connect(mapStateToProps, {setFloatingPopup})(SprintContainer);
