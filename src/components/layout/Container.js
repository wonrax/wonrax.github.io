import React, { useState } from "react"
import containerStyles from "./Container.module.css"
import { Navbar } from "../Navbar"
import colorStyles from "../Colors.module.css"
import classnames from "classnames"

const Container = props => {
  const [darkModeOn, setDarkModeOn] = useState(false)
  const handleThemeToggle = function (event) {
    // event.preventDefault()
    setDarkModeOn(!darkModeOn)
  }

  const className = classnames(
    "container",
    containerStyles.container,
    darkModeOn ? colorStyles.themeDark : colorStyles.themeLight
  )
  return (
    <div className={className}>
      <div className={containerStyles.navBar}>
        <Navbar themeToggle={handleThemeToggle}></Navbar>
      </div>
      <div className={containerStyles.content}>{props.children}</div>
    </div>
  )
}

export { Container }
