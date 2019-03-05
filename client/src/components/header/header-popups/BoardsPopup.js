import React from 'react';
import "./headerPopup.scss";


class BoardsPopup extends React.Component {

     popUpStyles = () => {
        const style = {};
        if (this.props.pullPopUp === "left") {
            style['left'] = 0;
        } else {
            style['right'] = 0;
        }
        return style;

    }    

    render() {
        return <div className="headerPopUp" style={this.popUpStyles()}>BOARDS</div>
    }
}

export default BoardsPopup;

//all going to have piece of state that says whether they are showing their respective popup