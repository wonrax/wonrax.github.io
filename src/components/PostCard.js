import React from "react"
import { Heading, Paragraph, Caption } from "."
import postCardStyles from "./PostCard.module.css"
import spacingStyles from "./layout/Spacing.module.css"

const PostCard = props => {
  return (
    <a href={props.url}>
      <div
        className={postCardStyles.postCardWrapper + " " + spacingStyles.mb16}
      >
        <Heading weight={4} mb="mb16">
          {props.title}
        </Heading>
        <Paragraph mb="mb16">{props.excerpt}</Paragraph>
        <Caption color="primaryColor">{props.publishedDate}</Caption>
      </div>
    </a>
  )
}

export default PostCard
