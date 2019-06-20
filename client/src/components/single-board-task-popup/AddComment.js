import React, { Component } from 'react'
import styled from 'styled-components';

const Container = styled.div``;
const Header = styled.div`
    position: relative;
    margin-bottom: 5px;
`;
const Title = styled.h3`

`;
const SectionIcon = styled.span`
    position: absolute;
    top: 6px;
    left: -30px;
`;

const TextareaSection = styled.div`
    position: relative;
`;
const UserTag = styled.span`
    position: absolute;
    top: 6px;
    left: -35px;
    width: 28px;
    height: 28px;
    line-height: 28px;
    background-color: #dfe1e6;
    border-radius: 50%;
    text-align: center;
`;
const CommentTextarea = styled.textarea`
    width: 100%;
    padding: 5px;
`;
const SaveButton = styled.button`
    padding: 10px;
`;



const inactiveButton = {
    backgroundColor: '#ebecf0'
}
const activeButton = {
    backgroundColor: 'green'
}


export class AddComment extends Component {

    state = {
        comment: 'sdf'
    }

   

    render() {
        return (
            <Container>
                <Header>
                    <Title>Add Comment</Title>
                    <SectionIcon className='icon-bubble'></SectionIcon>
                </Header>
                <TextareaSection>
                    <UserTag>D</UserTag>
                    <CommentTextarea placeholder='Write a comment...' rows='6'></CommentTextarea>
                    <SaveButton style={this.state.comment.length ? activeButton : inactiveButton}>Save</SaveButton>
                </TextareaSection>
            </Container>
        )
    }
}

export default AddComment
