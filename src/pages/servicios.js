import React from 'react'
import styled from 'styled-components'
import Wrapper from '../components/common/PageWrapper'
import data from '../content/content.json'


const Services = () => {
    const content = data.services
    console.log(content)
      return (
        <Wrapper>
            <h1>{content.title}</h1>
        </Wrapper>
      );
};

export default Services;