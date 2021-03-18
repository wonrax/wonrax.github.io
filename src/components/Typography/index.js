import React from "react"
import typographyStyles from "./Typography.module.css"
import spacingStyles from "../../components/layout/Spacing.module.css"

class Heading extends React.Component {
  render() {
    const classnames = `${this.props.mb ? spacingStyles[this.props.mb] : ""} ${
      this.props.mt ? spacingStyles[this.props.mt] : ""
    }`
    switch (this.props.weight) {
      case 1:
        return <h1 className={classnames}>{this.props.children}</h1>
      case 2:
        return <h2 className={classnames}>{this.props.children}</h2>
      case 3:
        return <h3 className={classnames}>{this.props.children}</h3>
      case 4:
        return <h4 className={classnames}>{this.props.children}</h4>
      case 5:
        return <h5 className={classnames}>{this.props.children}</h5>
      case 6:
        return <h6 className={classnames}>{this.props.children}</h6>
      default:
        return <h1 className={classnames}>{this.props.children}</h1>
    }
  }
}

class Paragraph extends React.Component {
  render() {
    const classnames = `${this.props.mb ? spacingStyles[this.props.mb] : ""} ${
      this.props.color || ""
    } ${
      this.props.lh ? typographyStyles[this.props.lh] : typographyStyles.lh170
    }`
    return <p className={classnames}>{this.props.children}</p>
  }
}

class Caption extends React.Component {
  render() {
    return (
      <p
        className={`primaryColor ${typographyStyles.caption} ${
          this.props.mb ? spacingStyles[this.props.mb] : ""
        }`}
      >
        {this.props.children}
      </p>
    )
  }
}

// class Link extends React.Component {
//   render() {
//     return
//   }
// }

export { Heading, Paragraph, Caption }
