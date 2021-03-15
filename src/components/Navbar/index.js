import React from "react"
// import { Heading } from "../Typography"
import navbarStyles from "./Navbar.module.css"
import MenuIcon from "../Icons/Menu.svg"

class Navbar extends React.Component {
  constructor(props) {
    super(props)
    this.state = { shrink: false, menuExpanded: false }
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

  menuExpand = function (event) {
    this.setState({ menuExpanded: !this.state.menuExpanded })
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
          <button
            className={`${navbarStyles.mobile}`}
            onClick={this.menuExpand}
          >
            <img
              src={MenuIcon}
              height={"24"}
              width={"24"}
              alt={"Open menu"}
            ></img>
          </button>
          <div
            className={`${navbarStyles.menuWrapper} ${
              this.state.menuExpanded
                ? navbarStyles.menuMobileEnabled
                : navbarStyles.menuMobileDisabled
            }`}
          >
            <a
              className={`${navbarStyles.menuItemSecondary} ${navbarStyles.menuItemLink}`}
              href="/blog"
            >
              blog
            </a>
            <a
              className={`${navbarStyles.menuItemSecondary} ${navbarStyles.menuItemLink}`}
              href="/about"
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
              rel="noreferrer"
              className={`${navbarStyles.menuItemSecondary} ${navbarStyles.menuItemLink}`}
            >
              github
            </a>
          </div>
        </div>
        <div
          onClick={this.menuExpand}
          className={`${navbarStyles.overlay} ${
            this.state.menuExpanded
              ? navbarStyles.menuMobileEnabled
              : navbarStyles.menuMobileDisabled
          }`}
        ></div>
      </nav>
    )
  }
}

export { Navbar }
