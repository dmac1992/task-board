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


    render() {
        return (
            <div className="headerButtonGroup">
                {this.renderChildren()}
                {(this.props.popUp) ? <this.props.popUp pullPopUp={this.props.menuSide} /> : null}
            </div>
        )
    }
}

function mapStateToProps(state, ownProps)  {
    if (ownProps.menuSide === "left") {
        return { popUp: state.header.activeLeftPopUp }
    } else {
        return { popUp: state.header.activeRightPopUp }
    }
}

export default connect(mapStateToProps, {})(HeaderButtonGroup);