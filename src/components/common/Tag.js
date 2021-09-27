import React from 'react';
import styled from 'styled-components'

const TagContainer = styled.div`
    display: flex;
`
const TagItem = styled.div`
    padding: 9px 14px;
    border-radius: 10px;
    font-size: 14px;
    font-weight: ${props => props.theme.fontWeight.medium};
    color: ${props => props.type === "green" ? props.theme.colors.ultraDarkGrey : props.theme.colors.purplePrimary };
    background-color: ${props => props.type === "green" ? props.theme.colors.greenLight :  props.theme.colors.purpleLight };
    
    @media only screen and (max-width:${props => props.theme.breakpoints.m}px){
        background: red;
    }
`

const Tag = (props) => {
    return (
        <TagContainer>
            <TagItem  type={ButtonStyles(props.type)} theme={props.theme}>Esto es un tag</TagItem>
        </TagContainer>
    );
};

export default Tag;