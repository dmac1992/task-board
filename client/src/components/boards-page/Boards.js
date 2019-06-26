import React, { Component } from 'react'
import styled from 'styled-components';
import { connect } from 'react-redux';

import HomeMenu from 'components/home-page/HomeMenu';
import BoardsFeed from 'components/boards-page/BoardsFeed';
import TeamsFeed from 'components/boards-page/TeamsFeed'; 
import CreateBoardModal from 'components/modals/create-board-modal/CreateBoardModal';

import { setActiveModal } from 'actions/modal';

const BoardsPageContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
`;


const BoardsFeedContainer = styled.div`
    width: 800px;
    margin-left: 30px;
`;

const CreateNewBoard = styled.div`
    display: flex;
    width: 250px
    height: 100px;
    justify-content: center;
    align-items: center;
    background-color: gray;
    cursor: pointer;
`;

export class Boards extends Component {
  render() {
    return (
      <BoardsPageContainer>
        <HomeMenu />
        <BoardsFeedContainer>
            <BoardsFeed iconClass="" name="Recently Viewed"  />
            <BoardsFeed iconClass="" name="Personal Boards"   />
            <TeamsFeed />
            <TeamsFeed />
            <TeamsFeed />
            <CreateNewBoard onClick={() => this.props.setActiveModal(CreateBoardModal)}>
              <span>Create board...</span>
            </CreateNewBoard>
        </BoardsFeedContainer>
      
      </BoardsPageContainer>
    )
  }
}


const mapDispatchToProps = {
  setActiveModal
}

export default connect(null, mapDispatchToProps)(Boards)
