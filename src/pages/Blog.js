import React from 'react';
import Wrapper from '../components/common/PageWrapper'


const Blog = () => {

    const PageContent = () => {
        return (
            <h1>ESTE ES EL CONTENIDO MALDITA ZEA</h1>
        )
      }
    
      return (
          <Wrapper children={PageContent} background="lightblue"></Wrapper>
      );
};

export default Blog;