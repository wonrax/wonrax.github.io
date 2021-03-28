import classNames from "classnames"
import React from "react"
import spacingStyles from "./layout/Spacing.module.css"

class Box extends React.Component {
  constructor(props) {
    super(props)
  }
  className = classNames(this.props.mb)
}
