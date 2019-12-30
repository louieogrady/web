import React from "react"
// import { Link } from "gatsby"
import github from "../images/Github-Mark-Light-32px.png"
import linkedin from "../images/linkedin.png"

class Nav extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="nav-flex-column">
          <nav>
            <a className="nav-link" href="/">
              home
          </a>
            <br></br>
            <a className="nav-link" href="/about">
              about
          </a>
            <br></br>
            <a className="nav-link" href="/proj">
              projects
          </a>
            <br></br>
            <a className="nav-link" href="/employment">
              employment
          </a>
            <br></br>
            <a className="nav-link" href="/education">
              education
            </a>
            {/* <br></br>
            <a className="nav-link" href="https://www.github.com/louieogrady">
              github
          </a>
            <br></br>
            <a className="nav-link" href="https://www.linkedin.com/in/louieogrady">
              linkedin
          </a> */}
          <div className="icon" style={{"marginTop": "2vh", "display": "flex"}}>
            <div style={{"maxWidth": "5vh"}}>
              <span>
                <a className="github" href="https://www.github.com/louieogrady">
                  <img style={{"width": "95%"}} src={github} alt='github-link'></img>
                </a>
              </span>
            </div>
            <div style={{"maxWidth": "5vh"}}>
              <span>
                <a className="linkedin" href="https://www.linkedin.com/in/louieogrady">
                  <img style={{"marginLeft": "3vh", "marginTop": "0.35vh", "width": "100%"}} src={linkedin} alt='linkedin-link'></img>
                </a>
              </span>
            </div>
          </div>
          </nav>
        </div>
      </React.Fragment>
    )
  }
}

export default Nav
