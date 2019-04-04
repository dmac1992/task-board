import React, { Component } from 'react'
import styled from 'styled-components';

import ProfileHeader from 'components/profile-page/ProfileHeader';

const Container = styled.div`
  height: 300px;
  background-color: aqua;
`;

export class Profile extends Component {
  render() {
    return (
      <React.Fragment>
        <ProfileHeader />
        <Container>
        </Container>
      </React.Fragment>
    
    )
  }
}

export default Profile;
