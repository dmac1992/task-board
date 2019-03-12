import React from 'react';
import { connect } from 'react-redux';
import  { update_board_search_input } from 'actions/searchInputs'

class FindBoardsInput extends React.Component {

    handleChange = (e) => {
        this.props.update_board_search_input(e.target.value);
    }

    render() {
        return (
            <input className="boards-popup-search" 
            value={this.props.value ? this.props.value : ""} 
            placeholder="find board..."
            onChange={this.handleChange}></input>
        )
    }

}

function mapStateToProps({search}) {
    return { value: search.searchBoardsInput }
}

export default connect(mapStateToProps, { update_board_search_input })(FindBoardsInput);