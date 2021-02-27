import React from "react"
import { graphql } from "gatsby"
import { Container, Reading, Heading } from "../components"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { shortcodes } from "../utils/shortcodes"

export default function Template({
  data: { mdx }, // this prop will be injected by the GraphQL query below.
}) {
  return (
    <Container>
      <Reading>
        <Heading weight={3}>{mdx.frontmatter.title}</Heading>
        <Heading weight={6}>{mdx.frontmatter.date}</Heading>
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
      }
    }
  }
`
