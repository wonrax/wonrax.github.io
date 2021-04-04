import React from "react"
import { graphql } from "gatsby"
import {
  Container,
  Reading,
  Heading,
  Paragraph,
  Caption,
  Box,
} from "../components"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { shortcodes } from "../utils/shortcodes"

export default function Template({
  data: { mdx }, // this prop will be injected by the GraphQL query below.
}) {
  return (
    <Container>
      <Reading>
        <Box mb="mb16">
          <Heading color="primaryColor30" weight={3}>
            {mdx.frontmatter.title}
          </Heading>
        </Box>

        <Box mb="mb16">
          <Paragraph lh="lh170" mb="mb16" color="gray50">
            {mdx.frontmatter.excerpt}
          </Paragraph>
        </Box>

        <Box mb="mb32">
          <Caption
            color="primaryColor"
            mb="mb32"
          >{`Published ${mdx.frontmatter.date}`}</Caption>
        </Box>
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
