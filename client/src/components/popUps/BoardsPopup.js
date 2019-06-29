import React from 'react';
import styled from 'styled-components';
import { connect} from 'react-redux';

//actions
import { setActiveModal } from 'actions/modal';
import { setActiveLeftPopUp } from 'actions/header';

//modals to spawn
import CreateBoardModal from 'components/modals/CreateBoardModal';

const Container = styled.div`
    box-shadow: 5px 10px;
    top: 35px;
    box-shadow: 0px 3px 19px 0px rgba(0,0,0,0.75);
    background-color: #fff;
    z-index: 100;
    padding: 10px;
    display: flex;
    flex-direction: column;
    width: 300px;
`

const SearchInput = styled.input`
    border: 1px solid gainsboro;
    padding: 5px;
    border-radius: 3px;
    margin-bottom: 15px;
`;

const PopupSection = styled.div`
    padding: 5px;
    margin-bottom: 10px;
`
//TODO what is this 'Symbol' styled component
// const Symbol = styled.span`
//     margin-right: 4px;
// `;

const TitleSection = styled.div`
    display: flex;
    align-items: center;
`;


const ToggleIcon = styled.div`
    margin-left: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    cursor: pointer;
    padding: 6px;
    border-radius: 3px;
    &:hover {
        background-color: #DCDCDC;
    }
`;

const Link = styled.li`
    padding: 10px;
    cursor: pointer;
    &:hover {
        background-color: #DCDCDC;
    }
`;

class BoardsPopup extends React.Component {

    state = {
        starredBoardsOpen: false,
        recentBoardsOpen: false, 
        personalBoardsOpen: false,
        searchValue: ""
    }

    handleSearchChange = (e) => {
        this.setState({searchValue: e.target.value})
    }

    createBoardHandler = () => { 
        this.props.setActiveModal(CreateBoardModal);  
        this.props.setActiveLeftPopUp(null);
     }

    render() {
        const { starredBoardsOpen, recentBoardsOpen, personalBoardsOpen } = this.state;
        return (
            <Container>
                <SearchInput onChange={this.handleSearchChange} value={this.state.searchValue}/>
                <div className="boards-popup-foldout-section">
                    <PopupSection>
                        <TitleSection>
                            <span className="icon-star boards-popup-section-symbol"></span>
                            <span className="boards-popup-foldout-title">STARRED BOARDS</span>
                            <ToggleIcon>
                                <span className={starredBoardsOpen ? "icon-minus" : "icon-plus"} onClick={() => this.setState({starredBoardsOpen: !starredBoardsOpen})}></span>
                            </ToggleIcon>
                        </TitleSection>
                        { starredBoardsOpen ? (
                            <div className="boards-popup-foldout-content-container">
                                <h1>Starred board Content</h1>
                            </div>
                        ) : null}
                    </PopupSection>
                    
                    <PopupSection>
                        <TitleSection>
                            <span className="icon-clock-o boards-popup-section-symbol"></span>
                            <span className="boards-popup-foldout-title">RECENT BOARDS</span>
                            <ToggleIcon>
                                <span className={recentBoardsOpen ? "icon-minus" : "icon-plus"} onClick={() => this.setState({recentBoardsOpen: !recentBoardsOpen})}></span>
                            </ToggleIcon>
                        </TitleSection>
                        { recentBoardsOpen ? (
                            <div className="boards-popup-foldout-content-container">
                                <h1>Recent boards Content</h1>
                            </div>
                        ) : null}
                    </PopupSection>

                    <PopupSection>
                        <TitleSection>
                            <span className="icon-page-multiple boards-popup-section-symbol"></span>
                            <span className="boards-popup-foldout-title">PERSONAL BOARDS</span>
                            <ToggleIcon>
                                <span className={personalBoardsOpen ? "icon-minus" : "icon-plus"} onClick={() => this.setState({personalBoardsOpen: !personalBoardsOpen})}></span>
                            </ToggleIcon>
                        </TitleSection>
                        { personalBoardsOpen ? (
                            <div className="boards-popup-foldout-content-container">
                                <h1>Personal boards Content</h1>
                            </div>
                        ) : null}
                        
                    </PopupSection>

                    <ul className="boards-popup-links-ul">
                        <Link onClick={this.createBoardHandler}>Create new board...</Link>
                        <Link>Always keep this menu open</Link>
                        <Link>See closed boards...</Link>
                    </ul>
                </div>
            </Container>
        )
    }
}

//needs to request the users starred / recent / personal boards. 
const mapStateToProps = () => {
    
}


export default connect(mapStateToProps, {setActiveModal, setActiveLeftPopUp})(BoardsPopup);

//all going to have piece of state that says whether they are showing their respective popup