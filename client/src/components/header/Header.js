import React from 'react';
import { connect } from 'react-redux'
import { compose } from 'redux';
import { withRouter } from "react-router";
import "./Header.scss";

import HeaderButtonGroup from './HeaderButtonGroup';
import HeaderButton from './HeaderButton';
import HeaderSearch from './HeaderSearch';
import LeftPopUp from './LeftPopUp';
import RightPopUp from './RightPopUp';

//popups
import BoardsPopup from 'components/popups/boardsPopup/BoardsPopup';
import CreatePopup from 'components/popups/CreatePopup';
import NotificationsPopup from 'components/popups/NotificationsPopup';
import MenuPopup from 'components/popups/MenuPopup';

import * as headerActions from 'actions/header';

//action creators
    //left popup ( have to be bound to component )
    //right popup
    //navigate to home
    //need left and right popup sections in header??? button group doesnt make sense

//icons
import 'styles/icons.css';

class Header extends React.Component {


    navigateHome = () => {
        this.props.history.push("/");
    }

    render() {
        console.log(this.props);
        //current active popups on store
        const { activeLeftPopUp, activeRightPopUp } = this.props;
        //set current active headerpopups
        const {setActiveLeftPopUp, setActiveRightPopUp } = this.props;
        return (
            <div className="header">
                <div className="headerButtonGroup">
                    <HeaderButton icon="icon-home"  onClick={this.navigateHome}></HeaderButton>
                    <HeaderButton text="Boards" onClick={() => setActiveLeftPopUp(BoardsPopup)} icon="icon-page-multiple" />
                    <HeaderSearch />
                    {activeLeftPopUp ? <LeftPopUp Popup={activeLeftPopUp} /> : null}
                </div>
                <div className="headerButtonGroup">
                    <HeaderButton  onClick={() => setActiveRightPopUp(CreatePopup)} icon="icon-plus"   />
                    <HeaderButton  onClick={() => setActiveRightPopUp(NotificationsPopup)} icon="icon-bell"/>
                    <HeaderButton  onClick={() => setActiveRightPopUp(MenuPopup)} icon="icon-user"/>
                    {activeRightPopUp ? <RightPopUp Popup={activeRightPopUp} /> : null}
                </div>
             </div>
        )
       
    }
}

const mapStateToProps = (state) => ({ ...state.header });

const enhance = compose(
    withRouter,
    connect(mapStateToProps, { ...headerActions })
);

export default enhance(Header); 

// export default connect(mapStateToProps, { ...headerActions })(Header);