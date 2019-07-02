import React, { Component } from 'react'
import styled from 'styled-components'

const Container = styled.li`
    display: flex;
    margin-top: 10px;
    align-items: center;
`;

const Checkbox = styled.div`
    position: relative;
    box-shadow: inset 0 0 0 2px #dfe1e6;
    background-color: #fafbfc;
    border-radius: 3px;
    height: 30px;
    width: 30px;
    margin-right: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Tick = styled.span``;

const CheckboxName = styled.span`
    flex-grow: 1;
`;

const DeleteItemIcon = styled.span`
    margin-left: auto;
    cursor: pointer;
`;

class ChecklistItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            checked: this.props.checklistItem.checked
        }
    }
    
    componentWillUnmount() {
        if ( this.state.checked ) {
            this.props.subtractFromCheckboxesCheckedCount();
        } 
        this.props.decrementTotalCheckboxCount();
    }


    renderCheckbox = () => {
        if ( this.state.checked ) {
            return (
                <Checkbox onClick={this.uncheckCheckbox}>
                    <Tick className='icon-check' />
                </Checkbox>
            )
        } else {
            return <Checkbox onClick={this.checkCheckbox}/>
        }
    } 

    checkCheckbox = () => {
        this.setState({checked: true});
        this.props.addToCheckboxesCheckedCount();
    }

    uncheckCheckbox = () => {
        this.setState({checked: false});
        this.props.subtractFromCheckboxesCheckedCount();
    }

    deleteCheckBox = () => {
        this.props.deleteChecklistItem(this.props.checklistItem.id);
    }

    //TODO - the delete item icon needs to be converted to a popup. the popup offers delete functionality and the ability to convert the item to a task.
    render() {
        
        return (
            <Container>
                {this.renderCheckbox()}
                <CheckboxName>{this.props.checklistItem.name}</CheckboxName>
                <DeleteItemIcon onClick={this.deleteCheckBox} className='icon-times' />
            </Container>
        )
    }
}

export default ChecklistItem
