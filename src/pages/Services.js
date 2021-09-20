import React, { Fragment }  from 'react'
import styled from 'styled-components'
import Wrapper from '../components/common/PageWrapper'
import data from '../content/content.json'

const Services = () => {
    const content = data.services
    
      return (
        <Wrapper background="blue">
            <h1>{content.title}</h1>
        </Wrapper>
      );
};

export default Services;