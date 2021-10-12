import React from 'react';
import styled from 'styled-components'
import Tags from '../common/Tags'
import data from '../../content/content.json'

const styles = data.styles

const ServiceWrapper = styled.div`
    background: ${styles.colors.white};    
    border-radius: 14px;
    display: flex;
    flex-direction: column;
    max-width: 946px;
    padding: 40px 20px;
    padding: 30px 25px;
    padding: 30px 25px 27px 25px!important;
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
    }
    min-width: unset;
    max-width: unset;   
    flex-basis: 100%;

    // service desktop style   
    flex-direction: column!important;
    max-width: 330px;
    @media (min-width: ${styles.breakpoints.m}px) {
        min-width: 330px;
        margin-bottom: 30px;   
        
        // service desktop style   
        margin-bottom: 50px;
        &:last-of-type {
            margin-bottom: 50px;
        }
        //flex-basis: 33.33%;
        min-width: unset;
        max-width: 330px;
    }

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
    // service desktop style    
    margin-left: 0!important;
`
const Boton = styled.button`
    margin: 0 6px 8px 0px;
    padding: 9px 20px;
    font-size: 18px;
    border-radius: 12px;
    border-color: ${styles.colors.purplePrimary};
    border-width: 2px!important;
    border-style: solid;
    box-shadow:  0px 4px 0px ${styles.colors.transparent};
    transition: 100ms ease-in-out all;
    margin-bottom: 10px;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1em;
    font-weight: ${styles.fontWeight.bold};
    color: ${styles.colors.purplePrimary};
    background-color: ${styles.colors.white};
    border-color: ${styles.colors.purplePrimary};
    box-shadow:  0px 4px 0px ${styles.colors.purplePrimary};
    max-width: max-content;
    &:hover {
        box-shadow: none;
    }
    margin-top: auto;
    display: none;
    @media (min-width: ${styles.breakpoints.m}px) {
        display: flex;
        margin-top: 46px;
    }
    // service desktop style
    display: none!important;
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
    // service desktop style
    margin-bottom: 0;
    //margin-top: 36px!important;
    margin-top: 30px!important;
    padding-top: 0!important;
    font-size: 1.44em!important;
    text-align: center!important;
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
    // service desktop style
    display: none;
`
const TagsContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: auto;
    margin-bottom: 15px;
    margin-bottom: 0;
    // service desktop style
    display: none;
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
    // service desktop style  
    margin-left: auto!important;
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
const Tag = styled(Tags)`
    background: red!important;
    color: red;
`

const ServiceImage = styled.object`
    width: 100%;
    // service desktop style    
    max-height: 134px;
`

const Service = (props) => {
    const service = props.service
    return (
        <ServiceWrapper> 
            <ImageContainerMobile>
                <ServiceImage 
                    data={require(`../../images/illustrations/${service.image}.svg`).default} 
                    type="image/svg+xml">
                </ServiceImage>
            </ImageContainerMobile>
            <LeftBlock>
                <ImageContainer>
                    <ServiceImage 
                        data={require(`../../images/illustrations/${service.image}.svg`).default} 
                        type="image/svg+xml">
                    </ServiceImage>
                </ImageContainer>
                <TagsContainer>
                    <TagsTitle>{service.service}</TagsTitle>
                    <Tag tagsType="services" tags={service.tags} styles={props.styles}></Tag>
                </TagsContainer>
            </LeftBlock>
            <RightBlock>
                <TextContainer>
                    <ServiceTitle>{service.service}</ServiceTitle>
                    <ServiceDescription>{service.description}</ServiceDescription>
                </TextContainer>
                <Boton>ver más</Boton>
            </RightBlock>
        </ServiceWrapper>
    );
};

export default Service;