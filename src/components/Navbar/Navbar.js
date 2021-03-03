import React from "react"
import { Heading } from "../Typography/Typography"
import navbarStyles from "./Navbar.module.css"

class Navbar extends React.Component {
  constructor(props) {
    super(props)
    this.state = { shrink: false }
  }
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll)
  }

  handleScroll = function (event) {
    if (window.scrollY > 0) {
      this.setState({ shrink: true })
    } else {
      this.setState({ shrink: false })
    }
  }.bind(this)

  render() {
    return (
      <nav
        className={
          this.state.shrink ? navbarStyles.navbarShrink : navbarStyles.navbar
        }
      >
        <div className={navbarStyles["wrapper"]}>
          <div>
            <Heading weight={5} mb={"none"}>
              hà huy long hải
            </Heading>
          </div>
          <div>
            <ul>
              <li className={navbarStyles.menuItem}>
                <a href="#">blog</a>
              </li>
              <li className={navbarStyles.menuItem}>
                <a href="#">about</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

export { Navbar }
