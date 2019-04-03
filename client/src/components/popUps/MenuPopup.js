import React from 'react';
import styled from 'styled-components';



import PopUpTitle from "./PopUpTitle";

const Container = styled.div`
    width: 250px;
    box-shadow: 5px 10px;
    top: 35px;
    box-shadow: 0px 3px 19px 0px rgba(0,0,0,0.75);
    background-color: #fff;
    z-index: 100;
`;
const Section = styled.div`
    margin-top: 5px;
    margin-right: 5px;
`;
const Link = styled.span`
    padding: 5px;
    padding-left: 10px;
    cursor: pointer;
    &:hover {
        background-color: #8D6A9F;
    }
    display: block;
`;


class MenuPopup extends React.Component {


    render() {
        return (
            <Container>
                <PopUpTitle title="User name" clearPopup={this.props.clearPopup} />
                <Section>
                    <Link>Profile</Link>
                    <Link>Cards</Link>
                    <Link>Settings</Link>
                </Section>
                <Section>
                    <Link>Help</Link>
                    <Link>Shortcuts</Link>
                    <Link>Change Language...</Link>
                </Section>
                <Section>
                    <Link>Log Out</Link>
                </Section>
            </Container>
        )
    }
}

export default MenuPopup;

//all going to have piece of state that says whether they are showing their respective popup