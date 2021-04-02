import classNames from "classnames"
import React from "react"
import spacingStyles from "./layout/Spacing.module.css"

class Box extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const className = classNames(
      spacingStyles[this.props.mb],
      spacingStyles[this.props.mt]
    )
    return <div className={className}>{this.props.children}</div>
  }
}

export { Box }
