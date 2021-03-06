import React from "react"
import readingStyles from "./Reading.module.css"

const Reading = props => {
  return (
    <div className={`reading ${readingStyles.reading}`}>{props.children}</div>
  )
}

export { Reading }
