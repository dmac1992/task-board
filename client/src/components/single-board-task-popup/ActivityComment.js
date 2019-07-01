import React from 'react'
import styled from 'styled-components'

const Container = styled.li`
    margin-top: 4px;
    padding-left: 45px;
    position: relative;
    padding-top: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid gray;
`;

const DP = styled.span`
    position: absolute;
    width: 30px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    background-color: #dfe1e6;
    color: #172b4d;
    border-radius: 50%;
    top: 10px;
    left: 0;
    cursor: pointer;
`;

const NameDateContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 5px;
`;
const Username = styled.span`
    margin-right: 5px;
`;

const DatePosted = styled.span`
    font-size: 8px;
`;

const Comment = styled.p`
    background-color: white;
    padding: 7px;
    word-break: break-word;
    margin-bottom: 8px;
`;

const TextBreakDash = styled.span`
    margin-left: 5px;
    margin-right: 5px;
`;


const BottomButtons = styled.div`
    display: flex;
    align-items: center;
`;
const EmoticonsLink = styled.span``;
const Edit = styled.span`
    text-decoration: underline;
    cursor: pointer;
`;
const Delete = styled.span`
    text-decoration: underline;
    cursor: pointer;
`;


function ActivityComment({comment}) {
    return (
        <Container>
            <DP>A</DP>
            <NameDateContainer>
                <Username>username</Username>
                <DatePosted>17th may 2000</DatePosted>
            </NameDateContainer>
            <Comment>{comment.comment}</Comment>
            <BottomButtons>
                <EmoticonsLink className='icon-smile-o' />
                <TextBreakDash>-</TextBreakDash>
                <Edit>Edit</Edit>
                <TextBreakDash>-</TextBreakDash>
                <Delete>Delete</Delete>
            </BottomButtons>
        </Container>
    )
}

export default ActivityComment
