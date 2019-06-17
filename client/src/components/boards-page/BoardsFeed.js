import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import BoardLink from './BoardLink';

const FeedContainer = styled.div`
    margin-bottom: 30px;
`;

const TitleSection = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    span:first-child {
        margin-right: 5px;
    }
    > * {
     font-size: 20px;
    }
`;
const BoardsContainer = styled.div`
    display: flex;
    flex-flow: wrap;
    > * {
        width: 250px;
        height: 100px;
        margin-right: 5px;
        margin-bottom: 20px;
    }
`;

function BoardsFeed(props) {
  return (
    <FeedContainer>
        <TitleSection>
            <span class="icon-clock-o"></span>
            <span>Recently viewed </span>
        </TitleSection>
        <BoardsContainer>
                <Link to='/b'><BoardLink name="welcome board" color="purple"/></Link>
                <Link to='/b'><BoardLink name="welcome board" color="green"/></Link>
                <Link to='/b'><BoardLink name="welcome board" color="purple"/></Link>
                <Link to='/b'><BoardLink name="welcome board" color="green"/></Link>
                <Link to='/b'><BoardLink name="welcome board" color="purple"/></Link>
                <Link to='/b'><BoardLink name="welcome board" color="purple"/></Link>
                <Link to='/b'><BoardLink name="welcome board" color="green"/></Link>
                <Link to='/b'><BoardLink name="welcome board" color="purple"/></Link>
        </BoardsContainer>
    </FeedContainer>
  )
}

export default BoardsFeed
