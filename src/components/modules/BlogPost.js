import React from 'react';
import styled from 'styled-components'
import Img from "gatsby-image"
import Button from '../common/Button'
import data from '../../content/content.json'
import { useIntl } from "gatsby-plugin-react-intl"

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
    //height: 100%;
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
`
const PostSubtitle = styled.h5`
    font-size: .88em;
    line-height: 23px;
    color: ${styles.colors.purplePrimary};
    font-weight: ${styles.fontWeight.bold};
    margin-top: 20px;
    margin-bottom: 20px;
`
const PostExcerpt = styled.p`
    font-size: .88em;
    line-height: 23px;
    color: ${styles.colors.darkGreyAlt};
    margin-bottom: 30px;
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
const PostImage = styled.img`
    width: 100%;
`
const PostImageCredit = styled.div`
    font-size: .66em;
    color: ${styles.colors.darkGrey};
    background: ${styles.colors.greenLight};
    padding: 10px;
    margin-top: 0;
`
const TagsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding-top: 20px;
    padding-bottom: 20px;
    margin-bottom: 20px;
    border-top: 1px solid ${styles.colors.darkGrey};
    border-bottom: 1px solid ${styles.colors.darkGrey};
    @media (min-width: ${styles.breakpoints.m}px) {
        margin-bottom: 30px;
    }
`
const TagsTitle = styled.h4`
    font-size: .72em;
    color: ${styles.colors.purplePrimary}!important;
    font-weight: ${styles.fontWeight.medium};
    flex-basis: 100%;
    margin-bottom: 10px;
`
const Tag = styled.div`
    margin: 0 6px 8px 0px;
    padding: 8px 14px;
    border-radius: 10px;
    font-size: 14px;
    font-weight: ${styles.fontWeight.medium};
    background-color: ${styles.colors.purpleLight};
    color: ${styles.colors.purpleSecondary};
    width: max-content;
`
const Btn = styled(Button)`
        margin-bottom: 80px ;
        display: flex;
        justify-content: center;
`

const BlogPost = (props) => {
    const intl = useIntl();
    const post = props.postData
    return (
        <PostContainer>
            <HeaderImageContainer>
                <HeaderImageWrapper>
                    <HeaderImage src={require('../../images/blog.png').default} alt="" />
                </HeaderImageWrapper>
            </HeaderImageContainer>
            <BreadcrumbContainer>
                <BreadcrumbWrapper>
                    <Breadcrumb>Blog - Artículo</Breadcrumb>
                </BreadcrumbWrapper>
            </BreadcrumbContainer>
            <PostMainWrapper>
                <PostInfo>
                    <PostAuthor>
                        <AuthorAvatar src={require('../../images/icon_user.svg').default} alt="author avatar" />
                        Nicolas Dimarco
                    </PostAuthor>
                    <PostDate>18 de Abril | 2021</PostDate>
                </PostInfo>
                <PostTitle>{post.frontmatter.title}</PostTitle>
                <PostContent>
                En Fiqus tenemos programadores a los que aparte de programar imperativamente, nos gusta y nos motiva programar funcionalmente.
                </PostContent>
                <PostSubtitle>¿Qué es la programación funcional?</PostSubtitle>
                <PostExcerpt>{post.excerpt}</PostExcerpt>
                <PostImageContainer>
                    <PostImageWrapper>
                        <PostImage src={require('../../images/blogPost.png').default} alt="" />
                    </PostImageWrapper>
                    <PostImageCredit>Créditos de imagen Unsplash</PostImageCredit>
                </PostImageContainer>
                <PostExcerpt>{post.excerpt}</PostExcerpt>
                <TagsContainer>
                    <TagsTitle>Etiquetas relacionadas</TagsTitle>
                    <Tag>Erlang</Tag>
                    <Tag>Elixir</Tag>
                    <Tag>Miranda</Tag>
                </TagsContainer>
                
                <Btn type='btnPrimaryPurple' 
                    theme={styles} 
                    to={props.href} 
                    btnText={intl.formatMessage({id: 'verMasArticulos'})}
                    isHome={props.isHome}>    
                </Btn>
            </PostMainWrapper>
        </PostContainer>
    );
};

export default BlogPost;