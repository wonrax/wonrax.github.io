import React from "react"
import { Container } from "../components"

export default function Home() {
  return (
    <Container>
      <p style={{ fontSize: 1.5 + "rem" }}>Hello world!</p>
      <p style={{ fontSize: 1 + "rem", lineHeight: 1.6 }}>
        Welcome to Gatsby! The goal of this tutorial is to guide you through
        setting up and deploying your first Gatsby site. Along the way, you'll
        learn some general web development topics as well as the fundamentals of
        building a Gatsby site.
      </p>
    </Container>
  )
}
