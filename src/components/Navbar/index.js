import React from "react"
import { Heading } from "../Typography"
import navbarStyles from "./Navbar.module.css"
import MenuIcon from "../Icons/Menu.svg"

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
          <a href={"/"} className={`${navbarStyles.siteName}`}>
            hà huy long hải
          </a>
          <div className={`${navbarStyles.menuWrapper}`}>
            <a
              className={`${navbarStyles.menuItemSecondary} ${navbarStyles.menuItemLink}`}
              href="#"
            >
              blog
            </a>
            <a
              className={`${navbarStyles.menuItemSecondary} ${navbarStyles.menuItemLink}`}
              href="#"
            >
              about
            </a>
            {/* <a
              style={{ cursor: "pointer" }}
              onClick={this.props.themeToggle}
              className={`${navbarStyles.menuItemSecondary} ${navbarStyles.menuItemLink}`}
            >
              toggleTheme
            </a> */}
            <a
              href="https://github.com/wonrax"
              target="_blank"
              className={`${navbarStyles.menuItemSecondary} ${navbarStyles.menuItemLink}`}
            >
              github
            </a>
            <img
              className={`${navbarStyles.mobile}`}
              style={{
                cursor: "pointer",
                position: "relative",
                top: "5px",
              }}
              onClick={this.props.themeToggle}
              src={MenuIcon}
              height={"24"}
              width={"24"}
              alt={"Open menu"}
            ></img>
          </div>
        </div>
      </nav>
    )
  }
}

export { Navbar }
