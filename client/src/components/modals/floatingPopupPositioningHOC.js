import React, { Component } from 'react'

export function floatingPopupPositioningHOC (Popup, anchorRef, clearFloatingPopup) {

    return class extends React.Component {

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
            //logic
            let x, y;
            //get x and y based on ref co-ordinates.
            // let viewportHeight = window.innerHeight;
            // let viewportWidth = window.innerWidth;
            x = this.state.anchorRef.current.offsetLeft;
            y = this.state.anchorRef.current.offsetTop;

            //TODO:

            this.setState({coords: {
                top: `${y}px`,
                left: `${x}px`
            }});

        }
    

        render() {
            return (
                <Popup coords={this.state.coords} clearFloatingPopup={clearFloatingPopup} />
            )
        }
    }
   
}


