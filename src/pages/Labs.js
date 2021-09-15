import React from 'react';
import styled from 'styled-components'
import Wrapper from '../components/common/PageWrapper'

const Labs = () => {

    const PageContent = () => {
        return (
            <h1>ESTE ES EL CONTENIDO MALDITA ZEA</h1>
        )
      }
    
      return (
          <Wrapper children={PageContent} background="orange"></Wrapper>
      );
};

export default Labs;