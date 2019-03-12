import React, { Component } from 'react'
import { connect } from 'react-redux'
import ReactDOM from 'react-dom';

//app level portals . . .
import CreateBoardModal from './CreateBoardModal';


class Portal extends Component {


  constructor() {
      super();
  }


  renderActivePortal = () => {
      if(this.props.activeModal ==  CreateBoardModal) {
        console.log("components are equal");
      } else {
        console.log("components are not equal");
      }
      switch(this.props.activeModal) {
        case CreateBoardModal:
          return <CreateBoardModal />;
        default:
          return null;
      }
  }

  render() {
    const modal = this.renderActivePortal();
    return (
       ReactDOM.createPortal(modal, document.querySelector("#portal"))
    )
  }
}

const mapStateToProps = ({activeModal}) => {
  return {
     activeModal
  };
}

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Portal)
