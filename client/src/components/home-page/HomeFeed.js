import React from 'react'
import styled from 'styled-components';
// import "./home-feed.scss";

import HomeFeedItem from './HomeFeedItem';

const HomeFeedContainer = styled.div`
    width: 500px;
    padding-left: 30px;
    padding-right: 30px;
`;

const HomeFeedTitleContainer = styled.div`
    position: relative;
    padding-left: 30px;
    margin-bottom: 20px;    
`;

const CheckIcon = styled.span`
    position: absolute;
    left: 0;
    top: 2px;
`;

const ShowMoreButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    border-radius: 5px;
    cursor: pointer;
    &:hover {
        background-color: #DCDCDC;
    }
`;

const HomeFeed = ( ) => {
  //needs to fetch all up next items and render them as HomeFeedItems
 
    return (
      <HomeFeedContainer>
        <HomeFeedTitleContainer>
          <CheckIcon className="icon-check"></CheckIcon>
          <span>UP NEXT</span>
        </HomeFeedTitleContainer>
        <HomeFeedItem />
        <HomeFeedItem />
        <HomeFeedItem />
        <HomeFeedItem />
        <HomeFeedItem />
        <ShowMoreButton>
            <span>Show more</span>
        </ShowMoreButton>
      </HomeFeedContainer>
    )
}


export default HomeFeed
