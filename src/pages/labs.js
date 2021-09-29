import React, {Fragment} from "react"
import { graphql } from 'gatsby';
import styled from 'styled-components'
import SuccessCase from "../components/modules/SuccessCase"

import {styles, labs} from '../content/content.json'

const PostsContainer = styled.div`

`

const Labs = ({data: {allMarkdownRemark: { edges }}}) => {

  const Labs = edges.map( 
    edge => <SuccessCase styles={styles} labData={edge.node}></SuccessCase>)
 
    return <PostsContainer>{Labs}</PostsContainer>
};

export default Labs;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }, filter: {frontmatter: {type: {eq: "lab"}}}) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            type
            date(formatString: "MMMM DD, YYYY")
            title
            tags
          }
        }
      }
    }
  }
`