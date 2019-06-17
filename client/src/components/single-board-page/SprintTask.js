import React, {Component} from 'react'
import styled from 'styled-components';

const Container = styled.div`
    width: 300px;
`;

const Header = styled.div`
    
`;

const Task = styled.div`
`;

const AddCardButton = styled.div`
    padding: 5px;
    span:first-of-type {
        margin-right: 5px;
    }
    cursor: pointer;
  
`;


class SprintTask extends Component {

    state = {
        'addingCard' : false
    }

    render() {
        return (
            <Container>
                <Header>Header</Header>
                <Task></Task>
                <Task></Task>
                <Task></Task>
                <Task></Task>
                <AddCardButton>
                    <span className='icon-plus'></span>
                    <span>Add a card</span>
                </AddCardButton>
            </Container>
        )
    }
    
}

export default SprintTask
