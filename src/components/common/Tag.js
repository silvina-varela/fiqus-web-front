import React from 'react';
import styled from 'styled-components'

const TagContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
`
const TagItem = styled.div`
    margin: 0 6px 8px 0px;
    padding: 9px 14px;
    border-radius: 10px;
    font-size: 14px;
    font-weight: ${props => props.type === "green" ? props.theme.fontWeight.regular : props.theme.fontWeight.medium };
    background-color: ${props => props.type === "green" ? props.theme.colors.greenLight :  props.theme.colors.purpleLight };
    color: ${props => props.type === "green" ? props.theme.colors.ultraDarkGrey : props.theme.colors.purplePrimary };
`

const Tag = (props) => {
    return (
        <TagContainer>
            <TagItem  type={(props.type)} theme={props.theme}>Esto es un tag</TagItem>
        </TagContainer>
    );
};

export default Tag;