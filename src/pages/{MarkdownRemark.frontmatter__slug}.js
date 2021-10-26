import { graphql } from "gatsby"
import * as React from "react"
import Wrapper from '../components/layout/PageWrapper'

export default function BlogPostTemplate({ data: { markdownRemark } }) {
  const { frontmatter, html } = markdownRemark;

  const PageContent = () => {
    return (
      <div>
        <h1>{frontmatter.title}</h1>
        <h2>{frontmatter.date}</h2>
        <div className="post-body" dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    )
  } 

  return (
    <Wrapper children={PageContent} > </Wrapper>
  );
}

export const pageQuery = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        slug
      }
    }
  }
`;