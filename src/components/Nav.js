import React from "react"
import { Link } from "gatsby"

// import logo from "../images/logo.svg"

class Nav extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="nav-flex-column">
          <nav>
            {/* <img src={logo} alt='logo'/> */}
            <a className="nav-link" href="/">
              home
          </a>
            <br></br>
            <a className="nav-link" href="/about">
              about
          </a>
            <br></br>
            <a className="nav-link" href="#">
              projects
          </a>
            <br></br>
            <a className="nav-link" href="employment">
              employment
          </a>
            <br></br>
            <a className="nav-link" href="#">
              education
          </a>
            <br></br>
            <a className="nav-link" href="https://www.github.com/louieogrady">
              github
          </a>
            <br></br>
            <a className="nav-link" href="https://www.linkedin.com/in/louieogrady">
              linkedin
          </a>
          </nav>
        </div>
      </React.Fragment>
    )
  }
}

export default Nav
