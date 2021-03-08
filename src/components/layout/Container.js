import React, { useState } from "react"
import containerStyles from "./Container.module.css"
import { Navbar } from "../Navbar"

const Container = props => {
  const [darkModeOn, setDarkModeOn] = useState(false)
  const handleThemeToggle = function (event) {
    // event.preventDefault()
    setDarkModeOn(!darkModeOn)
  }
  return (
    <div
      className={`container ${containerStyles.container} ${
        darkModeOn ? containerStyles.themeDark : containerStyles.themeLight
      }`}
    >
      <div className={containerStyles.navBar}>
        <Navbar themeToggle={handleThemeToggle}></Navbar>
      </div>
      <div className={containerStyles.content}>{props.children}</div>
    </div>
  )
}

export { Container }
