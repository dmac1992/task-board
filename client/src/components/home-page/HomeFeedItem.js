import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import "./home-feed-item.scss";


export class HomeFeedItem extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <div className="home-feed-item">
            <div className="home-feed-item-top-half">
                <div className="home-feed-item-title-section">
                    <span className="home-feed-item-color"></span>
                    <span className="home-feed-item-title">Peer review 1</span>
                    <div className="home-feed-short-date-container">
                        <span className="icon-clock-o"></span>
                        <span className="home-feed-short-due-date">Mar 18</span>
                    </div>
                </div>
                <span className="home-feed-full-description">
                    [2019 T1] SIT302: Week 3 [18-24 Mar]
                </span>
            </div>
            <div className="home-feed-item-bottom-half">
                <div className="home-feed-due-actions-container">
                    <div className="home-feed-due-container">
                        <span className="icon-clock-o"></span>
                        <span className="home-feed-long-due-date">Due Mar 18 at 1:00 PM</span>
                    </div>
                    <button className="home-feed-actions-button">
                        <span className="icon-dot-3"></span>
                    </button>
                </div>
                <div className="home-feed-complete-dismiss-container">
                    <button className="home-feed-complete-button">
                        <span className="icon-check home-feed-complete-button-icon"></span>
                        <span className="">Complete</span>
                    </button>
                    <button className="home-feed-dismiss-button">
                        <span className="icon-times home-feed-complete-button-icon"></span>
                        <span className="">Dismiss</span>
                    </button>
                </div>
            </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeFeedItem)
