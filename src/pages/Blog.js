import React from 'react';
import Wrapper from '../components/common/PageWrapper'


const Blog = () => {

    const PageContent = () => {
        return (
            <h1>Blog</h1>
        )
      }
    
      return (
          <Wrapper children={PageContent} background="lightblue"></Wrapper>
      );
};

export default Blog;