import React, { PureComponent } from 'react'
import styled from 'styled-components';

const Container = styled.div`
    position: relative;
`;

const SectionIcon = styled.span`
    position: absolute;
    top: 6px;
    left: -30px;
`

const Header = styled.div`
    margin-bottom: 5px;
`;

const Title = styled.h3`
    display: inline-block;
    margin-right: 5px;
`;


const DescriptionTextArea = styled.textarea`
    background: transparent;
    width: 100%;
    border: none;
    padding: 5px;
    :focus {
        background: white;
    }
`


const EditButton = styled.button`
    background-color: rgba(9,30,66,.08);
    color:  #172b4d;
    border: none;
    padding: 10px;
    border-radius: 4px;
`;

const FocusedTextAreaSection = styled.div`
`;

const SaveButton = styled.button`
    background-color: green;
    margin-right: 5px;
    padding: 7px 10px;
    color: white;
    border-radius: 3px;
`;

const CloseEditIcon = styled.span`
    cursor: pointer;
`;



class Description extends PureComponent {

    constructor(props) {
        super(props);
        this.textareaRef = React.createRef();
    }

    state = {
        textareaFocused: false,
        description: '',
    }

    componentDidMount() {
        document.addEventListener('click', this.clickingOutsideUnfocus);
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.clickingOutsideUnfocus);
    }

    clickingOutsideUnfocus = (e) => {
        if(e.target !== this.textareaRef.current)
            this.setState({textareaFocused: false});
    }

    textareaFocused = () => { this.setState({textareaFocused: true}) };
    unfocusTextarea = () => { this.setState({textareaFocused: false}) };

    TextareaFocusedOnlyContent = () => {
        if ( this.state.textareaFocused ) {
            return (
                <FocusedTextAreaSection>
                    <SaveButton>Save</SaveButton>
                    <CloseEditIcon className='icon-times' />
                </FocusedTextAreaSection>
            );
        } else {
            return null;
        }
    }

    render() {
        return (
            <Container>
                <Header>
                    <Title>Description</Title>
                    <EditButton>Edit</EditButton>
                    <SectionIcon className='icon-align-left'></SectionIcon>
                </Header>
                <DescriptionTextArea ref={this.textareaRef} rows='10' onFocus={this.textareaFocused}>
                </DescriptionTextArea>
                {this.TextareaFocusedOnlyContent()}
            </Container>
        )
    }
  
}

export default Description
