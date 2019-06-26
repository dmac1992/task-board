import React from 'react'
import { connect } from 'react-redux';
import ReactDOM from 'react-dom';

import { floatingPopupPositioningHOC } from './floatingPopupPositioningHOC'
import { setFloatingPopup } from 'actions/floatingPopups';

//floating side menus from task popup
import AddMembers from 'components/single-board-task-popup/side-menu-popups/AddMembers';
import DueDate from 'components/single-board-task-popup/side-menu-popups/DueDate';
import AddLabels from 'components/single-board-task-popup/side-menu-popups/AddLabels';
import AddChecklist from 'components/single-board-task-popup/side-menu-popups/AddChecklist';

//floating popups from single board page
import BoardInviteFloatingPopup from 'components/single-board-page/BoardInviteFloatingPopup';
import BoardAddTeamFloatingPopup from 'components/single-board-page/BoardAddTeamFloatingPopup';
import BoardCreateTeamFloatingPopup from 'components/single-board-page/BoardCreateTeamFloatingPopup';
import BoardChangePrivacyFloatingPopup from 'components/single-board-page/BoardChangePrivacyFloatingPopup';
import BoardChangeAdminLevelFloatingPopup from 'components/single-board-page/BoardChangeAdminLevelFloatingPopup';


//floating side menus create board modal
import CreateBoardFloatingPrivacyMenu from 'components/modals/create-board-modal/CreateBoardFloatingPrivacyMenu';

class FloatedPopupPortal extends React.Component {

    constructor() {
        super();
    }

    renderFloatingPopup = () => {
        if ( this.props.floatingPopup) {
            switch(this.props.floatingPopup.floatingPopup) {
                case AddMembers:
                    return AddMembers;
                case DueDate:
                    return DueDate;
                case AddLabels:
                    return AddLabels;
                case AddChecklist:
                    return AddChecklist;
                case CreateBoardFloatingPrivacyMenu:
                    return CreateBoardFloatingPrivacyMenu;
                case BoardInviteFloatingPopup:
                    return BoardInviteFloatingPopup;
                case BoardAddTeamFloatingPopup:
                    return BoardAddTeamFloatingPopup;
                case BoardCreateTeamFloatingPopup:
                    return BoardCreateTeamFloatingPopup;
                case BoardChangePrivacyFloatingPopup:
                    return BoardChangePrivacyFloatingPopup;
                case BoardChangeAdminLevelFloatingPopup:
                    return BoardChangeAdminLevelFloatingPopup
                default:
                    return null;
            }
        } else {
            return null;
        }
    }

    clearFloatingPopup = () => {
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
