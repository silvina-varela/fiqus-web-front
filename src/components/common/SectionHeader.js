import React from 'react';
import {styles} from '../../content/content.json'
import styled from 'styled-components'

const iluLabs = require('../../images/illustrations/labs.svg');
const iluCultura = require('../../images/illustrations/cultura.svg');
const iluHomepage = require('../../images/illustrations/homepage.svg');




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
    @media (min-width: ${styles.breakpoints.m}px) {
        margin-bottom: 52px;
    }

    // Culture styles
    background: ${styles.colors.purpleLight};
    padding-bottom: 50px;
    
    // Home styles
    background: ${styles.colors.purplePrimary};
    padding-bottom: 50px;
`
const HeaderWrapper = styled.div`
    max-width: 946px;
    display: flex;
    flex-direction: column;
    @media (min-width: ${styles.breakpoints.m}px) {
        flex-direction: row;
        justify-content: center;
        
        // Home styles
        align-items: center;
        justify-content: space-between;
        
    }
    
    // Home styles
    width: 100%;
    max-width: 1083px;
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

        // Homepage styles
        max-width: 560px;
        margin-right: auto;
    }
`
const ImageContainer = styled.div`
    display: none;
    @media (min-width: ${styles.breakpoints.m}px) {
        display: block;
        flex-basis: 50%;
        max-width: 463px;
        
        // Homepage styles
        max-width: 411px;
        margin-left: auto;
    }
`
const SectionHeaderSubtitle = styled.p`
    font-size: 1.44em;
    font-weight: ${styles.fontWeight.medium};
    line-height: 34px;
    color: ${styles.colors.darkMainBg};
    margin-bottom: 30px;

    // Culture styles
    color: ${styles.colors.purplePrimary};
    font-weight: ${styles.fontWeight.regular};

    // Homepage styles
    display: none;
`
const SectionHeaderTitle = styled.h1`
    font-size: 2.38em;
    font-weight: ${styles.fontWeight.bold};
    text-align: center;
    color: ${styles.colors.darkMainBg};
    margin-bottom: 30px;
    @media (min-width: ${styles.breakpoints.m}px) {
        font-size: 3em;
        text-align: left;
        margin-bottom: 25px;
    }

    // Culture styles
    color: ${styles.colors.purplePrimary};
    
    // Home styles
    display: none;
`
const SectionHeaderDescription = styled.p`
    font-size: 1em;
    line-height: 26px;
    font-weight: ${styles.fontWeight.regular};
    color: ${styles.colors.darkMainBg};
    
    // Culture styles
    color: ${styles.colors.purplePrimary};
    
    // Home styles
    color: ${styles.colors.white};
    font-size: 1.44em;
    line-height: 34px;
    text-align: center;
    @media (min-width: ${styles.breakpoints.m}px) {
        font-size: 2.38em;
        line-height: 49px;
        text-align: left;
    }
`
const SectionHeaderUnderlineSpan = styled.span`
    font-size: 1.44rem;
    position: relative;
    &::before {
        content: url("${require('../../images/orange_underline.svg').default}");
        position: absolute; 
        left: 35px;
        bottom: -8px;
    }
    @media (min-width: ${styles.breakpoints.m}px) {
        // Home styles
        font-size: 2.38rem;
    }
`
const SectionHeaderSpan = styled.span`
    font-weight: ${styles.fontWeight.bold};
    @media (min-width: ${styles.breakpoints.m}px) {
        // Home styles
        font-size: 2.38rem;
    }
`
const SectionHeaderImg = styled.img`
    max-width: 463px;
    margin-top: 83px;
    
    // Culture styles
    margin-top: 0;
        
    // Home styles
    width: 100%;
    max-width: 411px;
`
const SectionHeaderImgMobile = styled.img`
    width: 100%;
    max-width: 320px;
    margin-bottom: 30px;
    @media (min-width: ${styles.breakpoints.m}px) {
        display: none;
    }
    
    // Home styles
    max-width: 249px;
    margin-bottom: 25px;

`


const SectionHeader = (props) => {
    const getHeadStyles = (type) =>{
        switch (type) {
            case "cultura" : 
                return {
                    background : styles.colors.orangeMain,
                    color : styles.colors.white,
                    image: iluHomepage
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
                    background : styles.colors.white,
                    color : styles.colors.darkMainBg,
                    image : iluLabs
                }
        }   
    }

    return (
        <HeaderContainer>
            <HeaderWrapper>
                <InfoContainer>
                    <SectionHeaderTitle>{props.title}</SectionHeaderTitle>
                    <SectionHeaderImgMobile src={getHeadStyles(props.section).image.default}></SectionHeaderImgMobile>
                    <SectionHeaderSubtitle>{props.subtitle}</SectionHeaderSubtitle>
                    <SectionHeaderDescription>
                        Somos <SectionHeaderUnderlineSpan>una cooperativa</SectionHeaderUnderlineSpan> de software. Somos <SectionHeaderSpan>construcción colectiva,</SectionHeaderSpan> cultura y mentes en constante movimiento.
                    </SectionHeaderDescription>

                </InfoContainer>
                <ImageContainer>
                    <SectionHeaderImg src={getHeadStyles(props.section).image.default}></SectionHeaderImg>
                </ImageContainer>
            </HeaderWrapper>
        </HeaderContainer>
    );
};

export default SectionHeader;