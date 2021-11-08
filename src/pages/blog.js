import React, { Fragment }  from 'react'
import { graphql } from 'gatsby';
import styled from 'styled-components'
import data from '../content/content.json'
import { useIntl } from "gatsby-plugin-react-intl"

import Button from '../components/common/Button'
import PostThumbnail from '../components/modules/PostThumbnail'

const styles = data.styles

const MainWrapper = styled.div`
  padding-bottom: 180px;
  @media (min-width: ${styles.breakpoints.m}px) {
    padding-bottom: 228px;
  }
`
const PostsContainer = styled.div`
  padding: 40px 20px 0 20px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  @media (min-width: ${styles.breakpoints.lpx}) {
    padding-top: 55px;
    padding-left: 0;
    padding-right: 0;
  }
`
const PostsWrapper = styled.div`
    display: inline-flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: auto;
    gap: 10px;
    padding: 0;
    max-width: 946px;
    @media (min-width: ${styles.breakpoints.m}px) {
      justify-content: flex-start;
      margin: auto;
      gap: 23px;
      padding: 0;
    }
    @media (min-width: ${styles.breakpoints.l}px) {
     width: 946px;
    }
  }
`
const BlogTitle = styled.h1`
  flex-basis: 100%;
  font-size: 2.38em;
  line-height: 49px;
  color: ${styles.colors.purplePrimary};
  margin: 0 auto 25px auto;
  text-align: center;
  @media (min-width: ${styles.breakpoints.m}px) {
    text-align: left;
    font-size: 3em;    
    line-height: 62px;
    margin-bottom: 35px;
  }
`
const Btn = styled(Button)`
  margin: 0px auto 15px auto;
`


const Blog = ({data: {allMarkdownRemark: { edges }}})  =>  {
  const intl = useIntl();
  console.log(intl.locale)

    return (

      <MainWrapper>
      <PostsContainer>
        <PostsWrapper>
            <BlogTitle>Blog</BlogTitle>

          {edges.map( post => {
            console.log(post.node.frontmatter.image.childImageSharp.fluid)
            if(post.node.frontmatter.lang === intl.locale){
              return(
                <PostThumbnail 
                postTitle={post.node.frontmatter.title}
                postDescription={post.node.excerpt}
                fluid={post.node.frontmatter.image.childImageSharp.fluid}
                slug={`/${post.node.frontmatter.lang}/post${post.node.frontmatter.slug}`}
                shortSlug={`/post${post.node.frontmatter.slug}`}
              />
              )
            }
          })}
          </PostsWrapper>
          <Btn
            type='btnPrimaryPurple'
            theme={styles}
            to="#"
            btnText='cargar más artículos'
          />
        </PostsContainer>
    </MainWrapper>

    )
}

export default Blog;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }, filter: {frontmatter: {type: {eq: "post"}}}) {
      edges {
        node {
          id
          excerpt(pruneLength: 95)
          frontmatter {
            lang
            type
            title
            author
            slug
            date
            tags
            image{
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            imageCredits
          }
        }
      }
    }
  }
`