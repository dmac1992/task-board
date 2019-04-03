import React from 'react'
import styled from 'styled-components';



const Title = styled.span`
    font-size: 20px;
    margin-top: 5px;
    margin-left: 5px;
    display: inline-block;
    position: relative;
    z-index: 2;
    color: white;
`;

const BottomIconsContainer = styled.div`
    position: absolute;
    bottom: 5px;
    width: 20px;
    right: -20px;
    transition: right .5s;
    z-index: 2;
    > span {
      font-size: 16px;
      color: white;
    }

    > span:first-of-type {
        margin-right: 5px;
    }

`;

const Overlay = styled.div`
    background-color: rgba(0, 0, 0, 0);
    height: 100%;
    width: 100%; 
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    transition: background-color .2s;
`;



function BoardLink(props) {

  const BoardLinkContainer = styled.div`
    background-color: ${props.color};
    height: 100px;
    position: relative;
    overflow: hidden;
    padding: 5px;
    cursor: pointer;
    :hover > div {
      right: 25px;
    }
    :hover .overlay {
      background-color: rgba(0, 0, 0, 0.3);
    }
`;


  return (
    <BoardLinkContainer>
        <Overlay className="overlay"/>
        <Title>{props.name}</Title> 
        <BottomIconsContainer>
          <span className="icon-circle"></span>
          <span className="icon-star"></span>
        </BottomIconsContainer>
    </BoardLinkContainer>
  )
}

export default BoardLink
