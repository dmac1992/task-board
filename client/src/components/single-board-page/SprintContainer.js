import React from 'react'
import styled from 'styled-components';

import SprintTask from './SprintTask';
import AddCardForm from './AddCardForm';


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


class SprintContainer extends React.Component {


    state = {
        addCardFormOpen: false
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

    render() {
        return (
            <SprintColumn>
                 <Container>
                    <SprintHeadingContainer>
                        <Heading>Sprint heading</Heading>
                        <OpenMenuIcon className='icon-dot-3'></OpenMenuIcon>
                    </SprintHeadingContainer>
                    <SprintTask />
                    <SprintTask />
                    <SprintTask />
                    <SprintTask />
                    {!this.state.addCardFormOpen ? this.renderOpenAddCard() : this.renderAddCardForm()}
                 </Container>
            </SprintColumn>
        )
    }
       
}

export default SprintContainer
