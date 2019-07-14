import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components';

import { setActiveModal } from "actions/modal";
import { setFloatingPopup } from 'actions/floatingPopups';
import { createBoard } from 'actions/boards';

import variables from 'variables'
//floating popups
import CreateBoardFloatingPrivacyMenu from 'components/floated-popup-system/modals/CreateBoardFloatingPrivacyMenu';

const Form = styled.form`
  width: 404px;
  margin: 0 auto;
  margin-top: 30px;
`;

//top half elements
const TopHalf = styled.div`
  display: flex;
`;
const ModalOptions = styled.div`
  height: 96px;
  background-color: olivedrab;
  padding: 5px;
  flex-grow: 1;
  position: relative;
`;
const ClearModalIcon = styled.span`
  position: absolute;
  right: 5px;
  top: 5px;
  cursor: pointer;
  color: white;
`;

const NameInput = styled.input`
  display: block;
  margin-bottom: 5px;
  padding: 6px;
  background-color: transparent;
  border-radius: 3px;
  font-weight: bold;
  color: white;
  :focus {
    background: hsla(0,0%,100%,.3)!important;
  }
  :hover {
    background: hsla(0,0%,100%,.15)!important;
  }
`;

const  ColorsGrid = styled.ul`
  height: 96px;
  width: 100px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-gap: 4px;
  margin-left: 4px;
`;
const GridColor = styled.li`
  background-color: lightcoral;
  border-radius: 3px;
`;

const TeamsButton = styled.button`
  display: block;
  background: transparent;
  padding: 5px;
  border-radius: 3px;
  color: white;
  :hover {
    background: hsla(0,0%,100%,.15);
  }
  padding: 5px;
  span:first-of-type {
    margin-right: 5px;
  }
`;

const PrivacyLevelButton = styled.button`
  display: block;
  background: transparent;
  padding: 5px;
  border-radius: 3px;
  color: white;
  :hover {
    background: hsla(0,0%,100%,.15);
  }
  padding: 5px;
  span:nth-of-type(2) {
    margin-left: 5px;
    margin-right: 5px;
  }
`;

const SubmitButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  margin-top: 7px;
  background-color: $grayscale;
  padding: 7.5px 15px;
  cursor: not-allowed;
`;

export class CreateBoardModal extends Component {

  constructor(props) {
    super(props);
    this.privacyButtonRef = React.createRef();
  }

  

  state = {
    boardNameInput: '',
    team: '',
    privacyLevel: '',
    colorChosen: ''
  }

  clearModal = () =>  {
      this.props.setActiveModal(null);
  }

  enabledButtonStyles = {
    cursor: 'pointer',
    backgroundColor: 'green',
    color: 'white'
  }

  renderSubmitButton = () => {
    if ( this.state.boardNameInput.length > 0 ) {
      return (
        <SubmitButton style={this.enabledButtonStyles}>Create Board</SubmitButton>
      )
    } else {
      return (
        <SubmitButton disabled> <span>Create Board</span> </SubmitButton>
      )
    }
  }

  updateInput = (e) => {
    this.setState({boardNameInput: e.target.value})
  }

  teamsButtonHandler = (e) => {
    e.preventDefault();
  }

  privacyButtonHandler = (e) => {
    e.preventDefault();
    this.props.setFloatingPopup(CreateBoardFloatingPrivacyMenu, this.privacyButtonRef);
  }

  renderColorOptions = () => {
    return variables.boardColorOptions.map(colorOption => {
      return (
        <GridColor style={{backgroundColor: colorOption}} />
      )
    })
  }

  createBoard = () => {
    const newBoard = {};
    this.props.createBoard(newBoard);
  }
  
  render() {
    return (
            <Form>
                <TopHalf>
                    <ModalOptions>
                        <ClearModalIcon className="icon-times" onClick={this.clearModal}></ClearModalIcon>
                        <NameInput placeholder="Add board title" autocomplete='off' spellcheck='false' value={this.state.boardNameInput} onChange={this.updateInput}></NameInput>
                        <TeamsButton onClick={this.teamsButtonHandler} >
                          <span>No team</span>
                          <span>&#xfe40;</span>
                        </TeamsButton>
                        <PrivacyLevelButton ref={this.privacyButtonRef} onClick={this.privacyButtonHandler}>
                          <span className='icon-lock'></span>
                          <span>Private</span>
                          <span>&#xfe40;</span>
                        </PrivacyLevelButton>
                    </ModalOptions>
                    <ColorsGrid>
                      {/*
                        <GridColor className="create-board-modal-color"></GridColor>
                        <GridColor className="create-board-modal-color"></GridColor>
                        <GridColor className="create-board-modal-color"></GridColor>
                        <GridColor className="create-board-modal-color"></GridColor>
                        <GridColor className="create-board-modal-color"></GridColor>
                        <GridColor className="create-board-modal-color"></GridColor>
                        <GridColor className="create-board-modal-color"></GridColor>
                        <GridColor className="create-board-modal-color"></GridColor>
                        <GridColor className="create-board-modal-color"></GridColor>

                      */}
                      {this.renderColorOptions()}
                    </ColorsGrid>
                </TopHalf>
               {this.renderSubmitButton()}
            </Form>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
    setActiveModal,
    setFloatingPopup,
    createBoard
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateBoardModal)
