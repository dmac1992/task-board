import React from 'react'
import { connect } from 'react-redux';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

import { floatingPopupPositioningHOC } from './floatingPopupPositioningHOC'
import { setFloatingPopup } from 'actions/floatingPopups';

//floating menus
import AddMembers from 'components/single-board-task-popup/side-menu-popups/AddMembers';


class FloatedPopupPortal extends React.Component {

    constructor() {
        super();
    }

    renderFloatingPopup = () => {
        if ( this.props.floatingPopup) {
            switch(this.props.floatingPopup.floatingPopup) {
                case AddMembers:
                    return AddMembers;
                default:
                    return null;
            }
        } else {
            return null;
        }
    }

    clearFloatingPopup = () => {
        console.log('clear floating popup');
        this.props.setFloatingPopup(null, null);
    }

    render() {
        let FloatingPopup = this.renderFloatingPopup();
        if (FloatingPopup) {
            FloatingPopup = floatingPopupPositioningHOC(FloatingPopup, this.props.floatingPopup.anchorRef, this.clearFloatingPopup);
            return (
                ReactDOM.createPortal(<FloatingPopup/>, document.querySelector('#floating-portal'))
            );
        } else {
            return null;
        }
        
    }
   
}

const mapStateToProps = ({floatingPopup}) => {
    return {
        floatingPopup
    }
}



export default connect(mapStateToProps, { setFloatingPopup })(FloatedPopupPortal);
