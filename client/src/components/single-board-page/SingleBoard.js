import React, { Component } from 'react'
import styled from 'styled-components';

import SingleBoardHeader from './SingleBoardHeader';
import SprintContainer from './SprintContainer';

const Container = styled.div`
    height: calc(100vh - 35px);
`;

const BoardsCanvas = styled.div`
    position: relative;
    overflow-x: scroll;
    background-color: purple;
    height: calc(100% - 34px);
    display: flex;
`;

class SingleBoard extends Component {

    state = {
        MenuOpen: false
    }

    toggleMenu = () => {
        let SlideMenu = document.querySelector('#board-slide-menu');
        if (this.state.MenuOpen) {
            SlideMenu.style.right = '-350px';
            this.setState({'MenuOpen': false});
        } else {
            SlideMenu.style.right = '0px';
            this.setState({'MenuOpen': true});
        }
    }

    render() {
        return (
            <Container>
                <SingleBoardHeader toggleMenu={this.toggleMenu}/>
                <BoardsCanvas>
                    <SprintContainer />
                    <SprintContainer />
                    <SprintContainer />
                    <SprintContainer />
                </BoardsCanvas>
            </Container>
        )
    }
}

export default SingleBoard;
