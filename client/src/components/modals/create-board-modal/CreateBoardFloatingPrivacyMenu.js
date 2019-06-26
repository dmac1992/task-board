import React, { Component } from 'react'
import styled from 'styled-components';

const Container = styled.ul`
    background-color: white;
    position: absolute;
    padding: 35px 0;
    width: 370px;
`;

const CloseIcon = styled.span`
    position: absolute;
    top: 5px;
    right: 5px;
`;


const PrivacyOption = styled.li`
    padding: 10px 20px;
    cursor: pointer;
    :hover {
        background-color: #298fca;
        > * {
            color: white;
        }
        
    }
`;
const PrivacyOptionTopHalf = styled.div`
    margin-bottom: 3px;
`;

const IconPrivate = styled.span`
    margin-right: 5px;
    color: red;
`;

const IconPublic = styled.span`
    margin-right: 5px;
    color: green;
`;
const Title = styled.span``;


const Description = styled.p`
`;



export class CreateBoardFloatingPrivacyMenu extends Component {

    render() {

        return (
            <Container style={this.props.coords} >
                <CloseIcon className='icon-times' onClick={this.props.clearFloatingPopup} />
                <PrivacyOption>
                    <PrivacyOptionTopHalf>
                        <IconPrivate className='icon-lock' />
                        <Title>Private</Title>
                    </PrivacyOptionTopHalf>
                    <Description>Only board members can see and edith this board</Description>
                </PrivacyOption>
                <PrivacyOption>
                    <PrivacyOptionTopHalf>
                        <IconPublic className='icon-world' />
                        <Title>Public</Title>
                    </PrivacyOptionTopHalf>
                    <Description>Anyone on internet can see this board. Only board members can edit</Description>
                </PrivacyOption>
            </Container>
        )
        
    }
}

export default CreateBoardFloatingPrivacyMenu
