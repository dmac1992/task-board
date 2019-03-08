import React, { Component } from 'react'

import "./home-menu.scss";

export default class HomeMenu extends Component {




  render() {
    return (
      <div className="home-menu">
        <ul className="home-menu-ul">
            <li className="home-menu-li">
                <span className="icon-page-multiple home-menu-icon"></span>
                <span>Boards</span>
            </li>
            <li className="home-menu-li">
                <span className="icon-home home-menu-icon"></span>
                <span>Home</span>
            </li>
            <span className="home-menu-teams-title">TEAMS</span>
            <li className="home-menu-li">
                <span className="icon-plus home-menu-icon"></span>
                <span >Create a team</span>
            </li>
        </ul>
      </div>
    )


  }
}
