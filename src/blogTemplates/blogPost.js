import React from "react";
import { graphql } from "gatsby";
import { changeLocale } from "gatsby-plugin-react-intl";
import { useEffect } from "react";
import styled from 'styled-components'
import Img from "gatsby-image"
import data from '../content/content.json'
import { useIntl } from "gatsby-plugin-react-intl"

import Button from '../components/common/Button'
import Tags from '../components/common/Tags'

const styles = data.styles

const PostContainer = styled.div`
`
const PostMainWrapper = styled.div`
    @media (min-width: ${styles.breakpoints.m}px) {
        max-width: 584px;
        margin: auto;
    }
`
const HeaderImage = styled.img`
    width:100%;
`

const HeaderImageContainer = styled.div`
    display: flex;
    flex-direction: column;
    overflow: hidden;
`
const HeaderImageWrapper = styled.div`
    max-height: 210px;
    overflow: hidden;
    @media (min-width: ${styles.breakpoints.m}px) {
        max-height: 201px;
    }
`
const BreadcrumbContainer = styled.div`
    background: ${styles.colors.purpleLight};
    padding: 10px 0;
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
const PostInfo = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
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
    }
`
const PostContent = styled.p`
font-size: .88em;
line-height: 23px;
color: ${styles.colors.darkGreyAlt};
margin-bottom: 30px;

    h5{
      font-size: .88em;
      line-height: 23px;
      color: ${styles.colors.purplePrimary};
      font-weight: ${styles.fontWeight.bold};
      margin-top: 20px;
      margin-bottom: 20px;
    }
`

const PostImageContainer = styled.div`
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    max-width: 320px;
    @media (min-width: ${styles.breakpoints.m}px) {
        max-width: 560px;
    }
`
const PostImageWrapper = styled.div`
    max-height: 122px;
    overflow: hidden;
`
const PostImage = styled(Img)`
    width: 100%;
`
const PostImageCredit = styled.div`
    font-size: .66em;
    color: ${styles.colors.darkGrey};
    background: ${styles.colors.greenLight};
    padding: 10px;
    margin-top: 0;
`
const Btn = styled(Button)`
        margin-bottom: 80px ;
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

  console.log(post)

  return (
    <PostContainer>
      <HeaderImageContainer>
        <HeaderImageWrapper>
            <HeaderImage src={require('../images/blog.png').default} alt="" />
        </HeaderImageWrapper>
      </HeaderImageContainer>
      <BreadcrumbContainer>
        <BreadcrumbWrapper>
            <Breadcrumb>Blog - Artículo</Breadcrumb>
        </BreadcrumbWrapper>
        <PostMainWrapper>
                <PostInfo>
                    <PostAuthor>
                        <AuthorAvatar src={require('../images/icon_user.svg').default} alt="author avatar" />
                        {post.author}
                    </PostAuthor>
                    <PostDate>{post.date}</PostDate>
                </PostInfo>
                <PostTitle>{post.title}</PostTitle>

                <PostContent>

                </PostContent>
                <PostImageContainer>
                    <PostImageWrapper>
                        <PostImage fluid={post.image.childImageSharp.fluid } alt="" />
                    </PostImageWrapper>
                    <PostImageCredit></PostImageCredit>
                </PostImageContainer>

                
                <Btn type='btnPrimaryPurple' 
                    theme={styles} 
                    btnText={intl.formatMessage({id: 'verMasArticulos'})}>    
                </Btn>
            </PostMainWrapper>
      
      </BreadcrumbContainer>
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
            fixed(width: 300, height: 300) {
              ...GatsbyImageSharpFixed
          }
          }
        }
        imageCredits
      }
      timeToRead
    }
  }
`;
