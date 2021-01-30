import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Bounce from "../components/bounce"
import { randColor } from "../components/functions"

class About extends React.Component {
  render() {
    return (
      <Layout>
        <SEO title="about" />
        <Bounce />
        <div className="text-container">
          <p style={{ color: randColor() }} className="text-three">
            Louie O’Grady is a frontend developer and artist living in London. 
            He is passionate about the potential to use code to create innovative user experiences and is particularly interested in drawing upon the aesthetics and nostalgia of Web 1.0 in current web design.
            He has studied Contemporary Music Composition at the Royal Welsh College of Music (RWCMD) and has an MA in Art from the Manchester School of Art (MIRIAD).
            As a multidisciplinary artist, he has over 5 years experience of delivering commissioned work from the initial proposal stage to installing work onsite.
            He works as a frontend developer for Thortful.
          </p>
        </div>
      </Layout>
    )
  }
}

export default About
