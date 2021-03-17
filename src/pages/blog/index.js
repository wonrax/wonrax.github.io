import React from "react"
import { Container, Reading, Paragraph, Heading } from "../../components"
import { graphql } from "gatsby"

export default function Blog({ data: { allMdx } }) {
  const blogPosts = allMdx.edges.map(edge => (
    <Heading weight={4} key={edge.node.id}>
      {edge.node.frontmatter.title}
    </Heading>
  ))
  return (
    <Container>
      <Reading>
        <Heading weight={2}>blog posts</Heading>
        {blogPosts}
      </Reading>
    </Container>
  )
}

export const pageQuery = graphql`
  query PostsQuery {
    allMdx {
      edges {
        node {
          frontmatter {
            title
            excerpt
          }
          id
        }
      }
    }
  }
`
