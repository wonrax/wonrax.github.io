import React from "react"
import { Container, Reading, Paragraph, Heading } from "../../components"
import PostCard from "../../components/PostCard"
import { graphql } from "gatsby"

export default function Blog({ data: { allMdx } }) {
  const blogPosts = allMdx.edges.map(edge => {
    return (
      <PostCard
        title={edge.node.frontmatter.title}
        excerpt={edge.node.frontmatter.excerpt}
        publishedDate={edge.node.frontmatter.date}
      ></PostCard>
    )
  })
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
            date(formatString: "MMMM DD, YYYY")
          }
          id
        }
      }
    }
  }
`
