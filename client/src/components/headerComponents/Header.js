import React from 'react';
import { Link } from 'react-router-dom'

class Header extends React.Component {

    render() {
        return (
            <div className="header">
                <Link to="/" className="header__home-button">Home</Link>
                <button className="header__boards-button">Boards</button>
                <input className="header__search-bar" placeholder="search . . ."></input>
             </div>
        )
       
    }
}

export default Header;