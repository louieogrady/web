import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import './employment.css';


let colors = ['white', '#b1dcff', '#fff4c1', '#34ebba', '#ffc1cc', '#c1ccff', '#ffd5c1', '#c1fff4', '#ebba34', '#eb5e34', '#34c1eb' ];

function randColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

const Employment = () => (
  <Layout>
    <SEO title="employment" />
    <div className="employmentContainer"> 
      {/* <p className="employmentHeader">Software Development</p> */}
      <p style={{color: randColor()}} className="employmentText">Thortful Ltd</p>
      <p style={{color: randColor()}} className="employmentText">June 2019 - Present</p>
      <p style={{color: randColor()}} className="employmentText">Junior Frontend Developer</p>
    </div>
  </Layout>
)

export default Employment