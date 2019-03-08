import React from 'react';
import { connect } from 'react-redux';

import './header-search.scss';
import  { update_generic_search_input } from 'actions/searchInputs'

class HeaderSearch extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
    }

    handleChange = (e) => {
        this.props.update_generic_search_input(e.target.value);
    }

    renderIcons() {
        if (this.state.open) {
            return (
                <React.Fragment>
                    <span className="header-search-send-icon icon-page-export" ></span>
                    <span className="header-search-close-icon icon-times"></span>
                </React.Fragment>
            );
        } else {
            return (
                <span className="header-search-search-icon icon-search"></span>
                
            )
        }
    }

    focusHandler = () => {
        this.setState({open: true});
    }   

    blurHandler = () => {
        this.setState({open: false});
        this.props.update_generic_search_input("");
    }

    render() {
        return (
            <div className="header-search-container">
                <input 
                    className="header-search-input" 
                    type="text" 
                    value={this.props.value}
                    onChange={this.handleChange}
                    onFocus={this.focusHandler}
                    onBlur={this.blurHandler}
                    ></input>
                {this.renderIcons()}
            </div>
           
        )
    }
}

function mapStateToProps({search}) {
    return { value: search.searchGenericInput }
}


export default connect(mapStateToProps, { update_generic_search_input })(HeaderSearch);