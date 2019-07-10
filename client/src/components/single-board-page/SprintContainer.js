import React from 'react'
import styled from 'styled-components';
import { connect } from 'react-redux';


import SprintTask from './SprintTask';
import AddCardForm from './AddCardForm';

import SprintActionsFloatingPopup from 'components/floated-popup-system/single-board-page/SprintActionsFloatingPopup';
import { setFloatingPopup } from 'actions/floatingPopups';

import { updateSprintName } from 'actions/sprints'; 



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

const Heading = styled.textarea`
    flex-grow: 1;
    background-color: transparent;
    border-radius: 3px;
    padding: 4px 8px;
    border: none;
    -webkit-appearance: none;
    :focus {
        background-color: white;
    }
`;
const OpenMenuIcon = styled.span`
    display: inline-block;
    padding: 3px 6px;
    cursor: pointer;
    :hover {
        background-color: rgba(9,30,66,.13);
    }
`;

const WatchingIcon = styled.span` 
    margin-left: auto;
`


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
        this.state = {
            addCardFormOpen: false,
            sprintName: this.props.sprint.name
        }
        this.sprintMenuRef = React.createRef();
        this.addCardFormInputRef = React.createRef();
    }

    renderAddCardForm = () => {
        return (
            <AddCardForm inputRefcloseForm={this.closeForm} addCardFormInputRef={this.addCardFormInputRef} closeForm={this.closeForm} sprint={this.props.sprint}/>
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

    updateSprintName = () => {
        this.props.updateSprintName(this.state.sprintName, this.props.sprint.id);
    }

    sprintNameChangeHandler = (e) => { this.setState({sprintName: e.target.value})};

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

    sprintOptionsAddCardHandler = () => {
        //close floating popup
        this.props.setFloatingPopup(null, null);
        //set state to open form
        this.setState({ addCardFormOpen: true }, () => this.addCardFormInputRef.current.focus() )

        //focus input
    }

    sprintOptionsPopup = () => {
        this.props.setFloatingPopup(SprintActionsFloatingPopup, this.sprintMenuRef, { sprintID: this.props.sprintID, addCardHandler: this.sprintOptionsAddCardHandler } );
    }

    render() {
        const { sprint, watchedSprints, sprintID } = this.props;
        return (
            <SprintColumn>
                 <Container>
                    <SprintHeadingContainer>
                        <Heading value={this.state.sprintName} onBlur={this.updateSprintName} onChange={this.sprintNameChangeHandler}/>
                        {watchedSprints.includes(sprintID) ? <WatchingIcon className='icon-eye' /> : null}
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
        tasks: state.tasks,
        watchedSprints: state.watchedSprints
    }
}

export default connect(mapStateToProps, {setFloatingPopup, updateSprintName})(SprintContainer);
