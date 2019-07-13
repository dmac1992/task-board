import React from 'react'
import styled from 'styled-components';
import { connect } from 'react-redux';
// import "./home-feed.scss";

import HomeFeedItem from './HomeFeedItem';

const HomeFeedContainer = styled.div`
    width: 500px;
    padding-left: 30px;
    padding-right: 30px;
`;

const HomeFeedTitleContainer = styled.div`
    position: relative;
    padding-left: 30px;
    margin-bottom: 20px;    
`;

const CheckIcon = styled.span`
    position: absolute;
    left: 0;
    top: 2px;
`;

const ShowMoreButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    border-radius: 5px;
    cursor: pointer;
    &:hover {
        background-color: #DCDCDC;
    }
`;

class HomeFeed extends React.Component {

    state = {

    }

    renderHomeFeedItems = () => {
      return this.props.comments
        .sort((a, b) => a > b)
        .slice(0,6)
        .map(comment => <HomeFeedItem comment={comment} key={comment.id} ></HomeFeedItem>)
    }

    render() {
      return (
        <HomeFeedContainer>
          <HomeFeedTitleContainer>
            <CheckIcon className="icon-check"></CheckIcon>
            <span>UP NEXT</span>
          </HomeFeedTitleContainer>
         {this.renderHomeFeedItems()}
          <ShowMoreButton>
              <span>Show more</span>
          </ShowMoreButton>
        </HomeFeedContainer>
      )
    }
    
}

const mapStateToProps = (state, ownProps) => {
  return {
    comments: state.comments
  }
}

export default connect(mapStateToProps, null)(HomeFeed)
