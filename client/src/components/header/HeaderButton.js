import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './HeaderButton.scss';
import 'styles/icons.css';
import { setActiveLeftPopUp, setActiveRightPopUp } from 'actions/header.js';


class HeaderButton extends React.Component  {

    renderIcon() {
        if (this.props.icon) {
            return (<span className={`${this.props.icon} headerButton-icon`}></span>)
        }
    }

    renderText() {
        if (this.props.text) {
            return (<span className="headerButton-text">{this.props.text}</span>)
        }
    }

   
    conditionalStyling() {
        const styles = {};
        if (this.props.icon && !this.props.text) {
            styles['width'] = "30px";
            styles['textAlign'] = "center";
        }
        return styles;
    }

    //needs default case
    togglePopUp = () => {
        const {popUp, position} = this.props;
        switch(position) {
            case "right-menu":
                this.props.setActiveRightPopUp(popUp);
                break;
            case "left-menu":
                this.props.setActiveLeftPopUp(popUp);
                break;
        }
    }
    
    render() {
        if (!this.props.navigation) {
            return (
                <a className="headerButton" style={this.conditionalStyling()} onClick={this.togglePopUp} >
                    {this.renderIcon()}
                    {this.renderText()}
                </a>
            )
        }
        else {
            return (
                <Link className="headerButton" to={this.props.navigation} style={this.conditionalStyling()}>
                    {this.renderIcon()}
                    {this.renderText()}
                </Link>
            );
        }
    }
   
}

export default connect(null, {setActiveLeftPopUp, setActiveRightPopUp})(HeaderButton);