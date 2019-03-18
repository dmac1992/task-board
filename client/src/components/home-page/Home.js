import React, { Component } from 'react'

import HomeMenu from './HomeMenu';
import HomeFeed from './HomeFeed';
import HomeRecentlyViewedFeed from './HomeRecentlyViewedFeed';

import "./home.scss";

//

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <HomeMenu />
        <HomeFeed />
        <HomeRecentlyViewedFeed />
      </div>
    )
  }
}
