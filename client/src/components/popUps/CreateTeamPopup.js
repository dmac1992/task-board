import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import styled from 'styled-components';


import PopUpTitle from './PopUpTitle';
 

const Container = styled.div`
    width: 300px;
    box-shadow: 5px 10px;
    top: $header-height;
    box-shadow: 0px 3px 19px 0px rgba(0,0,0,0.75);
    background-color: #fff;
    z-index: 100;
`;
const Form = styled.form``;
const InputBlock = styled.form`
    margin-bottom: 5px;
    padding: 8px;
    label, input {
        display: block;
        width: 100%;
    }
    input {
        border: 1px solid gainsboro;
        padding: 5px;
        border-radius: 3px;
    }
`;
const Label = styled.label`
    margin-bottom: 5px;
`;

const SubmitButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 7px 15px;
    border-radius: 4px;
    margin-left: 8px;
    margin-bottom: 8px;
`; 
const DescriptionContainer = styled.div`
    padding: 8px;
    border-top: 1px solid #DCDCDC;
    p:first-of-type {
        margin-bottom: 8px;
    }
`;


class CreateTeamPopup extends Component {

    render() {
    return (
        <Container>
            <PopUpTitle title="Create Team" clearPopup={this.props.clearPopup}/>
            <Form>
                <InputBlock>
                    <Label htmlFor="team_name">Name</Label>
                    <Field name="team_name" component="input" type="text" />
                </InputBlock>
                <InputBlock className="create-team-form-inputblock">
                    <Label htmlFor="team_description">Description</Label>
                    <Field name="team_description" component="input" type="text" />
                </InputBlock>
                <SubmitButton type="submit"><span>Create</span></SubmitButton>
            </Form>
            <DescriptionContainer>
                <p>A team is a group of boards and people. Use it to organize your company, side hustle, family, or friends</p>
                <p>Business Class gives your team more security, administrative controls, and unlimited Power-Ups. <a href="">Learn More.</a></p>
            </DescriptionContainer>
        </Container>
    )
  }
}



export default reduxForm({
    name: "createTeam"
})(CreateTeamPopup);
