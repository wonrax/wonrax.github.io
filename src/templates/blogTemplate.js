import React from "react"
import { graphql } from "gatsby"
import { Container, Reading, Heading, Paragraph, Caption } from "../components"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { shortcodes } from "../utils/shortcodes"

export default function Template({
  data: { mdx }, // this prop will be injected by the GraphQL query below.
}) {
  return (
    <Container>
      <Reading>
        <Heading style={{ color: "var(--text-color-tinted)" }} weight={3}>
          {mdx.frontmatter.title}
        </Heading>
        <Paragraph lh={"lh170"} color={"textColorSecondary"}>
          {mdx.frontmatter.excerpt}
        </Paragraph>
        <Caption
          color={"primary-color"}
        >{`Published ${mdx.frontmatter.date}`}</Caption>
        <MDXProvider components={shortcodes}>
          <MDXRenderer className="blog-post-content">{mdx.body}</MDXRenderer>
        </MDXProvider>
      </Reading>
    </Container>
  )
}

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        excerpt
      }
    }
  }
`
