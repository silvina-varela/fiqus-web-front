import React from 'react';
import styled from 'styled-components'
import data from '../../content/content.json'
import Tags from '../common/Tags'
import Button from '../common/Button'
import { useIntl } from "gatsby-plugin-react-intl"

const styles = data.styles

const ServiceWrapper = styled.div`
    background: ${styles.colors.white};    
    border-radius: 14px;
    display: flex;
    flex-direction: column;
    max-width: 946px;
    padding: 40px 20px;
    padding: 30px 25px;
    padding: 30px 25px 27px 25px;
    margin-top: 0px;
    margin-bottom: 30px;
    margin-left: auto;
    margin-right: auto;
    &:last-of-type {
        margin-bottom: 0;
    }
    @media (min-width: ${styles.breakpoints.m}px) {
        flex-direction: row;
        padding: 30px 45px 30px 67px;
        &:last-of-type {
            margin-bottom: 87px;
        }
    }
    min-width: unset;
    max-width: unset;   
    flex-basis: 100%;
    
    ${props => {
        if (props.isHome) {
            return `
            display: flex!important;   
            flex-direction: column!important;
            max-width: 330px;
            @media (min-width: ${styles.breakpoints.m}px) {
                min-width: 330px;
                margin-bottom: 30px;   
                
                margin-bottom: 50px;
                &:last-of-type {
                    margin-bottom: 50px;
                }
                //flex-basis: 33.33%;
                min-width: unset;
                max-width: 330px;
            }
            `
        }
    }}

`
const LeftBlock = styled.div`
    order: 3;
    a {
        
        margin-top: 26px!important;
        margin: 0 auto;
    }
    @media (min-width: ${styles.breakpoints.m}px) {
        display: flex;
        order: unset;
        flex-direction: column;
        flex-basis: 45%;
        align-items: flex-start;        
        margin-right: 3px;
        a {
            display: none;
        }
    }
`
const RightBlock = styled.div`
    order: 2;
    a {
        display: none;
    }
    @media (min-width: ${styles.breakpoints.m}px) {
        display: flex;
        order: unset;
        flex-direction: column;
        flex-basis: 60%;
        margin-left: 40px;    
        a {
            display: flex;
            margin-top: 34px!important;
        }
    }
    ${props => {
        if (props.isHome) {
            return ` 
            margin-left: 0!important;
            `
        }
    }}
`

const TextContainer = styled.div`
`
const ServiceTitle = styled.h3`
    font-size: 1.44em;
    color: ${styles.colors.purplePrimary};
    margin: 18px 0;
    text-align: center;
    @media (min-width: ${styles.breakpoints.m}px) {
        font-size: 2.11em;
        text-align: left;
        padding-top: 8px;
        margin-top: 0;
    }
    ${props => {
        if (props.isHome) {
            return ` 
            margin-bottom: 0;
            margin-top: 30px!important;
            padding-top: 0!important;
            font-size: 1.44em!important;
            text-align: center!important;
            `
        }
    }}
`
const ServiceDescription = styled.p`
    font-size: 0.88em;
    line-height: 22px;
    color: ${styles.colors.darkMainBg};
    margin-bottom: 25px;
    @media (min-width: ${styles.breakpoints.m}px) {
        font-size: 1em;
        line-height: 26px;
        margin-bottom: auto;
    }
    ${props => {
        if (props.isHome) {
            return ` 
            display: none;
            `
        }
    }}
`

const TagsContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: auto;
    margin-bottom: 15px;
    margin-bottom: 0;
    ${props => {
        if (props.isHome) {
            return ` 
            display: none!important;
            `
        }
    }}
`
const TagsTitle = styled.h4`
    font-size: 0.88em;
    color: ${styles.colors.purplePrimary};
    margin-bottom: 18px;
    @media (min-width: ${styles.breakpoints.m}px) {
        font-size: 1em;
        line-height: 24px;
        margin-bottom: 15px;
        margin-top: 25px;
    }
`
const ImageContainer = styled.div`
    display: none;
    max-width: 200px;
    margin: auto;
    order: 1;
    @media (min-width: ${styles.breakpoints.m}px) {
        order: unset;
        margin-left: 0;
        margin-right: auto;
        margin-bottom: auto;
        margin-top: 0;
        max-width: 330px;
        display: flex;
    }
    ${props => {
        if (props.isHome) {
            return ` 
            margin-left: auto!important;
            `
        }
    }}
` 
const Tag = styled(Tags)`
    background: red!important;
    color: red;
`

const ImageContainerMobile = styled.div`
    max-width: 200px;
    margin: auto;
    order: 1;
    display: flex;
    @media (min-width: ${styles.breakpoints.m}px) {
        display: none;
        order: unset;
        margin-left: 0;
        margin-right: auto;
        margin-bottom: auto;
        margin-top: 0;
        max-width: 350px;
    }
`
const ServiceImage = styled.object`
    width: 100%;
    ${props => {
        if (props.isHome) {
            return `
            max-height: 134px;
            `
        }
    }}
`

const BtnMobile = styled(Button)`
    @media (min-width: ${styles.breakpoints.m}px) {
        display: none;
    }
`
const Btn = styled(Button)`
    
    /*
    padding: 9px 20px;
    background-color: ${styles.colors.orangeMain};
    border-radius: 12px;
    border-color: ${styles.colors.purplePrimary};
    border-width: 2px!important;
    border-style: solid;
    box-shadow:  0px 4px 0px ${styles.colors.darkMainBg};
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1em;
    font-weight: ${styles.fontWeight.bold};
    color: ${styles.colors.white};
    max-width: max-content;
    &:hover {
        box-shadow: none;
    }
    */

    /*
    margin: 0 6px 10px 0px;
    margin-top: auto;
    
    display: none;
    margin: 34px auto 71px auto;

    @media (min-width: ${styles.breakpoints.m}px) {
        margin-top: 46px;
        margin: 0 auto;
    }
    */
    
    ${props => {
        if (props.isHome) {
            return ` 
            display: flex!important;
            `
        }
    }}
`
const isHome = true;

const Service = (props) => {
    const service = props.service;
    const intl = useIntl();

    return (
        <ServiceWrapper isHome={isHome}> 
            <ImageContainerMobile>
                <ServiceImage 
                    isHome={isHome}
                    data={require(`../../images/illustrations/${service.image}.svg`).default} 
                    type="image/svg+xml">
                </ServiceImage>
            </ImageContainerMobile>
            <LeftBlock>
                <ImageContainer isHome={isHome}>
                    <ServiceImage 
                        data={require(`../../images/illustrations/${service.image}.svg`).default} 
                        type="image/svg+xml">
                    </ServiceImage>
                </ImageContainer>
                <TagsContainer isHome={isHome}>
                    <TagsTitle>{service.service}</TagsTitle>
                    <Tag tagsType="services" tags={service.tags} styles={props.styles}></Tag>
                </TagsContainer>
                
                <BtnMobile type='btnPrimaryPurple' theme={styles} to={props.href} btnText={intl.formatMessage({id: 'verMas'})}></BtnMobile>
            </LeftBlock>
            <RightBlock isHome={isHome}>
                <TextContainer>
                    <ServiceTitle isHome={isHome}>{intl.formatMessage({id:`${props.id}.service`})}</ServiceTitle>
                    <ServiceDescription isHome={isHome}>{intl.formatMessage({id: `${props.id}.description`})}</ServiceDescription>
                </TextContainer>
                <Btn type='btnPrimaryPurple' 
                    theme={styles} 
                    to={props.href} 
                    btnText={intl.formatMessage({id: 'verMas'})}
                    isHome={isHome}>    
                </Btn>
            </RightBlock>
        </ServiceWrapper>
    );
};

export default Service;