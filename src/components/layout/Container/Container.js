import React from "react"
import containerStyles from "./Container.module.css"

const Container = props => {
  return (
    <div
      className={`container ${containerStyles.container} ${containerStyles.theme_light}`}
    >
      {props.children}
    </div>
  )
}

export { Container }
