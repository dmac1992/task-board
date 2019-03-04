import React from 'react';
import { Link } from 'react-router-dom'
import "./Header.scss";

import HeaderButtonGroup from './HeaderButtonGroup';
import HeaderButton from './HeaderButton';
import HeaderSearch from './HeaderSearch';

//popups
import BoardsPopup from './header-popups/BoardsPopup';
import CreatePopup from './header-popups/CreatePopup';
import NotifcationsPopup from './header-popups/NotifcationsPopup';
import MenuPopup from './header-popups/MenuPopup';

//icons
import 'styles/icons.css';

class Header extends React.Component {

    render() {
        return (
            <div className="header">
                <HeaderButtonGroup>
                    <HeaderButton icon="icon-home" navigation="/"></HeaderButton>
                    <HeaderButton text="Boards" popUp={BoardsPopup} icon="icon-page-multi" />
                    <HeaderSearch />
                </HeaderButtonGroup>
                <HeaderButtonGroup>
                    <HeaderButton  popUp={CreatePopup} icon="icon-plus"  />
                    <HeaderButton  popUp={NotifcationsPopup} icon="icon-bell"/>
                    <HeaderButton  popUp={MenuPopup} icon="icon-user"/>
                </HeaderButtonGroup >
             </div>
        )
       
    }
}

export default Header;