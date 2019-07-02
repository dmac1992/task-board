import React from 'react'
import styled from 'styled-components';
import ActivityTypes from 'utilityFiles/ActivityTypes';

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

const ActivityStatement = styled.span`
    display: block;
`;
const Username = styled.span`
    text-style: bold;
`

function RenderActivityStatement(activity, user) {
    console.log(activity.type);
    let at = ActivityTypes;
    switch(activity.type) {
        case at.MARKED:
            return <ActivityStatement><Username>{user.username}</Username> marked {activity.entity} on this card</ActivityStatement>
        case at.REMOVED:
            return <ActivityStatement><Username>{user.username}</Username> removed {activity.entity} from this card</ActivityStatement>
        case at.COMPLETED:
            return <ActivityStatement><Username>{user.username}</Username> completed {activity.entity} on this card</ActivityStatement>
        case at.ADDED:
            return <ActivityStatement><Username>{user.username}</Username> added {activity.entity} to this card</ActivityStatement>
        case at.UNMARK:
            return <ActivityStatement><Username>{user.name}</Username> marked {activity.entity} uncomplete</ActivityStatement>
        default:
            return '';
    }

}


function ActivityItem({activity, user}) {
    return (
        <Container>
            <DP>{user.intial}</DP>
            {RenderActivityStatement(activity, user)}
        </Container>
    )
}

export default ActivityItem
