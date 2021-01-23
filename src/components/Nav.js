import React from "react"
import github from "../images/Github-Mark-Light-32px.png"
import linkedin from "../images/linkedin.png"
import { onMouseOver, onMouseOut } from "../components/functions";
class Nav extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="nav-flex-column">
          <nav>
            <a className="nav-link" href="/" onMouseEnter={event => onMouseOver(event)} onMouseOut={event => onMouseOut(event)}>
              home
          </a>
            <br></br>
            <a className="nav-link" href="/about" onMouseEnter={event => onMouseOver(event)} onMouseOut={event => onMouseOut(event)}>
              about
          </a>
            <br></br>
            <a className="nav-link" href="/proj" onMouseEnter={event => onMouseOver(event)} onMouseOut={event => onMouseOut(event)}>
              projects
          </a>
            <br></br>
            <a className="nav-link" href="/employment" onMouseEnter={event => onMouseOver(event)} onMouseOut={event => onMouseOut(event)}>
              employment
          </a>
            <br></br>
            <a className="nav-link" href="/education" onMouseEnter={event => onMouseOver(event)} onMouseOut={event => onMouseOut(event)}>
              education
            </a>
            <div className="icon" style={{ "marginTop": "2vh", "display": "flex" }}>
              <div style={{ "maxWidth": "5vh" }}>
                <span>
                  <a className="github" href="https://www.github.com/louieogrady">
                    <img style={{ "width": "95%" }} src={github} alt='github-link'></img>
                  </a>
                </span>
              </div>
              <div style={{ "maxWidth": "5vh" }}>
                <span>
                  <a className="linkedin" href="https://www.linkedin.com/in/louieogrady">
                    <img style={{ "marginLeft": "3vh", "marginTop": "0.35vh", "width": "100%" }} src={linkedin} alt='linkedin-link'></img>
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
