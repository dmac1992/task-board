import React, { Component } from 'react'
import styled from 'styled-components';
import { connect } from 'react-redux';

import { setFloatingPopup } from 'actions/floatingPopups';
import { deleteChecklist } from 'actions/checklist';

import DeleteChecklistFloatingPopup from 'components/floated-popup-system/single-board-task-popup/DeleteChecklistFloatingPopup';
import ChecklistItem from './ChecklistItem';

const Container = styled.div`
    position: relative;
    margin-top: 10px;
    width: 100%;
    margin-bottom: 20px;
`;

const SectionIcon = styled.span`
    position: absolute;
    top: 6px;
    left: -30px;
`

const Header = styled.div`
    margin-bottom: 5px;
    display: flex;
    align-items: center;
`;

const Title = styled.h3`
    display: inline-block;
    margin-right: 5px;
`;

const DeleteButton = styled.button`
    padding: 7px;
    background-color: rgba(9,30,66,.04);
    margin-left: auto;
`

const ProgressBarContainer = styled.div`
    display: flex;
    align-items: center;
    margin-top: 5px;
`;
const ProgressBarPercentage = styled.span`
    margin-right: 5px;
`;

const ProgressBar = styled.div`
    height: 5px;
    background-color: rgba(9,30,66,.08);
    flex-grow: 1;
`;

const CheckboxUL = styled.ul`
    margin-bottom: 6px;
`;


const ProgressBarFill = styled.div`
    height: 5px;
`;

const AddItemButton = styled.button`
    padding: 7px;
    background-color: rgba(9,30,66,.04);
`

export class Checklist extends Component {

    constructor(props) {
        super(props); 
        this.state = {
            numberOfCheckboxes: this.props.checklistItems.length,
            checkboxesCheckedCount: this.props.checklistItems.reduce((acc, item) => {
                return item.checked ? acc + 1 : acc
            }, 0)
        };
        this.progressBarRef = React.createRef();
        this.progressBarFillRef = React.createRef();
        this.deleteButtonRef = React.createRef();
    }

    componentDidMount() {
       this.updateProgressBar();
    }

    componentDidUpdate() {
        this.updateProgressBar();
    }

    openDeleteChecklistFloatingPopup = () => {
        this.props.setFloatingPopup(DeleteChecklistFloatingPopup, this.deleteButtonRef, { deleteChecklist: this.deleteChecklist })
    }

    deleteChecklist = () => {
        this.props.deleteChecklist(this.props.checklist.id);
    }

    addChecklistItem = () => {

    }
    

    renderChecklistItems = () => {
        return this.props.checklistItems.map((checklistItem) => {
            return (
                <ChecklistItem 
                    key={checklistItem.id} 
                    checklistItem={checklistItem} 
                    addToCheckboxesCheckedCount={this.addToCheckboxesCheckedCount}
                    subtractFromCheckboxesCheckedCount={this.subtractFromCheckboxesCheckedCount}
                />
            )
        })
    }

    addToCheckboxesCheckedCount = () => {
        console.log('adding to checkbox count');
        this.setState({checkboxesCheckedCount: this.state.checkboxesCheckedCount+1});
    }

    subtractFromCheckboxesCheckedCount = () => {
        console.log('subtracting from checkbox count');
        if ( this.state.checkboxesCheckedCount > 0 ) {
            this.setState({checkboxesCheckedCount: this.state.checkboxesCheckedCount - 1})
        }
    }

    //not working because state percentage being set to zero
    getProgressBarWidth = () => {
        //get width of progress bar
        const barWidth = this.progressBarRef.current.getBoundingClientRect().width;

        let fillBarWidth = 0;

        const progressBarPercentage = this.getProgressBarPercentage();

        //protect against divide by zero
        if ( progressBarPercentage ) {
             fillBarWidth = Math.round(barWidth / 100 * progressBarPercentage);
        } 
        
        //calculate width of this
        return `${fillBarWidth}px`;
    }

    getProgressBarPercentage = () => {
        const { numberOfCheckboxes, checkboxesCheckedCount } = this.state;
        return Math.round(checkboxesCheckedCount / numberOfCheckboxes * 100);
    }
  

    getProgressBarFillColor = () => {
        const progressBarPercentage = this.getProgressBarPercentage();
        let color = '';
        if (progressBarPercentage > 66 ) {
            color = 'green';
        } else if ( progressBarPercentage > 33 ) {
            color = 'orange'
        } else {
            color = 'red'
        }
        return color;
    }

  
    updateProgressBar = () => {
        this.progressBarFillRef.current.style.backgroundColor = this.getProgressBarFillColor();
        this.progressBarFillRef.current.style.width = this.getProgressBarWidth();
    }


    render() {
        const { checklist } = this.props;
        return (
            <Container>
                 <Header>
                    <Title>{checklist.name}</Title>
                    <SectionIcon className='icon-check-square-o'></SectionIcon>
                    <DeleteButton onClick={this.openDeleteChecklistFloatingPopup} ref={this.deleteButtonRef}>Delete</DeleteButton>
                </Header>
                <ProgressBarContainer>
                    <ProgressBarPercentage>{this.state.progressBarPercentage}%</ProgressBarPercentage>
                    <ProgressBar ref={this.progressBarRef}>
                        <ProgressBarFill ref={this.progressBarFillRef} />
                    </ProgressBar>
                </ProgressBarContainer>
                <CheckboxUL>
                    {this.renderChecklistItems()}
                </CheckboxUL>
                <AddItemButton>Add an item</AddItemButton>
            </Container>
        )
    }
}


const mapStateToProps = (state, ownProps) => {
    return {
        checklistItems: state.checklistItem.filter(checklistItem => checklistItem.checklistID === ownProps.checklist.id)
    }
}

export default connect(mapStateToProps, { setFloatingPopup, deleteChecklist })(Checklist)

