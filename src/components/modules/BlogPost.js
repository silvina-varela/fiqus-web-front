import React from 'react';
import styled from 'styled-components'
import Img from "gatsby-image"
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
    return (
        <PostContainer>
            <Img fluid={props.imgFluid}></Img>
            <PostTitle>{post.frontmatter.title}</PostTitle>
            <PostExcerpt>{post.excerpt}</PostExcerpt>
        </PostContainer>
    );
};

export default BlogPost;