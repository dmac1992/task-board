import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { setActiveModal } from "actions/modal";
import "./CreateBoardModal.scss";

export class CreateBoardModal extends Component {
  static propTypes = {
    prop: PropTypes
  }

  clearModal = () =>  {
      this.props.setActiveModal(null);
  }

  render() {
    return (
      <div className="create-board-modal">
            <form className="create-board-modal-form">
                <div className="create-board-modal-form-tophalf">
                    <div className="create-board-modal-options">
                        <span class="icon-times" onClick={this.clearModal}></span>
                        <input class="create-board-modal-name-input" placeholder="Add board title"></input>
                        <select name="board-restrictions">
                            <option value="private">private</option>
                            <option value="private">public</option>
                        </select>
                    </div>

                    <ul className="create-board-modal-colors-grid">
                        <li className="create-board-modal-color"></li>
                        <li className="create-board-modal-color"></li>
                        <li className="create-board-modal-color"></li>
                        <li className="create-board-modal-color"></li>
                        <li className="create-board-modal-color"></li>
                        <li className="create-board-modal-color"></li>
                        <li className="create-board-modal-color"></li>
                        <li className="create-board-modal-color"></li>
                        <li className="create-board-modal-color"></li>
                    </ul>
                   
                </div>
                <button className="create-board-modal-submit-button">
                    <span>Create Board</span>
                </button>
            </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
    setActiveModal
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateBoardModal)
