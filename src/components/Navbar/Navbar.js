import React from "react"
import navbarStyles from "./Navbar.module.css"
import { MenuClose, MenuIcon } from "../Icons"
import classnames from "classnames"

class Navbar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      menuExpanded: false,
      prevExpanded: true,
      wrongTap: false,
      animation: "",
    }
  }

  componentWillUnmount() {
    if (this.wrongTapMessageTimeOut) {
      clearTimeout(this.wrongTapMessageTimeOut)
    }
  }

  // Only change expand menu state if it's expanding
  // otherwise if it's collapsing, wait the animation to end
  // then change the state (implemented in handleAnimationEnd())
  menuExpand = function (event) {
    if (!this.state.menuExpanded) {
      this.setState({ menuExpanded: true })
    }
    const prevState = !this.state.prevExpanded
    this.setState({
      prevExpanded: !this.state.prevExpanded,
      animation: prevState ? "collapsing" : "expanding",
    })
  }.bind(this)

  handleAnimationEnd = function (event) {
    if (this.state.prevExpanded) {
      this.setState({ menuExpanded: false })
    }
    this.setState({ animation: "" })
  }.bind(this)

  handleWrongCloseTap = function (event) {
    if (!this.state.wrongTap) {
      this.setState({ wrongTap: !this.state.wrongTap })
      this.wrongTapMessageTimeOut = setTimeout(() => {
        this.setState({ wrongTap: false })
      }, 2000)
    }
  }.bind(this)

  render() {
    const linkItemCs = classnames(
      navbarStyles.menuItemLink,
      navbarStyles[this.state.animation]
    )
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
            aria-hidden="true"
            onClick={this.handleWrongCloseTap}
            className={`${navbarStyles.menuWrapper} ${
              this.state.menuExpanded && navbarStyles.menuMobileEnabled
            }`}
          >
            <a
              className={linkItemCs}
              href="/blog"
              onAnimationEnd={this.handleAnimationEnd}
            >
              blog
            </a>
            <a className={linkItemCs} href="/about">
              about
            </a>
            <a
              href="https://github.com/wonrax"
              target="_blank"
              rel="noreferrer"
              className={linkItemCs}
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
              {!this.state.wrongTap
                ? "Tap anywhere else to close the menu."
                : "Not there bro..."}
            </p>
          </div>
        </div>
        <div
          onClick={this.menuExpand}
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
