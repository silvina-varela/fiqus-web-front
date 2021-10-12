import React from 'react';
import styled from 'styled-components'
import data from '../../content/content.json'

const styles = data.styles

const FeaturedServiceWrapper = styled.div`
    position: relative;
    display: flex;
    width: 100%;
    background: ${styles.colors.white};
    flex-direction: column;
    align-items: center;
    padding: 44px 56px 23px 56px;
    border-radius: 14px;
    max-width: 946px;
    @media (min-width: ${styles.breakpoints.m}px) {
        background: ${styles.colors.transparent};
        flex-direction: row;
        align-items: flex-start;
        margin: 87px auto 80px auto;
        padding: unset;
    }
`
const ImageContainer = styled.div`
    @media (min-width: ${styles.breakpoints.m}px) {
        background: ${styles.colors.white};
        border: 3px solid ${styles.colors.purplePrimary};
        border-radius: 14px;
        padding: 43px 74px 52px 55px;
        max-width: 387px;
        box-shadow: 12px 12px 0px ${styles.colors.purplePrimary};
        margin-bottom: 50px;
        width: 387px;
        position: relative;
    }
`
const ServiceImage = styled.img`
    max-width: 210px;
    margin-bottom: 28px;
    @media (min-width: ${styles.breakpoints.m}px) {
        max-width: 258px;
        margin-bottom: 0;
    }
`
const InfoContainer = styled.div`
    @media (min-width: ${styles.breakpoints.m}px) {
        background: ${styles.colors.white};
        border: 3px solid ${styles.colors.purplePrimary};
        //box-shadow: -15px 14px 0px ${styles.colors.purpleLight};
        border-radius: 14px;
        padding: 49px 47px 44px 86px;
        position: absolute;
        top: 65px;
        right: 0;
        z-index: 2;
        max-width: 600px;
    }
`
const ServiceTitle = styled.h3`
    color: ${styles.colors.purplePrimary};
    font-size: 1.44em;
    @media (min-width: ${styles.breakpoints.m}px) {
        color: ${styles.colors.orangeMain};
        font-size: 2.1em;
        margin-bottom: 20px;
    }
`
const ServiceDescription = styled.p`
    display: none;
    font-size: 1em;
    line-height: 22px;
    color: ${styles.colors.darkMainBg};
    margin-bottom: 25px;
    max-width: 463px;
    @media (min-width: ${styles.breakpoints.m}px) {
        font-size: 1em;
        line-height: 1.44em;
        margin-bottom: auto;
        display: block;
    }
`

const FeaturedService = (props) => {
    const service = props.service
    return (
        <FeaturedServiceWrapper> 
            <ImageContainer>
                <ServiceImage 
                    src={require(`../../images/illustrations/capacitacion.svg`).default}> 
                </ServiceImage>
            </ImageContainer>
            <InfoContainer>
                    <ServiceTitle>Capacitación</ServiceTitle>
                    <ServiceDescription isHome>Realizamos capacitaciones técnicas y/o de cooperativismo para organizaciones, cooperativas y empresas donde buscamos transmitir de forma amena y sistematizada los conocimientos adquiridos en el ámbito tecnológico y cooperativo.</ServiceDescription>
            </InfoContainer>
        </FeaturedServiceWrapper>
    );
};

export default FeaturedService;