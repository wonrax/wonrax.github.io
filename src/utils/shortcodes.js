import React from "react"
import { Heading, Paragraph } from "../components/Typography"

// Convert markdown tags to components
const commonHeadingClassnames = {
  mb: "mb16",
  mt: "mt32",
}
export const shortcodes = {
  h1: props => (
    <Heading weight={4} {...commonHeadingClassnames}>
      {props.children}
    </Heading>
  ),
  h2: props => (
    <Heading weight={5} {...commonHeadingClassnames}>
      {props.children}
    </Heading>
  ),
  h3: props => (
    <Heading weight={6} {...commonHeadingClassnames}>
      {props.children}
    </Heading>
  ),
  h4: props => (
    <Heading weight={6} {...commonHeadingClassnames}>
      {props.children}
    </Heading>
  ),
  h5: props => (
    <Heading weight={6} {...commonHeadingClassnames}>
      {props.children}
    </Heading>
  ),
  h6: props => (
    <Heading weight={6} {...commonHeadingClassnames}>
      {props.children}
    </Heading>
  ),
  p: props => (
    <Paragraph lh={"lh170"} mb="mb16">
      {props.children}
    </Paragraph>
  ),
}
