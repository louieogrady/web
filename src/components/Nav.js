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

          <a className="nav-link" href="page-2">
            about
          </a>
          <br></br>
          <a className="nav-link" href="#">
            projects
          </a>
          <br></br>
          <a className="nav-link" href="#">
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
