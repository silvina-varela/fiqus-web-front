import React from 'react';
import styled from 'styled-components'
import data from '../../content/content.json'
import { useIntl, Link } from "gatsby-plugin-react-intl"
import Button from '../common/Button'


const styles = data.styles

const CaseWrapper = styled.div`
    margin-bottom: 50px;
    max-width: 320px;
    flex-basis: 100%;
    @media (min-width: ${styles.breakpoints.m}px) {
        max-width: 351px;
    }
    @media (min-width: ${styles.breakpoints.l}px) {
        flex-basis: 33%;
        max-width: 300px;
        margin-bottom: 55px;
    }
` 

const LabImage = styled.img`
    border-radius: 6px;
    margin-bottom: 10px;
    height: 230px;
    max-width: 320px;
    @media (min-width: ${styles.breakpoints.l}px) {
        height: 215px;
    }
`
const LabTitle = styled.h3`
    font-size: 1.16em;
    line-height: 27px;
    color: ${styles.colors.darkMainBg};
    margin-bottom: 10px;    
    @media (min-width: ${styles.breakpoints.l}px) {
        font-weight: ${styles.fontWeight.bold};
        margin-bottom: 8px;
    }
`
const LabDescription =styled.p`
    font-size: .88em;
    line-height: 20px;
    margin-bottom: 20px;
    color: ${styles.colors.darkGrey};
    @media (min-width: ${styles.breakpoints.l}px) {
        margin-bottom: 12px;
    }
`
const BtnContainer =  styled.div`
    display: flex;
    flex-wrap: wrap;
`
const BtnSite =  styled(Button)`
    font-size: .88em;
    margin: 0;
    padding: 6px 12px;
    box-shadow: none;
    &:hover {
        box-shadow: 0px 3px 0px ${styles.colors.lightGrey};
    }
    @media (min-width: ${styles.breakpoints.l}px) {
        font-size: .77em;
        padding: 7px 15px;
    }
`

const PostThumbnail = (props) => {
    const intl = useIntl();

    return (
        <CaseWrapper>
            <LabImage src={require(`../../images/`+ props.postImg).default}></LabImage>
            <LabTitle>{props.postTitle}</LabTitle>
            <LabDescription>{props.postDescription}</LabDescription>
            <BtnContainer>
                <BtnSite type='btnSecondary' theme={styles} isLink href="#" btnText='leer'></BtnSite>
            </BtnContainer>
        </CaseWrapper>
    );
};

export default PostThumbnail;