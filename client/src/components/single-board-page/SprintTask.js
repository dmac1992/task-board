import React, {Component} from 'react'
import styled from 'styled-components';
import { connect } from 'react-redux'; 

import  { setActiveModal } from 'actions/modal';
import TaskPopup from 'components/single-board-task-popup/TaskPopup';


const Container = styled.div`
    width: 100%;
    height: 70px;
    background-color: red;
    margin-bottom: 5px;
`;

class SprintTask extends Component {

    state = {
        'addingCard' : false
    }

    createTaskModal = () => {
        console.log('called create task modal');
        this.props.setActiveModal(TaskPopup);
    }

    render() {
        return (
            <Container onClick={this.createTaskModal}>
                
            </Container>
        )
    }

}

export default connect(null, { setActiveModal })(SprintTask);
