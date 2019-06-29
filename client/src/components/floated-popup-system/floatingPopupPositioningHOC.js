import React, { Component } from 'react'
import { connect } from 'react-redux';

//actions
import { setFloatingPopup } from 'actions/floatingPopups';
import { setFloatingPopupInplace } from 'actions/floatingPopups';

export function floatingPopupPositioningHOC (Popup, anchorRef, clearFloatingPopup) {

    class WrappedFloatingPopup extends React.Component {

        state = {
            coords: {
                top: 0,
                left: 0
            },
            anchorRef,
        }
    
        componentDidMount() {
            window.addEventListener('resize', this.determineCoords);
            this.determineCoords();
        }
    
        componentWillUnmount() {
            window.removeEventListener('resize', this.determineCoords);
        }
    
        determineCoords = () => {

         
            const domRect = this.state.anchorRef.current.getBoundingClientRect();
            const {x, y} = domRect;
            const refElementHeight = domRect.height;
        
            //TODO:
            this.setState({coords: {
                top: `${y + refElementHeight}px`,
                left: `${x}px`
            }});

        }

        render() {
            return (
                <Popup 
                    coords={this.state.coords} 
                    clearFloatingPopup={clearFloatingPopup} 
                    setFloatingPopup={this.props.setFloatingPopup}
                    setFloatingPopupInplace={this.props.setFloatingPopupInplace} 
                    floatingPopup={this.props.floatingPopup}
                />
            )
        }
    }

    const mapStateToProps = ({ floatingPopup }) => {
        return {
            floatingPopup
        }
    }

    return connect(mapStateToProps, {setFloatingPopup, setFloatingPopupInplace})(WrappedFloatingPopup);
    
}


