import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'

import "./CreateTeamPopup.scss";
import PopUpTitle from './PopUpTitle';


class CreateTeamPopup extends Component {
    
    generatePopUpStyles(position) {
        const styles = {};
        switch(position) {
            case "left-menu":
                styles['left'] = "0px";
                break;
            case "right-menu":
                styles['right'] = "0px";
                break;
        }
        return styles;
    }

    render() {
    return (
        <div className="popup create-team-popup" style={this.generatePopUpStyles(this.props.position)}>
            <PopUpTitle title="Create Team" clearPopup={this.props.clearPopup}/>
            <form className="create-team-form">
                <div className="create-team-form-inputblock">
                    <label htmlFor="team_name">Name</label>
                    <Field name="team_name" component="input" type="text" />
                </div>
                <div className="create-team-form-inputblock">
                    <label htmlFor="team_description">Description</label>
                    <Field name="team_description" component="input" type="text" />
                </div>
                <button type="submit"><span>Create</span></button>
            </form>
            <div className="create-team-popup-description">
                <p>A team is a group of boards and people. Use it to organize your company, side hustle, family, or friends</p>
                <p>Business Class gives your team more security, administrative controls, and unlimited Power-Ups. <a href="">Learn More.</a></p>
            </div>
        </div>
    )
  }
}


export default reduxForm({
    name: "createTeam"
})(CreateTeamPopup);
