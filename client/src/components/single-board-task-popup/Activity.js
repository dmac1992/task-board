import React from 'react'
import styled from 'styled-components';

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


const ActivityList = styled.ul``;



function Activity({renderTaskComments}) {
    return (
        <Container>
            <Header>
                <Title>Activity</Title>
                <SectionIcon className='icon-align-center'></SectionIcon>
            </Header>
            <ActivityList>
                {renderTaskComments()}
                {/* {this.renderTaskActivities()} */}
            </ActivityList>
        </Container>
    )
}

export default Activity
