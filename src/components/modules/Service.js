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
    padding: 30px 25px 27px 25px;
    margin-top: 0px;
    margin-bottom: 30px;
    margin-left: auto;
    margin-right: auto;
    &:last-of-type {
        margin-bottom: 61px;
    }
    min-width: unset;
    max-width: unset;   
    flex-basis: 100%;
    @media (min-width: ${styles.breakpoints.m}px) {
        flex-direction: row;
        padding: 30px 45px 30px 67px;
        &:last-of-type {
            margin-bottom: 87px;
        }
    }
    
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
                min-width: unset;
                max-width: 330px;
            }
            `
        }
    }}

`
const LeftBlock = styled.div`
    order: 3;
    @media (min-width: ${styles.breakpoints.m}px) {
        display: flex;
        order: unset;
        flex-direction: column;
        flex-basis: 45%;
        align-items: flex-start;        
        margin-right: 3px;
    }
`
const RightBlock = styled.div`
    order: 2;
    @media (min-width: ${styles.breakpoints.m}px) {
        display: flex;
        order: unset;
        flex-direction: column;
        flex-basis: 60%;
        margin-left: 40px;
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
        padding-bottom: 35px;
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
        margin-top: 26px!important;
        display: none;
        display: flex;
        margin-left: 0;
    @media (min-width: ${styles.breakpoints.m}px) {
        display: none;
    }
`
const Btn = styled(Button)`
    display: none;
    @media (min-width: ${styles.breakpoints.m}px) {
        margin-top: auto!important;
        margin-bottom: 35px;
        display: flex;
        ${props => {
            if (props.isHome) {
                return ` 
                display: none;
                `
            }
        }}
    }
    ${props => {
        if (props.isHome) {
            return ` 
            display: none;
            `
        }
    }}
`

const Service = (props) => {
    const service = props.service;
    const intl = useIntl();

    return (
        <ServiceWrapper isHome={props.isHome}> 
            <ImageContainerMobile>
                <ServiceImage 
                    isHome={props.isHome}
                    data={require(`../../images/illustrations/${service.image}.svg`).default} 
                    type="image/svg+xml">
                </ServiceImage>
            </ImageContainerMobile>
            <LeftBlock>
                <ImageContainer isHome={props.isHome}>
                    <ServiceImage 
                        data={require(`../../images/illustrations/${service.image}.svg`).default} 
                        type="image/svg+xml">
                    </ServiceImage>
                </ImageContainer>
                <TagsContainer isHome={props.isHome}>
                    <TagsTitle>{service.tagsTitle}</TagsTitle>
                    <Tag tagsType="services" tags={service.tags} styles={props.styles}></Tag>
                </TagsContainer>
                
                <BtnMobile type='btnPrimaryPurple' theme={styles} to={props.href} btnText={intl.formatMessage({id: 'verMas'})}></BtnMobile>
            </LeftBlock>
            <RightBlock isHome={props.isHome}>
                <TextContainer>
                    <ServiceTitle isHome={props.isHome}>{intl.formatMessage({id:`${props.id}.service`})}</ServiceTitle>
                    <ServiceDescription isHome={props.isHome}>{intl.formatMessage({id: `${props.id}.description`})}</ServiceDescription>
                </TextContainer>
                <Btn type='btnPrimaryPurple' 
                    theme={styles} 
                    to={props.href} 
                    btnText={intl.formatMessage({id: 'verMas'})}
                    isHome={props.isHome}>    
                </Btn>
            </RightBlock>
        </ServiceWrapper>
    );
};

export default Service;