import React from 'react'
import styled from 'styled-components';
import { connect } from 'react-redux';
import _ from 'lodash';

import ActivityComment from './ActivityComment';
import ActivityItem from './ActivityItem';

const Container = styled.div`
    position: relative;
    margin-top: 10px;
`;
const SectionIcon = styled.span`
    position: absolute;
    top: 6px;
    left: -30px;
`

const Header = styled.div`
    margin-bottom: 5px;
`;

const Title = styled.h3`
    display: inline-block;
    margin-right: 5px;
`;

// const ShowActivitiesButton = styled.button`
//     margin-riht
// `

const ActivityList = styled.ul``;

const IncludeActivitiesButton = styled.button`
    padding: 7px;
    background-color: rgba(9,30,66,.04);
    margin-left: auto
`;
const CommentsOnlyButton = styled.button`
    padding: 7px;
    background-color: rgba(9,30,66,.04);
    margin-left: auto
`;

class Activity extends React.Component  {

    state = {
        includeActivities: true
    }

    renderCommentsAndActivities = () => {
        const { comments, activities, users } = this.props;
        let sortedCommentsAndActivities = _.orderBy([ ...comments, ...activities], ['timestamp']);
        return sortedCommentsAndActivities.map((item, index) => {
            //item objects have comment property
            if (item.comment) {
                return <ActivityComment comment={item} key={index} user={users[item.userID]} />
            } else {
                return <ActivityItem activity={item} key={index} user={users[item.userID]} />
            }
        })
    }

    renderCommentsOnly = () => {
        return this.props.comments.map((comment) => <ActivityComment comment={comment} key={comment.id} />)
    }

    renderActivity = () => {
        if (this.state.includeActivities) {
            return this.renderCommentsAndActivities();
        } else {
            return this.renderCommentsOnly();
        }
    }

    hideActivities = () => { this.setState({includeActivities: false})}
    showActivities = () => { this.setState({includeActivities: true})}

    renderButton = () => {
        if (this.state.includeActivities){
            return  <CommentsOnlyButton onClick={this.hideActivities} />
        } else {
            return <IncludeActivitiesButton onClick={this.showActivities} />
        }
    }


    render() {
        return (
            <Container>
                <Header>
                    <Title>Activity</Title>
                    <SectionIcon className='icon-align-center'></SectionIcon>
                    {this.renderButton()}
                </Header>
                <ActivityList>
                    {this.renderActivity()}
                </ActivityList>
            </Container>
        )
    }
   
}


const mapStateToProps = (state, ownProps) => {
    const currentTaskPopupID = state.currentTaskPopup
    return {
        comments: state.comments.filter((comment) => currentTaskPopupID === comment.taskID).sort((a, b) => a.created > b.created ? 1 : -1),
        activities: state.activities.filter(activity => activity.taskID === currentTaskPopupID),
        users: state.users 
    }
}

export default connect(mapStateToProps, {})(Activity)
