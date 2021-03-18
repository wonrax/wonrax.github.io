import React from "react"
import typographyStyles from "./Typography.module.css"
import spacingStyles from "../../components/layout/Spacing.module.css"
import colorsStyles from "../Colors.module.css"
import classnames from "classnames"

class Heading extends React.Component {
  render() {
    // const classnames = `${this.props.mb ? spacingStyles[this.props.mb] : ""} ${
    //   this.props.mt ? spacingStyles[this.props.mt] : ""
    // }`
    const className = classnames(
      this.props.mb && spacingStyles[this.props.mb],
      this.props.mt && spacingStyles[this.props.mt],
      this.props.color ? colorsStyles[this.props.color] : colorsStyles.gray0
    )
    switch (this.props.weight) {
      case 1:
        return <h1 className={className}>{this.props.children}</h1>
      case 2:
        return <h2 className={className}>{this.props.children}</h2>
      case 3:
        return <h3 className={className}>{this.props.children}</h3>
      case 4:
        return <h4 className={className}>{this.props.children}</h4>
      case 5:
        return <h5 className={className}>{this.props.children}</h5>
      case 6:
        return <h6 className={className}>{this.props.children}</h6>
      default:
        return <h1 className={className}>{this.props.children}</h1>
    }
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
    const className = classnames(
      this.props.color ? colorsStyles[this.props.color] : colorsStyles.gray0,
      typographyStyles.caption,
      this.props.mb && spacingStyles[this.props.mb]
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
