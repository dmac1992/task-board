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


const DescriptionTextarea = styled.textarea`
    background: white;
    width: 100%;
    border: none;
    padding: 5px;
    :focus {
        background: white;
    }
`

const DescriptionParagraph = styled.p`
    padding: 5px;
`;


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
        this.paragraphRef = React.createRef();
    }

    state = {
        DescriptionFormShowing: false,
        description: '',
    }

    showDescriptionForm = () => { 
        this.setState({DescriptionFormShowing: true}, () => this.textareaRef.current.focus()) 
    };

    hideDescriptionForm = () => { this.setState({DescriptionFormShowing: false}) };

    textareaChangeHandler = (e) => this.setState({description: e.target.value}) 

    renderParagraphContent = () => {
        return this.state.description
            ? this.state.description
            : 'Enter a description for task here'
    }

    render() {
        return (
            <Container>
                <Header>
                    <Title>Description</Title>
                    {!this.state.DescriptionFormShowing ? <EditButton onClick={this.showDescriptionForm}>Edit</EditButton> : null}
                    <SectionIcon className='icon-align-left'></SectionIcon>
                </Header>
                {
                    this.state.DescriptionFormShowing ? (
                        <>
                            <DescriptionTextarea ref={this.textareaRef} onFocus={this.textareaFocused} onChange={this.textareaChangeHandler} onBlur={this.hideDescriptionForm}>
                            </DescriptionTextarea>
                            <FocusedTextAreaSection>
                                <SaveButton>Save</SaveButton>
                                <CloseEditIcon className='icon-times' onClick={this.hideDescriptionForm}/>
                            </FocusedTextAreaSection>
                        </>
                    ) : (
                        <DescriptionParagraph ref={this.paragraphRef} onClick={this.showDescriptionForm}>{this.renderParagraphContent()}</DescriptionParagraph>
                    )
                }
            </Container>
        )
    }
  
}

export default Description
