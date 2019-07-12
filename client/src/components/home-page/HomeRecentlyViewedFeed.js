import React from 'react'
import styled from 'styled-components';
import { connect } from 'react-redux';
// import "./home-recently-viewed-feed.scss";

import RecentlyViewedBoardItem from 'components/home-page/RecentlyViewedBoardItem';

import { unstarBoard, starBoard } from 'actions/users';

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

const UnstarredIcon = styled.span`
  color: #dfe1e6;
  transition: transform .2s;
  display: inline-block;
  :hover {
    transform: scale(1.1);
  }
`;

const StarredIcon = styled.span`
  color: #ffce00
  transition: transform .2s;
  display: inline-block;
  :hover {
    transform: scale(1.1);
  }
`;

class HomeRecentlyViewedFeed extends React.Component {


    renderRecentlyViewedBoards = () => {
      const { boards, currentUser } = this.props;
      return boards 
        .filter(board => currentUser.recentlyViewedBoards.includes(board.id))
        .map(board => {
          return ( 
            <RecentlyViewedBoardItem 
              key={board.id}
              board={board}
              currentUser={currentUser}
              unstarBoard={this.props.unstarBoard}
              starBoard={this.props.starBoard}
            />
          )
        })
    }



    render() {
      const {createBoardModal} = this.props;
      return (
        <FeedContainer>
          <FeedTitleContainer>
            <span className="icon-clock-o"></span>
            <span className="home-recently-title">RECENTLY VIEWED</span>
          </FeedTitleContainer>
          <ul className="home-recently-viewed-ul">
            {this.renderRecentlyViewedBoards()}
          </ul>
        
          <ul className="home-recently-viewed-links-ul">
            <LinksTitle>Links</LinksTitle>
            <LinksItem onClick={createBoardModal}>
              <span className="home-recently-viewed-link-icon icon-plus"></span>
              <span className="home-recently-viwed-link-text">Create a board</span>
            </LinksItem>
          </ul>

        </FeedContainer>
      )
    }
}


const mapStateToProps = (state) => {
  return {
    boards: state.boards,
    currentUser: state.users[state.userId]
  }
}

const mapDispatchToProps = {
  unstarBoard,
  starBoard
}
export default connect(mapStateToProps, mapDispatchToProps)(HomeRecentlyViewedFeed)
