import React from "react"
import containerStyles from "./Container.module.css"
import { Navbar } from "../../Navbar/Navbar"

const Container = props => {
  return (
    <div
      className={`container ${containerStyles.container} ${containerStyles.theme_light}`}
    >
      <div className={containerStyles.navBar}>
        <Navbar></Navbar>
      </div>
      <div className={containerStyles.content}>{props.children}</div>
    </div>
  )
}

export { Container }
