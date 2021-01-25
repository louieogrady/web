import React from "react"
import { randColor } from "../components/functions"
class Welcome extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="text-container">
          <p style={{ color: randColor() }} className="text">
            Louie O'Grady
          </p>
          <p style={{ color: randColor() }} className="text">
            software developer and artist based in London, UK
          </p>
        </div>
      </React.Fragment>
    )
  }
}

export default Welcome
