import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import styled from 'styled-components';


const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
    border-radius: 6px;
    box-shadow: 0px 3px 19px 0px rgba(0,0,0,0.75);
`;

const TopHalfContainer = styled.div`
    background-color: #BB342F;
    padding: 8px;
`;

const TitleSectionContainer = styled.div`
    background-color: white;
    border-radius: 6px;
    padding: 8px;
    margin-bottom: 3px;
`;

const Color = styled.span`
    display: inline-block;
    background-color: aquamarine;
    width: 40px;
    border-radius: 3px;
    height: 10px;
`;

const HomeFeedItemTitle = styled.span`
    display: block;
    margin-bottom: 3px;
`;

const ShortDateContainer = styled.div`
    display: block;
    .icon-clock-o {
        font-size: 13px;
        margin-right: 5px;
    }
`;

const FullDescription = styled.span`
    color: white;
    margin-top: 5px;
    display: block;
`;

const BottomHalfContainer = styled.div`
    padding: 8px;
`;

const DueActionsContainer = styled.div`
    margin: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const DueContainer = styled.div`
    position: relative;
    padding-left: 20px;
    position: flex;
    .icon-clock-o {
        position: absolute;
        left: 0;
        top: 1px;
    }
`;

const ActionsButton = styled.button`
    background-color: transparent;
    border-style: none;
    height: 30px;
    width: 30px;
    border-radius: 50%;
    cursor: pointer;
    &:hover {
        background-color: #8D6A9F; 
    }
`;

const CompleteDismissContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

const CompleteDismissButton = styled.button`
    display: flex;
    width: 100%;
    cursor: pointer;
    border-radius: 4px;
    background-color: white;
    height: 40px;
    justify-content: center;
    border-style: solid;
    border-width: 1px;
    border-color: #8D6A9F;
    transition: background-color 1s;
    &:hover {
        background-color: #DCDCDC;
    }
    span:nth-of-type(1) {
        margin-right: 7px;
    }
`;




export class HomeFeedItem extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <Container>
            <TopHalfContainer>
                <TitleSectionContainer>
                    <Color />
                    <HomeFeedItemTitle>Peer review 1</HomeFeedItemTitle>
                    <ShortDateContainer>
                        <span className="icon-clock-o"></span>
                        <span className="home-feed-short-due-date">Mar 18</span>
                    </ShortDateContainer>
                </TitleSectionContainer>
                <FullDescription>
                    [2019 T1] SIT302: Week 3 [18-24 Mar]
                </FullDescription>
            </TopHalfContainer>
            <BottomHalfContainer>
                <DueActionsContainer>
                    <DueContainer>
                        <span className="icon-clock-o"></span>
                        <span className="home-feed-long-due-date">Due Mar 18 at 1:00 PM</span>
                    </DueContainer>
                    <ActionsButton>
                        <span className="icon-dot-3"></span>
                    </ActionsButton>
                </DueActionsContainer>
                <CompleteDismissContainer>
                    <CompleteDismissButton>
                        <span className="icon-check home-feed-complete-button-icon"></span>
                        <span className="">Complete</span>
                    </CompleteDismissButton>
                    <CompleteDismissButton>
                        <span className="icon-times home-feed-complete-button-icon"></span>
                        <span className="">Dismiss</span>
                    </CompleteDismissButton>
                </CompleteDismissContainer>
            </BottomHalfContainer>
      </Container>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeFeedItem)
