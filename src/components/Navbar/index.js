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
          <div>
            <Heading weight={5} mb={"none"}>
              hà huy long hải
            </Heading>
          </div>
          <div>
            <ul>
              <li
                className={`${navbarStyles.menuItem} ${navbarStyles.desktop}`}
              >
                <a href="#">blog</a>
              </li>
              <li
                className={`${navbarStyles.menuItem} ${navbarStyles.desktop}`}
              >
                <a href="#">about</a>
              </li>
              <li
                className={`${navbarStyles.menuItem} ${navbarStyles.desktop}`}
              >
                <a
                  style={{ cursor: "pointer" }}
                  onClick={this.props.themeToggle}
                >
                  toggleTheme
                </a>
              </li>
              <li className={(navbarStyles.menuItem, navbarStyles.mobile)}>
                <img
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
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

export { Navbar }
