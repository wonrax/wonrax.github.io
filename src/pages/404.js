import React from "react"
import { Reading, Paragraph, Heading } from "../components"

class NotFound404 extends React.Component {
  render() {
    const cStyle = { display: "flex", alignItems: "center", height: "60vh" }
    const dStyle = { marginLeft: "16px" }
    return (
      <Reading>
        <div style={cStyle}>
          {/* <Heading weight={2}>{"⚠"}</Heading> */}
          <div style={dStyle}>
            <Heading weight={4} mb="mb16">
              {"Page Not Found"}
            </Heading>
            <Paragraph lh="lh150">{"How did you even get here?"}</Paragraph>
            <Paragraph lh="lh150">
              {"You trying to hack me or sth bro???"}
            </Paragraph>
          </div>
        </div>
      </Reading>
    )
  }
}

export default NotFound404
