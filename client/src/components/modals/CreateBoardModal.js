import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import styled from 'styled-components';

import { setActiveModal } from "actions/modal";


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
`;

const NameInput = styled.input`
  display: block;
  margin-bottom: 5px;
  padding: 3px;
`;

const RestrictionsDropdown = styled.select``;
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
const SubmitButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  margin-top: 7px;
  background-color: $grayscale;
  padding: 7.5px 15px;
`;






export class CreateBoardModal extends Component {
  static propTypes = {
    prop: PropTypes
  }

  clearModal = () =>  {
      this.props.setActiveModal(null);
  }

  render() {
    return (
            <Form>
                <TopHalf>
                    <ModalOptions>
                        <ClearModalIcon className="icon-times" onClick={this.clearModal}></ClearModalIcon>
                        <NameInput placeholder="Add board title"></NameInput>
                        <RestrictionsDropdown name="board-restrictions">
                            <option value="private">private</option>
                            <option value="private">public</option>
                        </RestrictionsDropdown>
                    </ModalOptions>

                    <ColorsGrid>
                        <GridColor className="create-board-modal-color"></GridColor>
                        <GridColor className="create-board-modal-color"></GridColor>
                        <GridColor className="create-board-modal-color"></GridColor>
                        <GridColor className="create-board-modal-color"></GridColor>
                        <GridColor className="create-board-modal-color"></GridColor>
                        <GridColor className="create-board-modal-color"></GridColor>
                        <GridColor className="create-board-modal-color"></GridColor>
                        <GridColor className="create-board-modal-color"></GridColor>
                        <GridColor className="create-board-modal-color"></GridColor>
                    </ColorsGrid>
                </TopHalf>
                <SubmitButton className="create-board-modal-submit-button">
                    <span>Create Board</span>
                </SubmitButton>
            </Form>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
    setActiveModal
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateBoardModal)
