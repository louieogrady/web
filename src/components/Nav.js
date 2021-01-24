import React from "react"
import github from "../images/Github-Mark-Light-32px.png"
import linkedin from "../images/linkedin.png"
import soundcloud from "../images/soundcloud.png"
import { onMouseOver, onMouseOut } from "../components/functions";

const links = [
  {
    name: 'home',
    path: '/'
  },
  {
    name: 'about',
    path: '/about'
  },
  {
    name: 'projects',
    path: '/proj'
  },
  {
    name: 'employment',
    path: '/employment'
  },
  {
    name: 'education',
    path: '/education'
  }
]
function navLinks() {
  return links.map((navItem) => {
    return <React.Fragment>
      <a className="nav-link" href={navItem.path}
        onMouseEnter={event => onMouseOver(event)}
        onMouseOut={event => onMouseOut(event)}>
        {navItem.name}
      </a>
      <br></br>
    </React.Fragment>
  })
}
class Nav extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="nav-flex-column">
          <nav>
            {navLinks()}
            <div className="icon" style={{ "marginTop": "2vh", "display": "flex" }}>
              <div style={{ "maxWidth": "5vh" }}>
                <a className="social" href="https://www.github.com/louieogrady">
                  <img style={{ "width": "95%" }} src={github} alt='github-link'></img>
                </a>
              </div>
              <div style={{ "maxWidth": "5vh" }}>
                <a className="social" href="https://www.linkedin.com/in/louieogrady">
                  <img className="" style={{ "width": "100%" }} src={linkedin} alt='linkedin-link'></img>
                </a>
              </div>
              <div style={{ "maxWidth": "5vh" }}>
                <a className="social" href="https://www.soundcloud.com/muesliboys">
                  <img style={{ "width": "100%" }} src={soundcloud} alt='soundcloud-link'></img>
                </a>
              </div>
            </div>
          </nav>
        </div>
      </React.Fragment>
    )
  }
}

export default Nav
