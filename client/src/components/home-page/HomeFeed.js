import React from 'react'

import "./home-feed.scss";

import HomeFeedItem from './HomeFeedItem';

const HomeFeed = () => {
  //needs to fetch all up next items and render them as HomeFeedItems
 
    return (
      <div className="home-feed">
        <div className="home-feed-title-container">
          <span className="icon-check"></span>
          <span>UP NEXT</span>
        </div>
        <HomeFeedItem />
        <HomeFeedItem />
        <HomeFeedItem />
        <HomeFeedItem />
        <HomeFeedItem />
        <div className="home-feed-show-more-button">
            <span>Show more</span>
        </div>
      </div>
    )
}


export default HomeFeed
