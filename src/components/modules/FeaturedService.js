import React from 'react';
import styled from 'styled-components'
import { useIntl, Link } from "gatsby-plugin-react-intl"
import data from '../../content/content.json'

const styles = data.styles
const FeaturedServiceImageconst = require('../../images/illustrations/capacitacion.svg')

const FeaturedServiceContainer = styled.div`
    background: ${styles.colors.white};
    position: relative;
    min-height: 253px;
    margin-bottom: 0px;
    @media (min-width: ${styles.breakpoints.m}px) {
        min-height: 215px;
        padding: 0 20px;
    }
    
    ${props => {
        if (props.isHome) {
            return ` 
            flex-basis: 100%;
            max-width: 320px;
            border-radius: 14px;
            padding: 0px;
            min-height: unset;
            background: ${styles.colors.white};
            margin-bottom: 30px;
            @media (min-width: ${styles.breakpoints.s}px) {
                margin-left: auto;
                margin-right: auto;
            }
            @media (min-width: ${styles.breakpoints.m}px) {
                position: static;
                flex-basis: 50%;
                max-width: 330px;
                min-height: unset;
                margin: 0;
                padding: 0;
                border: none;
                box-shadow: none;
                &:hover {
                    outline: solid 3px ${styles.colors.purplePrimary};
                }
            }
            @media (min-width: ${styles.breakpoints.l}px) {
                flex-basis: 33.33%;
            }
            `
        }
    }}
`
const FeaturedServiceLink = styled(Link)`
    width: 100%;
    height: 100%;
    padding: 30px 20px;
    text-decoration: none;
    @media (min-width: ${styles.breakpoints.m}px) {
        padding: 30px 20px;
    }

`
const FeaturedServiceWrapper = styled.div`
    position: relative;
    position: absolute;
    left: 0;
    right: 0;
    margin: auto; 
    margin-top: -200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 320px;
    padding: 46px 22px 33px 22px;
    background: ${styles.colors.white};
    border: 2px solid ${styles.colors.purplePrimary};
    border-radius: 14px;
    box-shadow: 0px 6px 0px ${styles.colors.purplePrimary};
    @media (min-width: ${styles.breakpoints.m}px) {
        max-width: 946px;
        width: calc(100% - 40px);
        flex-direction: row;
        align-items: flex-start;;
        margin: 87px auto 80px auto;
        margin-top: -155px;
        padding: 0;
        background: ${styles.colors.transparent};
        border: 0;
        box-shadow: none;
    }
    ${props => {
        if (props.isHome) {
            return ` 
            position: static;
            max-width: 320px;
            margin: auto;
            box-shadow: none;
            border: none;
            background: ${styles.colors.unset};
            margin-top: 0px;
            padding: 0px;
            
            @media (min-width: ${styles.breakpoints.m}px) {
                max-width: unset;
                width: 100%;
                height: 100%;
                box-shadow: none;
                margin: 0;
                border: none;
                background: ${styles.colors.unset};
                flex-direction: column;
                align-items: center;
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
const FeaturedServiceImage = styled.img`
    max-width: 210px;
    margin-bottom: 27px;
    @media (min-width: ${styles.breakpoints.m}px) {
        max-width: 258px;
        margin-bottom: 0;
    }
    ${props => {
        if (props.isHome) {
            return ` 
            max-height: 120px;
            max-width: 100%;
            @media (min-width: ${styles.breakpoints.m}px) {
                max-height: 125px;
            }
            `
        }
    }}
`
const InfoContainer = styled.div`
    width: unset;
    right: 0;
    @media (min-width: ${styles.breakpoints.m}px) {
        position: absolute;
        top: 65px;
        right: 20px;
        z-index: 2;
        width: 100%;
        padding: 49px 47px 44px 47px;
        background: ${styles.colors.white};
        border: 3px solid ${styles.colors.purplePrimary};
        border-radius: 14px;
        box-shadow: 12px 12px 0px ${styles.colors.purplePrimary};
    }
    @media (min-width: ${styles.breakpoints.m}px) and (max-width: 875px) {
        max-width: 450px;
    }
    @media (min-width: 876px) and (max-width: 925px) {
        max-width: 500px;
    }
    @media (min-width: 926px) {
        max-width: 600px;
    }   
    @media (min-width: ${styles.breakpoints.l}px) {
        width: unset;
        padding: 49px 47px 44px 86px;
        right: 0;
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
                box-shadow: none;
            }
            `
        }
    }}
`
const FeaturedServiceTitle = styled.h3`
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
const FeaturedServiceDescription = styled.p`
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
    const intl = useIntl();
    const FeaturedService = props.service
    return (
        props.isHome ? 
        <FeaturedServiceContainer isHome={props.isHome}> 
            <FeaturedServiceWrapper isHome={props.isHome}> 
                <FeaturedServiceLink
                    isHome={props.isHome}
                    to='/servicios'
                >
                    <ImageContainer isHome={props.isHome}>
                        <FeaturedServiceImage
                            src={FeaturedServiceImageconst.default} 
                            alt={intl.formatMessage({id: "service_subsection.featuredServiceImageAlt"})}
                            isHome={props.isHome}
                        >
                        </FeaturedServiceImage>
                    </ImageContainer>
                    <InfoContainer isHome={props.isHome}>
                            <FeaturedServiceTitle isHome={props.isHome}>{intl.formatMessage({id: "service_subsection.title"})}</FeaturedServiceTitle>
                            <FeaturedServiceDescription isHome={props.isHome}>{intl.formatMessage({id: "service_subsection.description"})}</FeaturedServiceDescription>
                    </InfoContainer>
                </FeaturedServiceLink>
            </FeaturedServiceWrapper>
        </FeaturedServiceContainer>
        :
        <FeaturedServiceContainer isHome={props.isHome}> 
            <FeaturedServiceWrapper isHome={props.isHome}> 
                <ImageContainer isHome={props.isHome}>
                    <FeaturedServiceImage
                        src={FeaturedServiceImageconst.default} 
                        alt={intl.formatMessage({id: "service_subsection.featuredServiceImageAlt"})}
                        isHome={props.isHome}
                    >
                    </FeaturedServiceImage>
                </ImageContainer>
                <InfoContainer isHome={props.isHome}>
                        <FeaturedServiceTitle isHome={props.isHome}>{intl.formatMessage({id: "service_subsection.title"})}</FeaturedServiceTitle>
                        <FeaturedServiceDescription isHome={props.isHome}>{intl.formatMessage({id: "service_subsection.description"})}</FeaturedServiceDescription>
                </InfoContainer>
            </FeaturedServiceWrapper>
        </FeaturedServiceContainer>
    );
};

export default FeaturedService;