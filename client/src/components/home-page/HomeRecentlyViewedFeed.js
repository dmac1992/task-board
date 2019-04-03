import React from 'react'
import styled from 'styled-components';

// import "./home-recently-viewed-feed.scss";

const FeedContainer = styled.div`
  width: 300px;
`;

const FeedTitleContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  .icon-clock-o {
    display: flex;
    width: 32px;
    height: 32px;
    align-items: center;
    justify-content: center;
    font-size: 15px;
  }
`;

const BoardsListItem = styled.li`
  display: flex;
  align-items: center;
  padding: 5px;
  transition: background-color .3s;
  border-radius: 3px;
  margin-bottom: 3px;
  cursor: pointer;
  &:hover {
      background-color: #DCDCDC;
  }
  .icon-star {
      display: flex;
      width: 32px;
      height: 32px;
      align-items: center;
      justify-content: center;
      font-size: 15px;
      align-self: flex-end;
      margin-left: auto;
  }

`;

const ItemColor = styled.span`
  background-color: blue;
  width: 32px;
  height: 28px;
  border-radius: 3px;
  margin-right: 5px;
`;



const LinksItem = styled.span`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  padding: 5px;
  &:hover {
      background-color: #DCDCDC;
  }
  .icon-plus {
      display: flex;
      width: 32px;
      height: 32px;
      align-items: center;
      justify-content: center;
      font-size: 15px;
      background-color: grey;
      border-radius: 5px;
      margin-right: 5px;
  }
`;

const LinksTitle = styled.span`
  display: block;
  padding-left: 5px;
  margin-top: 10px;
  margin-bottom: 10px;
`;


const HomeRecentlyViewedFeed = (props) =>  {

    return (
      <FeedContainer>
        <FeedTitleContainer>
          <span className="icon-clock-o"></span>
          <span className="home-recently-title">RECENTLY VIEWED</span>
        </FeedTitleContainer>
        <ul className="home-recently-viewed-ul">

          <BoardsListItem>
            <ItemColor />
            <span className="home-recently-viewed-item-title">[2019 T1] SIT302</span>
            <span className="icon-star"></span>
          </BoardsListItem>
          <BoardsListItem>
            <ItemColor />
            <span className="home-recently-viewed-item-title">[2019 T1] SIT302</span>
            <span className="icon-star"></span>
          </BoardsListItem>
          <BoardsListItem>
            <ItemColor/>
            <span className="home-recently-viewed-item-title">[2019 T1] SIT302</span>
            <span className="icon-star"></span>
          </BoardsListItem>

        </ul>
      
        <ul className="home-recently-viewed-links-ul">
          <LinksTitle>Links</LinksTitle>
          <LinksItem onClick={props.createBoardModal}>
            <span className="home-recently-viewed-link-icon icon-plus"></span>
            <span className="home-recently-viwed-link-text">Create a board</span>
          </LinksItem>
        </ul>

      </FeedContainer>
    )
  
}


export default HomeRecentlyViewedFeed
