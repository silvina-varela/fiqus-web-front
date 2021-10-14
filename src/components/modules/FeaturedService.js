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
    max-width: 320px;
    margin: auto;
    padding: 46px 22px 33px 22px;
    background: ${styles.colors.white};
    border: 2px solid ${styles.colors.purplePrimary};
    border-radius: 14px;
    box-shadow: 0px 6px 0px ${styles.colors.purplePrimary};
    @media (min-width: ${styles.breakpoints.m}px) {
        max-width: 946px;
        flex-direction: row;
        align-items: flex-start;
        margin: 87px auto 80px auto;
        padding: 30px 20px;
        background: ${styles.colors.transparent};
        border: 0;
        box-shadow: none;
    }
    ${props => {
        if (props.isHome) {
            return ` 
            max-width: 320px;
            margin: auto;
            box-shadow: none;
            border: none;
            background: ${styles.colors.white};
            margin-top: 40px;
            @media (min-width: ${styles.breakpoints.m}px) {
                max-width: 320px;
                box-shadow: none;
                margin-top: 40px;
                border: none;
                background: ${styles.colors.white};
                flex-direction: column;
                align-items: center;
                width: 50%;
            }
            @media (min-width: ${styles.breakpoints.l}px) {
                width: 33%;
            }
            `
        }
    }}
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
    ${props => {
        if (props.isHome) {
            return ` 
            @media (min-width: ${styles.breakpoints.m}px) {
                position: static;
                width: unset;
                max-width: unset;
                padding: unset;
                margin-bottom: unset;
                background: unset;
                border: none;
                border-radius: unset;
                box-shadow: none;
            }
            `
        }
    }}
`
const ServiceImage = styled.img`
    max-width: 210px;
    margin-bottom: 27px;
    @media (min-width: ${styles.breakpoints.m}px) {
        max-width: 258px;
        margin-bottom: 0;
    }
    ${props => {
        if (props.isHome) {
            return ` 
            max-height: 112px;
            max-width: 100%;
            @media (min-width: ${styles.breakpoints.m}px) {
                max-height: 112px;
                max-width: 100%;
            }
            `
        }
    }}
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
    ${props => {
        if (props.isHome) {
            return ` 
            @media (min-width: ${styles.breakpoints.m}px) {
                position: static;
                top: unset;
                right: unset;
                z-index: unset;
                width: unset;
                max-width: unset;
                padding: unset;
                background: unset;
                border: none;
                border-radius: unset;
            }
            `
        }
    }}
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
            margin-bottom: 0;
            @media (min-width: ${styles.breakpoints.m}px) {
                color: ${styles.colors.purplePrimary};
                font-size: 1.44em;
                text-align: center;
                margin: 30px 0 0 0;
            }
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
            @media (min-width: ${styles.breakpoints.m}px) {
                display: none;
                margin-left: 0!important;
            }
            `
        }
    }}
`

const FeaturedService = (props) => {
    const service = props.service
    return (
        <FeaturedServiceWrapper isHome={props.isHome}> 
            <ImageContainer isHome={props.isHome}>
                <ServiceImage isHome={props.isHome}
                    src={require(`../../images/illustrations/capacitacion.svg`).default}> 
                </ServiceImage>
            </ImageContainer>
            <InfoContainer isHome={props.isHome}>
                    <ServiceTitle isHome={props.isHome}>Capacitación</ServiceTitle>
                    <ServiceDescription isHome={props.isHome}>Realizamos capacitaciones técnicas y/o de cooperativismo para organizaciones, cooperativas y empresas donde buscamos transmitir de forma amena y sistematizada los conocimientos adquiridos en el ámbito tecnológico y cooperativo.</ServiceDescription>
            </InfoContainer>
        </FeaturedServiceWrapper>
    );
};

export default FeaturedService;