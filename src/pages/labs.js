import React, {Fragment} from "react"
import { graphql } from 'gatsby';
import styled from 'styled-components'
import Lab from "../components/modules/Lab"
import { useIntl, Link } from "gatsby-plugin-react-intl"
import SectionHeader from "../components/common/SectionHeader"
import {styles} from '../content/content.json'

const PostsMainContainer = styled.div`
  display: flex;
  justify-content: center;
`
const PostsContainer = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 30px 20px 115px 20px;
  @media (min-width: ${styles.breakpoints.m}px) {
    justify-content: center;
    gap: 36px;
    max-width: 1140px;
    margin: auto;
    padding-top: 52px;
    padding-bottom: 163px;
  };
`
const PostsTitle = styled.h2`
  flex-basis: 100%;
  font-size: 1.72em;
  font-weight: ${styles.fontWeight.medium};
  line-height: 37px;
  text-align: center;
  color: ${styles.colors.darkMainBg};
  margin-bottom: 30px;
  @media (min-width: ${styles.breakpoints.m}px) {
    font-size: 2.83em;
    line-height: 59px;
    margin-bottom: 24px;
  }
`

const Labs = ({data: {allMarkdownRemark: { edges }}}) => {
  const intl = useIntl();

  const Labs = edges.map( 
    edge => {
      const fluidImg = edge.node.frontmatter.image.childImageSharp.fluid 
      const english = edge.node.frontmatter.english;

      if ( (english && intl.locale == 'en') || (!english && intl.locale == 'es')) {
        return(
          <Lab fluidImg={fluidImg} styles={styles} labData={edge.node}></Lab>
        )
      }      
    }
  )
  
  return ( 
    <Fragment>
      <SectionHeader 
        section="labs"
        title={intl.formatMessage({id: 'labs.title'})}
        subtitle={intl.formatMessage({id: 'labs.subtitle'})}
        description={intl.formatMessage({id: 'labs.content'})}
      />
      
      <PostsMainContainer>
        <PostsContainer>
          <PostsTitle>{intl.formatMessage({id: 'casos_de_exito.title'})}</PostsTitle>
          {Labs}
        </PostsContainer>
      </PostsMainContainer>
    
    </Fragment>
  )

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
            id
            title
            tags
            image{
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            website
            github
            english
          }
        }
      }
    }
  }
`