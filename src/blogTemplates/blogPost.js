import React from "react";
import { graphql } from "gatsby";
import { changeLocale } from "gatsby-plugin-react-intl";
import { useEffect } from "react";
import styled from 'styled-components'
import Img from "gatsby-image"
import data from '../content/content.json'
import { useIntl, Link } from "gatsby-plugin-react-intl"

import Button from '../components/common/Button'
import Tags from '../components/common/Tags'

const styles = data.styles

const PostContainer = styled.div`
  padding-bottom: 195px;
  @media (min-width: ${styles.breakpoints.m}px) {
    padding-bottom: 243px;
  }
`
const PostMainWrapper = styled.div`
  padding: 0 20px;
  @media (min-width: ${styles.breakpoints.m}px) {
      max-width: 584px;
      margin: auto;
      padding: 0;
  }
`
const HeaderImage = styled(Img)`
  width:100%;
`

const HeaderImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
`
const HeaderImageWrapper = styled.div`
  max-height: 201px;
  overflow: hidden;
  @media (min-width: ${styles.breakpoints.m}px) {
      max-height: 210px;
  }
`
const BreadcrumbContainer = styled.div`
  background: ${styles.colors.purpleLight};
  padding: 10px 20px;
  @media (min-width: ${styles.breakpoints.m}px) {
    padding: 10px 0;
  }
`
const BreadcrumbWrapper = styled.div`
  @media (min-width: ${styles.breakpoints.m}px) {
      max-width: 584px;
      margin: auto;
  }
`
const Breadcrumb = styled.p`
  font-size: .72em;
  color: ${styles.colors.darkGrey};
`
const BlogLink = styled(Link)`
//font-weight: ${styles.fontWeight.medium};
color: ${styles.colors.darkGrey};
`
const PostInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px 0 20px 0;
  @media (min-width: ${styles.breakpoints.m}px) {
    padding: 20px 0;
  }
`
const PostAuthor = styled.span`
  font-size: .72em;
  font-size: ${styles.fontWeight.medium};
  color: ${styles.colors.darkGrey};
  text-transform: uppercase;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`
const AuthorAvatar = styled.img`
  width: 18px;
  height: 18px;
  margin-right: 5px;
`
const PostDate = styled.span`
  font-size: .72em;
  font-size: ${styles.fontWeight.medium};
  color: ${styles.colors.darkGrey};
`
const PostTitle = styled.h3`
  font-size: 1.72em;
  line-height: 37px;
  color: ${styles.colors.purplePrimary};
  padding-bottom: 30px;
  margin-bottom: 30px;
  border-bottom: 1px solid ${styles.colors.darkGrey};
  @media (min-width: ${styles.breakpoints.m}px) {
      font-size: 2.44em;
      line-height: 50px;
      margin-bottom: 30px;
  }
`
const PostContent = styled.div`
  font-size: .88em;
  line-height: 23px;
  color: ${styles.colors.darkGreyAlt};
  margin-bottom: 30px;
      p{
        margin-bottom:30px;
      }

      h2{
        font-size: .88rem;
        line-height: 23px;
        color: ${styles.colors.purplePrimary};
        font-weight: ${styles.fontWeight.bold};
        margin-bottom: 20px;
      }

      figure{
        margin-bottom: 30px;
        max-width: 320px;
        pointer-events: none;
        @media (min-width: ${styles.breakpoints.m}px) {
            max-width: 584px;
        }      
        figcaption{
          font-size: .66rem;
          font-weight: ${styles.fontWeight.medium};
          color: ${styles.colors.darkGrey};
          background: ${styles.colors.greenLight};
          padding: 5px 10px;
          margin-top: 0;
        }
      }
`

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 25px 0;  
  margin-bottom: 20px;
  border-top: 1px solid ${styles.colors.darkGrey};
  border-bottom: 1px solid ${styles.colors.darkGrey};
  @media (min-width: ${styles.breakpoints.m}px) {
      margin-bottom: 30px;
      padding: 27px 0;
  }
`
const TagsTitle = styled.h4`
  font-size: .72em;
  color: ${styles.colors.purplePrimary}!important;
  font-weight: ${styles.fontWeight.medium};
  flex-basis: 100%;
  margin-bottom: 15px;
  @media (min-width: ${styles.breakpoints.m}px) {
    margin-bottom: 18px;
  }
`

const Btn = styled(Button)`
  display: flex;
  justify-content: center;
`

export default function Post({ data, props }) {
  const { html, frontmatter: post } = data.markdownRemark;
  const intl = useIntl();

  useEffect(() => {
    if (post.lang !== "es") {
      changeLocale(post.lang);
    }
  }, [post.lang]);

  return (
  <PostContainer>
    <HeaderImageContainer>
      <HeaderImageWrapper>
          <HeaderImage fluid={post.image.childImageSharp.fluid} alt="" />
      </HeaderImageWrapper>
    </HeaderImageContainer>
    <BreadcrumbContainer>
      <BreadcrumbWrapper>
          <Breadcrumb>
            <BlogLink to='/blog'>Blog</BlogLink> > {post.title}
          </Breadcrumb>
      </BreadcrumbWrapper>
    </BreadcrumbContainer>
      <PostMainWrapper>
                <PostInfo>
                    <PostAuthor>
                        <AuthorAvatar src={require('../images/icon_user.svg').default} alt="author avatar" />
                        {post.author}
                    </PostAuthor>
                    <PostDate>{post.date}</PostDate>
                </PostInfo>
                <PostTitle>{post.title}</PostTitle>

                <PostContent dangerouslySetInnerHTML={{ __html: html }}></PostContent>

                <TagsContainer>
                  <TagsTitle>{intl.formatMessage({id: 'blogPost.tagsTitle'})}</TagsTitle>
                  <Tags tags={post.tags} styles={styles} tagsType="services"></Tags>
                </TagsContainer>
                
                <Btn type='btnPrimaryPurple' 
                    theme={styles} 
                    btnText={intl.formatMessage({id: 'blogPost.verTodosBtn'})}>    
                </Btn>
      </PostMainWrapper>
    </PostContainer>
  );
}

export const pageQuery = graphql`
  query PostQuery($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
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
      timeToRead
    }
  }
`;
