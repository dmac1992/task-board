import React, { Component } from 'react'
import styled from 'styled-components';

import variables from 'variables';

const Column = styled.div`
    min-width: 272px;
    height: 100%;
    margin-left: 5px;
`;

const Container = styled.div`
    width: 100%;
    background-color: #dfe1e6;
    border-radius: 3px;
    padding: 5px;
    font-family: ${variables.primaryFont}
`

const AddAnotherListButton = styled.div`
    border-radius: 3px;
    width: 100%;
    height: 40px;
    color: black;
    padding: 5px;
    display: flex;
    align-items: center;
    cursor: pointer;
`


const SprintNameInput = styled.input`
    width: 100%;
    padding: 5px;
    background-color: white;
`;
const AddSprintFormBottomHalf = styled.div`
    display: flex;
    align-items: center;
    margin-top: 5px;
`;
const AddSprintButton = styled.button`
    background-color: ${variables.greenButtonColor}
    color: white;
    padding: 10px 20px;
    margin-right: 5px;
    :hover {
        background-color: ${variables.greenButtonHoverColor}
    }
`;
const CloseFormCross = styled.span`
    cursor: pointer;
`;

export class AddSprintColumn extends Component {

    state = {
        formOpen: false
    }

    openForm = () => {
        this.setState({formOpen: true})
    }

    closeForm = () => {
        this.setState({formOpen: false})
    }

    renderOpenSprintFormButton = () => {
        return (
            <Column >
                <Container onClick={this.openForm}>
                    <AddAnotherListButton>
                        <span>+ Add another list</span>
                    </AddAnotherListButton>
                </Container>
             </Column>
        )
    }

    renderAddSprintForm = () => {

        return (
            <Column>
                <Container>
                    <SprintNameInput />
                    <AddSprintFormBottomHalf>
                        <AddSprintButton>Add List</AddSprintButton>
                        <CloseFormCross className='icon-times' onClick={this.closeForm} />
                    </AddSprintFormBottomHalf>
                </Container>
             </Column>
        )
        
    }

    render() {
        if (this.state.formOpen)
            return this.renderAddSprintForm();
        else    
            return this.renderOpenSprintFormButton();
    }
}

export default AddSprintColumn
