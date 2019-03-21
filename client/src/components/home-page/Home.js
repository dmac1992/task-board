import React, { Component } from 'react'
import styled from 'styled-components';

import HomeMenu from './HomeMenu';
import HomeFeed from './HomeFeed';
import HomeRecentlyViewedFeed from './HomeRecentlyViewedFeed';

// import "./home.scss";

const HomePageContainer = styled.div`
  display: flex;
  justify-content: center;
`

export default class Home extends Component {
  render() {
    return (
      <HomePageContainer>
        <HomeMenu />
        <HomeFeed />
        <HomeRecentlyViewedFeed />
      </HomePageContainer>
    )
  }
}
