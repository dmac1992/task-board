import React from 'react';
import styled from 'styled-components';

// import './HeaderButton.scss';
import 'styles/icons.css';

const Button = styled.a`
    padding: 2.5px;
    font-size: 16px;
    border-radius: 6px;
    height: 30px;
    cursor: pointer;
    background-color: #DDA448;
    min-width: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ButtonIcon = styled.span`
    top: 1px;
    position: relative;
`;

// if icon exists
const ButtonText = styled.span`
    margin-left: 2.5px;
`;


const HeaderButton = (props) => {
    return (
        <Button onClick={props.onClick} >
            {props.icon ? <ButtonIcon className={`${props.icon} headerButton-icon`}></ButtonIcon> : null}
            {props.text ? <ButtonText className="headerButton-text">{props.text}</ButtonText> : null}
        </Button>
    );
}

export default HeaderButton;

// class HeaderButton extends React.Component  {

    // renderIcon() {
    //     if (this.props.icon) {
    //         return (<span className={`${this.props.icon} headerButton-icon`}></span>)
    //     }
    // }

    // renderText() {
    //     if (this.props.text) {
    //         return (<span className="headerButton-text">{this.props.text}</span>)
    //     }
    // }

   
    // conditionalStyling() {
    //     const styles = {};
    //     if (this.props.icon && !this.props.text) {
    //         styles['width'] = "30px";
    //         styles['textAlign'] = "center";
    //     }
    //     return styles;
    // }

    //needs default case
    // togglePopUp = () => {
    //     const {popUp, position} = this.props;
    //     switch(position) {
    //         case "right-menu":
    //             this.props.setActiveRightPopUp(popUp);
    //             break;
    //         case "left-menu":
    //             this.props.setActiveLeftPopUp(popUp);
    //             break;
    //     }
    // }
    
//     render() {
//         if (!this.props.navigation) {
//             return (
//                 <a className="headerButton" style={this.conditionalStyling()} onClick={this.togglePopUp} >
//                     {this.renderIcon()}
//                     {this.renderText()}
//                 </a>
//             )
//         }
//         else {
//             return (
//                 <Link className="headerButton" to={this.props.navigation} style={this.conditionalStyling()}>
//                     {this.renderIcon()}
//                     {this.renderText()}
//                 </Link>
//             );
//         }
//     }
   
// }

// export default connect(null, {setActiveLeftPopUp, setActiveRightPopUp})(HeaderButton);