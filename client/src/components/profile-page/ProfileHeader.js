import React, { Component } from 'react'
import styled from 'styled-components';

const Container = styled.div`
  background-color: #f5f6f7;
  padding-top: 30px;
  position: relative;
`;

//parent for profileInfoContainer and TabContainer
const InnerContainer = styled.div`
  margin: 0 auto;
  width: 600px;
  background-color: red;
  display: flex;
  flex-direction: column;
`
//container for everything in profile bar, except for its tab sibling
const ProfileInfoContainer = styled.div`
  background-color: orange;
  display: flex;
`;
const ProfileImageContainer = styled.div`
  background-color: pink;
  width: 85px;
  height: 85px;

`;
const ProfileImage = styled.img`
  border-radius: 50%;
  height: 100%;
  width: 100%;
  background-color: olive;
`;
const ProfileUsernameContainer = styled.div`
  margin-right: auto;
  background-color: yellow;
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const UserNameHandleContainer = styled.div`

`

const Username = styled.span`
  font-size: 30px;
  font-weight: bold;
  margin-right: 5px;
`;
const UserHandle = styled.span`

`;
const EditProfileButton = styled.div`
  display: inline-flex;
  padding: 5px;
  background-color: purple;
  width: 105px;
  border-radius: 4px;
  cursor: pointer;
  > span {
    color: white;
  }
  > span:first-of-type {
    margin-right: 5px;
  }
`;

const TabsContainer = styled.div`
  background-color: maroon;
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;
const Tab = styled.div`
  padding: 5px 10px;
  background-color: aqua;
  &:nth-of-type(2) {
    margin: 0 5px;
  }
  border-radius: 3px 3px 0 0;
`;


export class ProfileHeader extends Component {
  render() {
    return (
      <Container>
        <InnerContainer>
          <ProfileInfoContainer>
              <ProfileImageContainer>
                <ProfileImage />
              </ProfileImageContainer>
              <ProfileUsernameContainer>
                <UserNameHandleContainer>
                  <Username>Mccarthyd</Username>
                  <UserHandle>mccarthyd1</UserHandle>
                </UserNameHandleContainer>
                <EditProfileButton>
                    <span className="icon-pencil"></span>
                    <span>Edit profile</span>
                </EditProfileButton>
              </ProfileUsernameContainer>
          </ProfileInfoContainer>
          <TabsContainer>
            <Tab>Profile</Tab>
            <Tab>Cards</Tab>
            <Tab>Settings</Tab>
          </TabsContainer>
        </InnerContainer>
      </Container>
    )
  }
}

export default ProfileHeader
