import React from 'react';
import './HeaderSearch.scss';
import { connect } from 'react-redux';
import  { update_generic_search_input } from 'actions/searchInputs'

class HeaderSearch extends React.Component {

    handleChange = (e) => {
        this.props.update_generic_search_input(e.target.value);
    }

    render() {
        return (
            <input 
                className="HeaderSearch" 
                type="text" 
                placeholder="search . . ."
                onChange={this.handleChange}
                ></input>
        )
    }

}

function mapStateToProps({search}) {
    return { value: search.searchGenericInput }
}


export default connect(mapStateToProps, { update_generic_search_input })(HeaderSearch);