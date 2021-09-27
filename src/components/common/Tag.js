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
    font-weight: ${props => props.type.fontWeight };
    background-color: ${props => props.type.background };
    color: ${props => props.type.color };
`

const Tag = (props) => {

    const getTagStyles = (type) =>{
        switch (type) {
            case "blog" : 
                return {
                    background : props.theme.colors.greenLight, 
                    fontWeight : props.theme.fontWeight.regular, 
                    color : props.theme.colors.ultraDarkGrey
                 }
            break
            case "services" : 
                return {
                    background : props.theme.colors.purpleLight, 
                    fontWeight : props.theme.fontWeight.medium, 
                    color : props.theme.colors.purplePrimary
                }
            break
            default : 
                return {
                    background : props.theme.colors.greenLight, 
                    fontWeight : props.theme.fontWeight.regular, 
                    color : props.theme.colors.ultraDarkGrey
                }
        }
    }

    return (
        <TagContainer>
            <TagItem  type={getTagStyles(props.type)} theme={props.theme}>{props.tagContent || "Tag"}</TagItem>
        </TagContainer>
    );
};

export default Tag;