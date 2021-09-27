import React from 'react';
import styled from 'styled-components'
import data from '../../content/content.json'

const styles = data.styles

const TagContainer = styled.div`
    display: flex;
`
const TagItem = styled.div`
    padding: 9px 14px;
    border-radius: 10px;
    font-size: 14px;
    font-weight: ${styles.fontWeight.medium};
    color: ${styles.colors.purplePrimary};
    background-color: ${styles.colors.purpleLight};background-color: ${styles.colors.purpleLight};
    color: ${styles.colors.ultraDarkGrey};
    background-color: ${styles.colors.greenLight};
    
    @media only screen and (max-width:${styles.breakpoints.m}px){
        background: red;
    }
`

const Tag = () => {
    return (
        <TagContainer>
            <TagItem>Esto es un tag</TagItem>
        </TagContainer>
    );
};

export default Tag;