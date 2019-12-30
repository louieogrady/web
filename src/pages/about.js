import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import './about.css';

let colors = ['white', '#b1dcff', '#fff4c1', '#34ebba', '#ffc1cc', '#c1ccff', '#ffd5c1', '#c1fff4', '#ebba34', '#eb5e34', '#34c1eb' ];

function randColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

const About = () => (
  <Layout>
    <SEO title="about" />
    <div className="aboutTextContainer"> 
      <p style={{color: randColor()}} className="aboutText">
      I am a software developer and artist based in London.
      I am passionate about writing code to create innovative user experiences. I have several years experience working as a sound artist where 
      I have delivered commissioned work from initial proposal stage to practical installation</p>
    </div>
  </Layout>
)

export default About
