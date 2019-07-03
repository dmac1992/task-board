import React from 'react'
import styled from 'styled-components';
import { DateTime } from 'luxon';
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

const Timestamp = styled.span``;

const Username = styled.span`
    font-weight: bold;
    font-size: 120%;
`

function RenderActivityStatement(activity, user) {
    let at = ActivityTypes;
    switch(activity.type) {
        case at.MARKED:
            return <ActivityStatement><Username>{user.username}</Username> marked {activity.entityName} on this card</ActivityStatement>
        case at.REMOVED:
            return <ActivityStatement><Username>{user.username}</Username> removed {activity.entityName} from this card</ActivityStatement>
        case at.COMPLETED:
            return <ActivityStatement><Username>{user.username}</Username> completed {activity.entityName} on this card</ActivityStatement>
        case at.ADDED:
            return <ActivityStatement><Username>{user.username}</Username> added {activity.entityName} to this card</ActivityStatement>
        case at.UNMARKED:
            return <ActivityStatement><Username>{user.username}</Username> marked {activity.entityName} uncomplete</ActivityStatement>
        default:
            return '';
    }
}

function ActivityItem({activity, user}) {
    return (
        <Container>
            <DP>{user.intial}</DP>
            {RenderActivityStatement(activity, user)}
            <Timestamp>{activity.timestamp.toLocaleString(DateTime.DATETIME_MED)}</Timestamp>
        </Container>
    )
}

export default ActivityItem
