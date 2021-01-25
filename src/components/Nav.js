import React from "react"
import github from "../images/Github-Mark-Light-32px.png"
import linkedin from "../images/linkedin.png"
import soundcloud from "../images/soundcloud.png"
import { onMouseOver, onMouseOut, randColor } from "../components/functions"
import { Link, withPrefix } from "gatsby"
let path
const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "about",
    path: "/about",
  },
  {
    name: "projects",
    path: "/proj",
  },
  {
    name: "employment",
    path: "/employment",
  },
  {
    name: "education",
    path: "/education",
  },
]

function navLinks() {
  return links.map(navItem => {
    let pathCheck
    if (typeof window !== `undefined`) {
      pathCheck = window.location.pathname === withPrefix(navItem.path)
    }
    return (
      <React.Fragment>
        <Link
          className="nav-link"
          to={withPrefix(navItem.path)}
          activeStyle={{ "background-color": "#34ebba", "color": "black" }}
          style={{ color: randColor() }}
          onMouseEnter={event => (pathCheck ? null : onMouseOver(event))}
          onMouseOut={event => (pathCheck ? null : onMouseOut(event))}
        >
          {navItem.name}
        </Link>
        <br></br>
      </React.Fragment>
    )
  })
}
class Nav extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="nav-flex-column">
          <nav>
            {navLinks()}
            <div className="icon" style={{ marginTop: "2vh", display: "flex" }}>
              <div style={{ maxWidth: "5vh" }}>
                <a className="social" href="https://www.github.com/louieogrady">
                  <img
                    style={{ width: "95%" }}
                    src={github}
                    alt="github-link"
                  ></img>
                </a>
              </div>
              <div style={{ maxWidth: "5vh" }}>
                <a
                  className="social"
                  href="https://www.linkedin.com/in/louieogrady"
                >
                  <img
                    className=""
                    style={{ width: "100%" }}
                    src={linkedin}
                    alt="linkedin-link"
                  ></img>
                </a>
              </div>
              <div style={{ maxWidth: "5vh" }}>
                <a
                  className="social"
                  href="https://www.soundcloud.com/muesliboys"
                >
                  <img
                    style={{ width: "100%" }}
                    src={soundcloud}
                    alt="soundcloud-link"
                  ></img>
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
