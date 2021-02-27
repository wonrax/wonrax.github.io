import React from "react"
import "./Typography.module.css"

class Heading extends React.Component {
  render() {
    switch (this.props.weight) {
      case 1:
        return <h1>{this.props.children}</h1>
      case 2:
        return <h2>{this.props.children}</h2>
      case 3:
        return <h3>{this.props.children}</h3>
      case 4:
        return <h4>{this.props.children}</h4>
      case 5:
        return <h5>{this.props.children}</h5>
      case 6:
        return <h6>{this.props.children}</h6>
      default:
        return <h1>{this.props.children}</h1>
    }
  }
}

class Paragraph extends React.Component {
  render() {
    return <p>{this.props.children}</p>
  }
}

export { Heading, Paragraph }
