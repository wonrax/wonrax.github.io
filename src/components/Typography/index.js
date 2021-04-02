import React from "react"
import typographyStyles from "./Typography.module.css"
import spacingStyles from "../../components/layout/Spacing.module.css"
import colorsStyles from "../Colors.module.css"
import classnames from "classnames"
import classNames from "classnames"

class Heading extends React.Component {
  render() {
    // const classnames = `${this.props.mb ? spacingStyles[this.props.mb] : ""} ${
    //   this.props.mt ? spacingStyles[this.props.mt] : ""
    // }`

    let align = null
    if (this.props.align === "center") {
      align = spacingStyles.textAlignCenter
    }

    const headingLevel = typographyStyles["heading" + this.props.weight]

    const className = classnames(
      // this.props.mb && spacingStyles[this.props.mb],
      // this.props.mt && spacingStyles[this.props.mt],
      this.props.color ? colorsStyles[this.props.color] : colorsStyles.gray0,
      align,
      headingLevel
    )

    const tagName = "h" + this.props.weight
    // return <tagName className={className}>{this.props.children}</tagName>
    return React.createElement(
      tagName,
      { className: className },
      this.props.children
    )
  }
}

class Paragraph extends React.Component {
  render() {
    const className = classnames(
      this.props.mb ? spacingStyles[this.props.mb] : "",
      this.props.lh && typographyStyles[this.props.lh],
      this.props.color ? colorsStyles[this.props.color] : colorsStyles.gray0
    )
    return <p className={className}>{this.props.children}</p>
  }
}

class Caption extends React.Component {
  render() {
    let align = null
    if (this.props.align === "center") {
      align = spacingStyles.textAlignCenter
    }
    const className = classnames(
      this.props.color ? colorsStyles[this.props.color] : colorsStyles.gray0,
      typographyStyles.caption,
      this.props.mb && spacingStyles[this.props.mb],
      align
    )
    return <p className={className}>{this.props.children}</p>
  }
}

// class Link extends React.Component {
//   render() {
//     return
//   }
// }

export { Heading, Paragraph, Caption }
