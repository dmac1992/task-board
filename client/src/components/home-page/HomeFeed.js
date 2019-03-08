import React, { Component } from 'react'
import { connect } from 'react-redux'

import "./home-feed.scss";

import HomeFeedItem from './HomeFeedItem';

export class HomeFeed extends Component {

  //needs to fetch all up next items and render them as HomeFeedItems

  render() {
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
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeFeed)
