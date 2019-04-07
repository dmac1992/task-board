import React, { Component } from 'react'
import styled from 'styled-components';
import { BrowserRouter, Route } from 'react-router-dom';


import ProfileHeader from 'components/profile-page/ProfileHeader';

import ProfileFeed from 'components/profile-page/ProfileFeedSection/ProfileFeed';
import ProfileCards from 'components/profile-page/ProfileCardsSection/ProfileCards';
import ProfileSettings from 'components/profile-page/ProfileSettingsSection/ProfileSettings';

const Container = styled.div`
  height: 300px;
  background-color: aqua;
`;

export class Profile extends Component {

  render = () => {
    return (
      <React.Fragment>
          <ProfileHeader toggleTabs={this.toggleTabs} subpages={this.subpages}/>
          <Route exact path='/profile' component={ProfileFeed}/>
          <Route exact path='/profile/cards' component={ProfileCards} />
          <Route exact path='/profile/settings' component={ProfileSettings} />
      </React.Fragment>
    )
  }
}

export default Profile;
