import React from 'react';
import { Link } from 'react-router-dom'
import "./Header.scss";

import HeaderButtonGroup from './HeaderButtonGroup';
import HeaderButton from './HeaderButton';
import HeaderSearch from './HeaderSearch';

//popups
import BoardsPopup from 'components/popups/boardsPopup/BoardsPopup';
import CreatePopup from 'components/popups/CreatePopup';
import NotificationsPopup from 'components/popups/NotificationsPopup';
import MenuPopup from 'components/popups/MenuPopup';

//icons
import 'styles/icons.css';

class Header extends React.Component {

    render() {
        return (
            <div className="header">
                <HeaderButtonGroup position="left-menu">
                    <HeaderButton icon="icon-home"  navigation="/"></HeaderButton>
                    <HeaderButton text="Boards" position="left-menu" popUp={BoardsPopup} icon="icon-page-multiple" />
                    <HeaderSearch />
                </HeaderButtonGroup>
                <HeaderButtonGroup position="right-menu">
                    <HeaderButton popUp={CreatePopup}  position="right-menu" icon="icon-plus"   />
                    <HeaderButton popUp={NotificationsPopup} position="right-menu" icon="icon-bell"/>
                    <HeaderButton  popUp={MenuPopup} position="right-menu" icon="icon-user"/>
                </HeaderButtonGroup >
             </div>
        )
       
    }
}

export default Header;