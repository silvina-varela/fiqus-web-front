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
    return (
        <ServiceWrapper> 
            <TextContainer>
                <h3>{props.service}</h3>
                <p>{props.description}</p>
            </TextContainer>
            <ImageContainer>
                <object 
                    data={require(`../../images/illustrations/${props.image}.svg`).default} 
                    type="image/svg+xml">
                </object>
            </ImageContainer>
        </ServiceWrapper>
    );
};

export default Service;