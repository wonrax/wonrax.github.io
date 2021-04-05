import React from "react"
import { Heading, Paragraph, Caption, Box } from "."
import postCardStyles from "./PostCard.module.css"
import spacingStyles from "./layout/Spacing.module.css"

const PostCard = props => {
  return (
    <a href={props.url}>
      <div
        className={postCardStyles.postCardWrapper + " " + spacingStyles.mb16}
      >
        <Box mb="mb16">
          <Heading weight={4}>{props.title}</Heading>
        </Box>
        <Box mb="mb16">
          <Paragraph lh="lh150" color="gray50">
            {props.excerpt}
          </Paragraph>
        </Box>
        <Caption color="primaryColor">{props.publishedDate}</Caption>
      </div>
    </a>
  )
}

export { PostCard }
