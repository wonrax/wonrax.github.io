import React from "react"
// import { Heading } from "../Typography"
import navbarStyles from "./Navbar.module.css"
import MenuIcon from "../Icons/Menu.svg"
import MenuClose from "../Icons/CloseMenu.svg"

class Navbar extends React.Component {
  constructor(props) {
    super(props)
    this.state = { shrink: false, menuExpanded: false }
  }
  componentDidMount() {
    // sticking navbar height change when scroll
    // window.addEventListener("scroll", this.handleScroll)
  }

  componentWillUnmount() {
    // sticking navbar height change when scroll
    // window.removeEventListener("scroll", this.handleScroll)
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
              src={this.state.menuExpanded ? MenuClose : MenuIcon}
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
            <p
              style={{
                zIndex: 1000,
                color: "var(--text-secondary-color)",
                fontSize: "14px",
                margin: "32px 16px 0 0",
              }}
              className={navbarStyles.mobileOnly}
            >
              Tap anywhere else to close the menu.
            </p>
          </div>
        </div>
        <div
          onClick={this.menuExpand}
          onKeyDown={this.menuExpand}
          aria-hidden="true"
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
