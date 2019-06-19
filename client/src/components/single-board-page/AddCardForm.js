import React, { Component } from 'react'
import styled from 'styled-components';



const Container = styled.div``;
const TitleBox = styled.textarea`
    width: 100%;
    font-size: 18px;
    padding: 5px;
`;
const BottomMenuContainer = styled.div`
    line-height: 30px;
    height: 30px;
    display: flex;
`;

const AddCardButton = styled.button`
    height: 100%;
    background-color: green;
    padding: 5px 10px;
    border-radius: 3px;
    color: white;
    margin-right: 5px;
`;

const CloseFormIcon = styled.span`
    padding: 5px;
    :hover {
        background-color: rgba(9,30,66,.13);
    }
    cursor: pointer;
`;

const OpenMenuIcon = styled.span`
    margin-left: auto;
    padding: 5px;
    :hover {
        background-color: rgba(9,30,66,.13);
    }
    cursor: pointer;
`;


export class AddCardForm extends Component {
    render() {
        return (
            <Container>
                <TitleBox rows='5' placeholder='task title...'></TitleBox>
                <BottomMenuContainer>
                    <AddCardButton>Add Card</AddCardButton>
                    <CloseFormIcon className='icon-times' onClick={this.props.closeForm}></CloseFormIcon>
                    <OpenMenuIcon className='icon-dot-3'></OpenMenuIcon>
                </BottomMenuContainer>
            </Container>
        )
    }
}

export default AddCardForm
