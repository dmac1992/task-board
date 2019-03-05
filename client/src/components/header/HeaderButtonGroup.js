import React from 'react';
import "./HeaderButtonGroup.scss";
import { connect } from "react-redux";

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

    renderPopUp() {
        if(this.props.popUp) {
            if (this.props.menuSide === "left") {
                return <this.props.popUp style={{left: "0px"}}/>
            } else {
                return <this.props.popUp style={{right: "0px"}}/>
            }
        }
    }

    render() {
        return (
            <div className="headerButtonGroup">
                {this.renderChildren()}
                {this.renderPopUp()}
            </div>
        )
    }
    
}

function mapStateToProps({header}, ownProps)  {
    if (ownProps.menuSide === "left") {
        return { popUp: header.activeLeftPopUp }
    } else {
        return { popUp: header.activeRightPopUp }
    }
}

export default connect(mapStateToProps, {})(HeaderButtonGroup);