import React, { Component } from 'react'
import styled from 'styled-components';
import { connect } from 'react-redux';


import HomeMenu from './HomeMenu';
import HomeFeed from './HomeFeed';
import HomeRecentlyViewedFeed from './HomeRecentlyViewedFeed';
import CreateBoardModal from 'components/modals/create-board-modal/CreateBoardModal';


import { setActiveModal } from 'actions/modal';


const HomePageContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 50px;
`;

class Home extends Component {

  render() {
    return (
      <HomePageContainer>
        <HomeMenu />
        <HomeFeed />
        <HomeRecentlyViewedFeed createBoardModal={() => this.props.setActiveModal(CreateBoardModal)} />
      </HomePageContainer>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({ ...state.home });
 


const mapDispatchToProps = {
  setActiveModal
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);