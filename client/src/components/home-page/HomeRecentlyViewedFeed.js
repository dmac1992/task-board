import React, { Component } from 'react'
import { connect } from 'react-redux'

import "./home-recently-viewed-feed.scss";

export class HomeRecentlyViewedFeed extends Component {
 

  render() {
    return (
      <div className="home-recently-viewed-feed">
        Recently Viewed.
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeRecentlyViewedFeed)
