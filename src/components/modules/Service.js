import React from 'react';
import styled from 'styled-components'
import Tags from '../common/Tags'

const ServiceWrapper = styled.div`
    
`
const TextContainer = styled.div`

`
const ImageContainer = styled.div`

` 


const Service = (props) => {
    const service = props.service
    return (
        <ServiceWrapper> 
            <TextContainer>
                <h3>{service.service}</h3>
                <p>{service.description}</p>
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