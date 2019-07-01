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

class ChecklistItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            checked: this.props.checklistItem.checked
        }
    }

    componentDidMount() {
       
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

    render() {
        
        return (
            <Container>
                {this.renderCheckbox()}
                <CheckboxName>{this.props.checklistItem.name}</CheckboxName>
            </Container>
        )
    }
}

export default ChecklistItem
