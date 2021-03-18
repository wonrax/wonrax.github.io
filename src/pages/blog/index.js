import React from "react"
import { Container, Reading, Caption } from "../../components"
import PostCard from "../../components/PostCard"
import { graphql } from "gatsby"

export default function Blog({ data: { allMdx } }) {
  const blogPosts = allMdx.edges.map(edge => {
    return (
      <PostCard
        title={edge.node.frontmatter.title}
        excerpt={edge.node.frontmatter.excerpt}
        publishedDate={edge.node.frontmatter.date}
        url={edge.node.fields.slug}
      ></PostCard>
    )
  })
  return (
    <Container>
      <Reading>
        <Caption mb="mb32" align="center">
          blog posts
        </Caption>
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
          fields {
            slug
          }
        }
      }
    }
  }
`
