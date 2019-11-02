import React from "react";
import { Link } from "gatsby";
import './welcome.css';

class Welcome extends React.Component {
  render() {
    return (
      <React.Fragment >
        <div className='welcomeContainer'> 
            <p id="text">Louie O'Grady <span className="teal">software developer and artist based in London, UK.</span></p>
        </div>
      </React.Fragment>

    )
  }
}

export default Welcome
