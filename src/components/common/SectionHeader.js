import React from 'react';
import {styles} from '../../content/content.json'
import styled from 'styled-components'

const iluLabs = require('../../images/illustrations/labs.svg');
const iluCultura = require('../../images/illustrations/cultura.svg');


const setSharedStyles = (type) => {
    return `
        font-size: ${type.fontSize};
        font-weight: ${type.fontWeight};
        color: ${type.color };
        background-color: ${type.background};
        border-color: ${type.borderColor};
        box-shadow:  0px 4px 0px ${type.boxShadow};
    `
} 



const HeaderContainer = styled.div`
    background: ${styles.colors.greenLight};
    padding-bottom: 80px;
    display: flex; 
    justify-content: center;
    padding-top: 100px;
    margin-bottom: 30px;
    background: ${props => props.type.background};


    @media (min-width: ${styles.breakpoints.m}px) {
        margin-bottom: 52px;
    }


    // Culture styles
    padding-bottom: 50px;

`
const HeaderWrapper = styled.div`
    max-width: 946px;
    display: flex;
    flex-direction: column;
    @media (min-width: ${styles.breakpoints.m}px) {
        flex-direction: row;
        justify-content: center;        
    }

`
const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 320px;
    margin: auto;
    @media (min-width: ${styles.breakpoints.m}px) {
        flex-basis: 50%;
        max-width: 463px;
        align-items: flex-start;
        margin: 0;
        margin-right: 20px;
    }
`
const ImageContainer = styled.div`
    display: none;
    @media (min-width: ${styles.breakpoints.m}px) {
        display: block;
        flex-basis: 50%;
        max-width: 463px;
        ${props => {
            if (props.section === 'cultura') {
                return  `max-width: 429px;`
            }
        }}
    }
    
`
const SectionHeaderSubtitle = styled.p`
    font-size: 1.44em;
    font-weight: ${styles.fontWeight.medium};
    line-height: 34px;
    color: ${props => props.type.color};
    margin-bottom: 30px;

    ${props => {
        if (props.section === 'cultura') {
            return  `font-weight: ${styles.fontWeight.regular};`
        }
    }}
`
const SectionHeaderTitle = styled.h1`
    font-size: 2.38em;
    font-weight: ${styles.fontWeight.bold};
    text-align: center;
    color: ${props => props.type.color};
    margin-bottom: 30px;
    @media (min-width: ${styles.breakpoints.m}px) {
        font-size: 3em;
        text-align: left;
        margin-bottom: 25px;
    }
`
const SectionHeaderDescription = styled.p`
    font-size: 1em;
    line-height: 26px;
    font-weight: ${styles.fontWeight.regular};
    color: ${props => props.type.color};
    
`

const SectionHeaderImg = styled.img`
    max-width: 463px;
    margin-top: 83px;
    
    ${props => {
        if (props.section === 'cultura') {
            return  `margin-top: 0;
            max-width: 429px;`
        }
    }}
`
const SectionHeaderImgMobile = styled.img`
    width: 100%;
    max-width: 320px;
    margin-bottom: 30px;
    @media (min-width: ${styles.breakpoints.m}px) {
        display: none;
    }
    
`


const SectionHeader = (props) => {
    const getHeadStyles = (type) =>{
        switch (type) {
            case "cultura" : 
                return {
                    background : styles.colors.purpleLight,
                    color : styles.colors.purplePrimary,
                    image: iluCultura,
                 }
            break
            case "labs" : 
                return {
                    background : styles.colors.greenLight,
                    color : styles.colors.darkMainBg,
                    image : iluLabs
                 }
            break
            default : 
                return {
                    background : styles.colors.greenLight,
                    color : styles.colors.darkMainBg,
                    image : iluLabs
                }
        }   
    }

    return (
        <HeaderContainer type={getHeadStyles(props.section)}>
            <HeaderWrapper>
                <InfoContainer>
                    <SectionHeaderTitle type={getHeadStyles(props.section)}>{props.title}</SectionHeaderTitle>
                    <SectionHeaderImgMobile src={getHeadStyles(props.section).image.default}></SectionHeaderImgMobile>
                    <SectionHeaderSubtitle section={props.section} type={getHeadStyles(props.section)}>{props.subtitle}</SectionHeaderSubtitle>
                    <SectionHeaderDescription type={getHeadStyles(props.section)}> {props.description} </SectionHeaderDescription>
                </InfoContainer>
                <ImageContainer section={props.section}>
                    <SectionHeaderImg section={props.section} src={getHeadStyles(props.section).image.default}></SectionHeaderImg>
                </ImageContainer>
            </HeaderWrapper>
        </HeaderContainer>
    );
};

export default SectionHeader;