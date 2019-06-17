import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
    position: absolute;
    width: 350px;
    right: -350px;
    height: 100vh;
    background-color: #f4f5f7;
    padding: 0 20px;
    z-index: 2;
`;

const Header = styled.div`
    text-align: center;
    position: relative;
    margin-bottom: 15px;
    border-bottom: 1px solid gray;
    padding: 15px;
    margin-left: 5px;
    margin-right: 5px;
    .popup-close {
        position: absolute;
        right: 10px;
        cursor: pointer;
    }
`;

const MenuLinks = styled.div`
`;

const MenuLink = styled.div`
    padding: 5px;
    cursor: pointer;
    border-radius: 3px;
    :hover {
        background-color: orange;
    }
`;

const MenuIcon = styled.span`
    margin-right: 15px;
    position: relative;
    top: 3px;
`;

const BoardColor = styled.span`
    background-color: blue;
    width: 18px;
    height: 18px;
    border-radius: 3px;
    margin-right: 15px;
    display: inline-block;
    position: relative;
    top: 3px;
`;

function BoardSlideMenu(props) {
    return (
        <Container id='board-slide-menu'>
            <Header>
                <span className="popup-title"> Menu </span>
                <span className="popup-close icon-times" onClick={props.toggleMenu}></span>
            </Header>
            <MenuLinks>
                <MenuLink>
                    <MenuIcon className='icon-search'></MenuIcon>
                    <span>Search</span>
                </MenuLink>
                <MenuLink>
                    <MenuIcon className='icon-dot-3'></MenuIcon>
                    <span>More</span>
                </MenuLink>
                <MenuLink>
                        <BoardColor />
                        <span>Change board color</span>
                </MenuLink>
            </MenuLinks>
        </Container>
    )
}

export default BoardSlideMenu


