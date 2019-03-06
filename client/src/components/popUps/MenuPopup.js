import React from 'react';
import "./header-popup.scss";


class MenuPopup extends React.Component {

     

    render() {
        const styles = ( this.props.pullPopUp === "left") ? { left: "0px"} : { right: "0px" };
        return (
            <div className="headerPopUp" style={styles}>
                MENU
            </div>
        )
    }
}

export default MenuPopup;

//all going to have piece of state that says whether they are showing their respective popup