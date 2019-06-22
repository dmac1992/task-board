import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { setActiveModal } from 'actions/modal';
import { setFloatingPopup } from 'actions/floatingPopups';

import Header from './Header';
import Description from './Description';
import AddComment from './AddComment';
import SideMenu from './SideMenu';
import Activity from './Activity';

const Container = styled.div`
    width: 800px;
    background-color: #f4f5f7;
    margin-left: auto;
    margin-right: auto;
    margin-top: 30px;
    padding: 20px 60px;
    border-radius: 5px;
`;

const ColumnsContainer = styled.div`
    display: flex;
    height: 600px;
`

const LeftHandSide = styled.div`
    flex-basis: 70%;
    height: 100%;
`;
const RightHandSide = styled.div`
    flex-basis: 30%;
    height: 100%;
`;

class TaskPopup extends React.Component {

    state = {

    }

    clearPopup = () => {
        this.props.setActiveModal(null);
        this.props.setFloatingPopup(null, null);
    }

    MenuFloatingPopup = (popup, ref) => {
        this.props.setFloatingPopup(popup, ref);
    }

    render() {
        console.log(this.props);
        return (
            <Container>
                <Header clearPopup={this.clearPopup} />
                <ColumnsContainer>
                    <LeftHandSide>
                        <Description />
                        <AddComment />
                        <Activity />
                    </LeftHandSide>
                    <RightHandSide>
                        <SideMenu MenuFloatingPopup={this.MenuFloatingPopup} />
                    </RightHandSide>
                </ColumnsContainer>
            </Container>
        );
    }

}


export default connect(null, {setActiveModal, setFloatingPopup })(TaskPopup);
