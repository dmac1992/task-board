import React from 'react';
import "./HeaderButtonGroup.scss";
import { connect } from "react-redux";
import { clearActiveLeftPopUp, clearActiveRightPopUp } from 'actions/header';

class HeaderButtonGroup extends React.Component  { 

    constructor(props) {
        super(props);
    }

    renderChildren() {
        return React.Children.map(this.props.children, child => {
            if(child.props.popUp) {
                return React.cloneElement(child, { togglePopUp: this.togglePopUp } );
            } else {
                return child;
            }
        })
    }

    render() {
        return (
            <div className="headerButtonGroup">
                {this.renderChildren()}
                {(this.props.popUp) ? <this.props.popUp position={this.props.position} /> : null}
            </div>
        )
    }
}

function mapStateToProps({ header }, { position })  {
    switch (position) {
        case "left-menu":
            return { popUp: header.activeLeftPopUp }
        case "right-menu":
            return { popUp: header.activeRightPopUp }
    }
}

export default connect(mapStateToProps, {})(HeaderButtonGroup);