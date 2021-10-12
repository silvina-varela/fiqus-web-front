import React from 'react';
import styled from 'styled-components'
import Tags from '../common/Tags'
import { useIntl } from "gatsby-plugin-react-intl"

const ServiceWrapper = styled.div`
    
`
const TextContainer = styled.div`

`
const ImageContainer = styled.div`

` 


const Service = (props) => {
    const service = props.service;
    const intl = useIntl();

    return (
        <ServiceWrapper> 
            <TextContainer>
                <h3>{intl.formatMessage({id:`${props.id}.service`})}</h3>
                <p>{intl.formatMessage({id: `${props.id}.description`})}</p>
                <Tags tagsType="services" tags={service.tags} styles={props.styles} ></Tags>
            </TextContainer>
            <ImageContainer>
                <object 
                    data={require(`../../images/illustrations/${service.image}.svg`).default} 
                    type="image/svg+xml">
                </object>
            </ImageContainer>
        </ServiceWrapper>
    );
};

export default Service;