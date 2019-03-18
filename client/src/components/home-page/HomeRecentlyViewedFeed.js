import React from 'react'

import "./home-recently-viewed-feed.scss";

const HomeRecentlyViewedFeed = () =>  {

    return (
      <div className="home-recently-viewed-feed">
        <div className="home-recently-menu-title-container">
          <span className="icon-clock-o"></span>
          <span className="home-recently-title">RECENTLY VIEWED</span>
        </div>
        <ul className="home-recently-viewed-ul">

          <li className="home-recently-viewed-li">
            <span className="home-recently-viewed-item-color"></span>
            <span className="home-recently-viewed-item-title">[2019 T1] SIT302</span>
            <span className="icon-star"></span>
          </li>
          <li className="home-recently-viewed-li">
            <span className="home-recently-viewed-item-color"></span>
            <span className="home-recently-viewed-item-title">[2019 T1] SIT302</span>
            <span className="icon-star"></span>
          </li>
          <li className="home-recently-viewed-li">
            <span className="home-recently-viewed-item-color"></span>
            <span className="home-recently-viewed-item-title">[2019 T1] SIT302</span>
            <span className="icon-star"></span>
          </li>

        </ul>
      
        <ul className="home-recently-viewed-links-ul">
          <span className="home-recently-viewed-links-title">Links</span>
          <li className="home-recently-viewed-links-li">
            <span className="home-recently-viewed-link-icon icon-plus"></span>
            <span className="home-recently-viwed-link-text">Create a board</span>
          </li>
        </ul>

      </div>
    )
  
}


export default HomeRecentlyViewedFeed
