import React from 'react';
import styled from 'styled-components'
import data from '../../content/content.json'

const styles = data.styles

const FeaturedServiceWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 946px;
    background: ${styles.colors.white};
    padding: 46px 22px 33px 22px;
    border: 2px solid ${styles.colors.purplePrimary};
    border-radius: 14px;
    box-shadow: 0px 6px 0px ${styles.colors.purplePrimary};
    @media (min-width: ${styles.breakpoints.m}px) {
        flex-direction: row;
        align-items: flex-start;
        margin: 87px auto 80px auto;
        padding: unset;
        background: ${styles.colors.transparent};
        border: 0;
        box-shadow: none;
    }
`
const ImageContainer = styled.div`
    @media (min-width: ${styles.breakpoints.m}px) {
        position: relative;
        width: 387px;
        max-width: 387px;
        padding: 43px 74px 52px 55px;
        margin-bottom: 50px;
        background: ${styles.colors.white};
        border: 3px solid ${styles.colors.purplePrimary};
        border-radius: 14px;
        box-shadow: 12px 12px 0px ${styles.colors.purplePrimary};
    }
`
const ServiceImage = styled.img`
    max-width: 210px;
    margin-bottom: 27px;
    @media (min-width: ${styles.breakpoints.m}px) {
        max-width: 258px;
        margin-bottom: 0;
    }
`
const InfoContainer = styled.div`
    width: unset;
    @media (min-width: ${styles.breakpoints.m}px) {
        position: absolute;
        top: 65px;
        right: 0;
        z-index: 2;
        width: 65%;
        max-width: 600px;
        padding: 49px 47px 44px 47px;
        background: ${styles.colors.white};
        border: 3px solid ${styles.colors.purplePrimary};
        border-radius: 14px;
    }
    @media (min-width: ${styles.breakpoints.l}px) {
        width: unset;
        padding: 49px 47px 44px 86px;
    }
`
const ServiceTitle = styled.h3`
    font-size: 1.44em;
    margin-bottom: 11px;
    color: ${styles.colors.orangeMain};
    text-align: center;
    @media (min-width: ${styles.breakpoints.m}px) {
        margin-bottom: 20px;
        font-size: 2.1em;
        text-align: left;
    }
    ${props => {
        if (props.isHome) {
            return ` 
            color: ${styles.colors.purplePrimary};
            `
        }
    }}
`
const ServiceDescription = styled.p`
    max-width: 463px;
    font-size: .88em;
    line-height: 22px;
    color: ${styles.colors.darkMainBg};
    @media (min-width: ${styles.breakpoints.m}px) {
        display: block;
        margin-bottom: auto;
        font-size: 1em;
        line-height: 1.44em;
    }
    
    ${props => {
        if (props.isHome) {
            return ` 
            display: none;
            margin-left: 0!important;
            `
        }
    }}
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
                    <ServiceDescription>Realizamos capacitaciones técnicas y/o de cooperativismo para organizaciones, cooperativas y empresas donde buscamos transmitir de forma amena y sistematizada los conocimientos adquiridos en el ámbito tecnológico y cooperativo.</ServiceDescription>
            </InfoContainer>
        </FeaturedServiceWrapper>
    );
};

export default FeaturedService;