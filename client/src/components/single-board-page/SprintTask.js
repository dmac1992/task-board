import React, {Component} from 'react'
import styled from 'styled-components';

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

    render() {
        return (
            <Container>
                
            </Container>
        )
    }
}

export default SprintTask
