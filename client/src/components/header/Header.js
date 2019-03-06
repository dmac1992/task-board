import React from 'react';
import { Link } from 'react-router-dom'
import "./Header.scss";

import HeaderButtonGroup from './HeaderButtonGroup';
import HeaderButton from './HeaderButton';
import HeaderSearch from './HeaderSearch';

//popups
import BoardsPopup from 'components/popUps/boardsPopUp/BoardsPopup';
import CreatePopup from 'components/popUps/CreatePopup';
import NotificationsPopup from 'components/popUps/NotificationsPopup';
import MenuPopup from 'components/popUps/MenuPopup';

//icons
import 'styles/icons.css';

class Header extends React.Component {

    render() {
        return (
            <div className="header">
                <HeaderButtonGroup menuSide="left">
                    <HeaderButton icon="icon-home"  navigation="/"></HeaderButton>
                    <HeaderButton text="Boards" menuSide="left" popUp={BoardsPopup} icon="icon-page-multiple" />
                    <HeaderSearch />
                </HeaderButtonGroup>
                <HeaderButtonGroup menuSide="right">
                    <HeaderButton popUp={CreatePopup}  menuSide="right" icon="icon-plus"   />
                    <HeaderButton popUp={NotificationsPopup} menuSide="right" icon="icon-bell"/>
                    <HeaderButton  popUp={MenuPopup} menuSide="right" icon="icon-user"/>
                </HeaderButtonGroup >
             </div>
        )
       
    }
}

export default Header;