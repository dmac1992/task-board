import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
    position: relative;
`;

const TitleTextArea = styled.textarea`
    height: 33px;
    background: transparent;
    font-size: 20px;
    width: 100%;
    line-height: 33px;
    border: none;
    
`;
const CloseIcon = styled.span`
    position: absolute;
    right: -40px;
    top: -10px;
    line-height: 36px;
    height: 32px;
    width: 32px;
    text-align: center;
    cursor: pointer;
    border-radius: 50%;
    :hover {
        background-color: rgba(9,30,66,.13);
        color: #091e42;
    }
`;
const HeaderIcon = styled.span`
    position: absolute;
    left: -30px;
    top: -10px;
`;


function Header({clearPopup}) {
    return (
        <Container>
            <TitleTextArea className=''/>
            <CloseIcon className='icon-times' onClick={clearPopup}/>
            <HeaderIcon className='icon-clone'/>
        </Container>
    )
}

export default Header
