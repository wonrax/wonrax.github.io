import React from "react"
import containerStyles from "./Container.module.css"
import { Navbar } from "../Navbar"
import colorStyles from "../Colors.module.css"
import classnames from "classnames"

class Container extends React.Component {
  constructor(props) {
    super(props)
    this.state = { darkModeOn: false }
  }

  // componentDidMount() {
  //   this.handleThemeToggle = function (event) {
  //     // event.preventDefault()
  //     this.setState({ darkModeOn: !this.state.darkModeOn })
  //   }.bind(this)
  // }

  render() {
    const className = classnames(
      "container",
      containerStyles.container,
      this.state.darkModeOn ? colorStyles.themeDark : colorStyles.themeLight
    )
    return (
      <div className={className}>
        <div className={containerStyles.navBar}>
          <Navbar themeToggle={this.handleThemeToggle}></Navbar>
        </div>
        <div className={containerStyles.content}>{this.props.children}</div>
      </div>
    )
  }
}

export { Container }
