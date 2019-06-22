import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background-color: rgba(0, 0, 0, 0.75);
    z-index: 1;
`;


function ModalBackgroundHOC(WrappedComponent) {
    return (
        <Container>
            <WrappedComponent />
        </Container>
    )
}

export default ModalBackgroundHOC
