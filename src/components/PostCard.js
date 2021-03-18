import React from "react"
import { Heading, Paragraph } from "."
import postCardStyles from "./PostCard.module.css"

const PostCard = props => {
  return (
    <div className={postCardStyles.postCardWrapper}>
      <Heading weight={4}>{props.title}</Heading>
      <Paragraph>{props.excerpt}</Paragraph>
      <Paragraph>{props.publishedDate}</Paragraph>
    </div>
  )
}

export default PostCard
