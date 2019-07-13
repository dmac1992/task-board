import React, { Component } from 'react'
import styled from 'styled-components';
import { connect } from 'react-redux';

import { starBoard, unstarBoard } from 'actions/users'

import StarredBoardLink from './StarredBoardLink';
import UnstarredBoardLink from './UnstarredBoardLink';


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

export class BoardsPersonalFeed extends Component {

    renderPersonalBoards = () => {

        const {currentUser, boards, starBoard, unstarBoard } = this.props;
        return boards
            .filter(board => board.teamID === null)
            .map(board => {
                if (currentUser.starredBoards.includes(board.id)) {
                    return (
                       <StarredBoardLink board={board} unstarBoard={unstarBoard} key={`personal_boards_starred_${board.id}`} userId={currentUser.id}/>
                    )
                }
                else {
                    
                    return (
                        <UnstarredBoardLink board={board} starBoard={starBoard} key={`personal_boards_unstarred_${board.id}`} userId={currentUser.id}/>
                    )
                }
            })
    }
  
    render() {
        return (
            <FeedContainer>
                <TitleSection>
                    <span className="icon-user"></span>
                    <span>Personal Boards</span>
                </TitleSection>
                <BoardsContainer>
                    {this.renderPersonalBoards()}
                </BoardsContainer>
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

const mapDispatchToProps =  {
    starBoard,
    unstarBoard
}

export default connect(mapStateToProps, mapDispatchToProps)(BoardsPersonalFeed)


