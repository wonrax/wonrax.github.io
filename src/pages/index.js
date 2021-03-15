import React from "react"
import { Container, Reading } from "../components"

export default function Home() {
  return (
    <Container>
      <Reading>
        <p style={{ fontSize: 1.5 + "rem", marginBottom: "16px" }}>
          hello world!
        </p>
        <p style={{ fontSize: 1 + "rem", lineHeight: 1.6 }}>i'm hải</p>
      </Reading>
    </Container>
  )
}
