import React from 'react';
import {styles} from '../../content/content.json'
import styled from 'styled-components'

import Button from '../../components/common/Button'

const HeaderContainer = styled.div`
    background: ${styles.colors.greenLight};
    display: flex; 
    justify-content: center;
    padding: 32px 20px 180px 20px;
    margin-bottom: 0px;
    margin-top: 200px;
    background: ${styles.colors.white};
    @media (min-width: ${styles.breakpoints.m}px) {
        margin-bottom: 0px;
        padding-top: 55px;
        padding-bottom: 250px;
    }
`
const HeaderWrapper = styled.div`
    max-width: 946px;
    width: 100%;
    display: flex;
    flex-direction: column;
    text-align: center;
    @media (min-width: ${styles.breakpoints.m}px) {
        flex-direction: row;
        justify-content: center;
        text-align: left;
        max-width: 1140px;
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
        max-width: 559px;
        align-items: flex-start;
        margin: 0;
        margin-right: auto;
    }
`
const ImageContainer = styled.div`
    display: none;
    @media (min-width: ${styles.breakpoints.m}px) {
        display: block;
        flex-basis: 50%;
        max-width: 532px;
        text-align: right;
        margin-right: 15px;
    }
    
`
const SectionHeaderSubtitle = styled.p`
    font-size: 1.72em;
    line-height: 37px;
    font-weight: ${styles.fontWeight.bold};
    color: ${styles.colors.greenMain};
    margin-bottom: 10px;
    @media (min-width: ${styles.breakpoints.m}px) {
        font-size: 2.38em;
        line-height: 49px;
    }
`
const SectionHeaderTitle = styled.h1`
    font-size: 2.38em;
    line-height: 49px;
    font-weight: ${styles.fontWeight.bold};
    text-align: center;
    color: ${styles.colors.darkMainBg};
    margin-bottom: 35px;
    @media (min-width: ${styles.breakpoints.m}px) {
        font-size: 3.33em;
        line-height: 64px;
        text-align: left;
        margin-bottom: 33px;
    }
`
const SectionHeaderDescription = styled.p`
    font-size: 1em;
    line-height: 26px;
    font-weight: ${styles.fontWeight.regular};
    color: ${styles.colors.darkMainBg};
    margin-bottom: 40px;
    @media (min-width: ${styles.breakpoints.m}px) {
        margin-bottom: 30px;
        font-size: 1.44em;
        line-height: 34px;
    }
`
const DescriptionBold = styled.span`
    font-weight: ${styles.fontWeight.bold};
`

const SectionHeaderImg = styled.img`
    margin-top: 98px;
    @media (min-width: ${styles.breakpoints.m}px) {
        max-width: 400px;
        width: 100%;
    }
    @media (min-width: ${styles.breakpoints.l}px) {
        max-width: 532px;
    }
`
const SectionHeaderImgMobile = styled.img`
    width: 100%;
    max-width: 270px;
    margin-bottom: 40px;
    @media (min-width: ${styles.breakpoints.m}px) {
        display: none;
    }
    
`
const Btn = styled(Button)`
  margin: 0px auto 15px auto;
  @media (min-width: ${styles.breakpoints.m}px) {
    margin: 0px auto 0 0;
  }
`

const HomepageLabs = (props) => {
    return (
        <HeaderContainer>
            <HeaderWrapper>
                <InfoContainer>
                    <SectionHeaderTitle>Labs</SectionHeaderTitle>
                    <SectionHeaderImgMobile src={require(`../../images/illustrations/homepageLabs.svg`).default} />
                    <SectionHeaderSubtitle>¡Nos capacitamos permanentemente!</SectionHeaderSubtitle>
                    <SectionHeaderDescription>Uno de los objetivos de Fiqus es capacitarnos constantemente para especializarnos en tecnologías de vanguardia, por eso todas las semanas tenemos <DescriptionBold>FiqusLabs</DescriptionBold>, un espacio de aprendizaje práctico donde investigamos tecnologías de vanguardia como <DescriptionBold>Elixir</DescriptionBold>, <DescriptionBold>Erlang</DescriptionBold> y <DescriptionBold>MachineLearning</DescriptionBold>.</SectionHeaderDescription>
                    <Btn type='btnPrimaryWhite' theme={styles} to="#" btnText='ver más'></Btn>
                </InfoContainer>
                <ImageContainer section={props.section}>
                    <SectionHeaderImg section={props.section} src={require(`../../images/illustrations/homepageLabs.svg`).default} />
                </ImageContainer>
            </HeaderWrapper>
        </HeaderContainer>
    );
};

export default HomepageLabs;