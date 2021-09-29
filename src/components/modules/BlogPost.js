import React from 'react';
import styled from 'styled-components'
import Button from '../common/Button'

const PostContainer = styled.div`

`

const PostTitle = styled.h3`

`

const PostImage = styled.img`

`
const PostExcerpt =styled.p`

`


const BlogPost = (props) => {
    const post = props.postData
    console.log(post)
    return (
        <PostContainer>
            <PostImage src={require('../../images/illustrations/labs.svg').default}></PostImage>
            <PostTitle>{post.frontmatter.title}</PostTitle>
            <PostExcerpt>{post.excerpt}</PostExcerpt>
        </PostContainer>
    );
};

export default BlogPost;