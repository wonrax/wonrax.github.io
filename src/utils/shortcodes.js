import React from "react"
import { Heading, Paragraph, Box } from "../components"

// Convert markdown tags to components
const commonHeadingClassnames = {
  mb: "mb16",
  mt: "mt32",
}
export const shortcodes = {
  h1: props => (
    <Box {...commonHeadingClassnames}>
      <Heading weight={4}>{props.children}</Heading>
    </Box>
  ),
  h2: props => (
    <Box {...commonHeadingClassnames}>
      <Heading weight={5}>{props.children}</Heading>
    </Box>
  ),
  h3: props => (
    <Box {...commonHeadingClassnames}>
      <Heading weight={6}>{props.children}</Heading>
    </Box>
  ),
  h4: props => (
    <Box {...commonHeadingClassnames}>
      <Heading weight={6}>{props.children}</Heading>
    </Box>
  ),
  h5: props => (
    <Box {...commonHeadingClassnames}>
      <Heading weight={6}>{props.children}</Heading>
    </Box>
  ),
  h6: props => (
    <Box {...commonHeadingClassnames}>
      <Heading weight={6}>{props.children}</Heading>
    </Box>
  ),
  p: props => (
    <Box mb="mb16">
      <Paragraph lh={"lh170"} mb="mb16">
        {props.children}
      </Paragraph>
    </Box>
  ),
}
