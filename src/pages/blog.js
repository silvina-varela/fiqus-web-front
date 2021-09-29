import React, { Fragment }  from 'react'
import { graphql } from 'gatsby';
import styled from 'styled-components'
import Post from'../components/modules/BlogPost'

const PostsContainer = styled.div`

`


const Blog = ({data: {allMarkdownRemark: { edges }}})  =>  {



    const Posts = edges
        .filter( edge => !!edge.node.frontmatter.date) // filter posts based on some criteria
        .map( edge => <Post postData={edge.node}></Post>)

    return <PostsContainer>{Posts}</PostsContainer>
  }

export default Blog;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            slug
            title
          }
        }
      }
    }
  }
`