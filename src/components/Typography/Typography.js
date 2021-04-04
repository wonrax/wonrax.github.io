import React from "react"
import typographyStyles from "./Typography.module.css"
import spacingStyles from "../../components/layout/Spacing.module.css"
import colorsStyles from "../Colors.module.css"
import cx from "classnames"

class Heading extends React.Component {
  render() {
    let align = null
    if (this.props.align === "center") {
      align = spacingStyles.textAlignCenter
    }

    const headingLevel = typographyStyles["heading" + this.props.weight]

    const cs = cx(
      this.props.color ? colorsStyles[this.props.color] : colorsStyles.gray0,
      align,
      headingLevel
    )

    const tagName = "h" + this.props.weight
    return React.createElement(tagName, { className: cs }, this.props.children)
  }
}

class Paragraph extends React.Component {
  render() {
    const cs = cx(
      this.props.lh && typographyStyles[this.props.lh],
      this.props.color ? colorsStyles[this.props.color] : colorsStyles.gray0
    )
    return <p className={cs}>{this.props.children}</p>
  }
}

class Caption extends React.Component {
  render() {
    let align = null
    if (this.props.align === "center") {
      align = spacingStyles.textAlignCenter
    }
    const cs = cx(
      this.props.color ? colorsStyles[this.props.color] : colorsStyles.gray0,
      typographyStyles.caption,
      align
    )
    return <p className={cs}>{this.props.children}</p>
  }
}

// class Link extends React.Component {
//   render() {
//     return
//   }
// }

export { Heading, Paragraph, Caption }
