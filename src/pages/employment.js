import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { randColor } from "../components/functions";

const Employment = () => (
  <Layout>
    <SEO title="employment" />
    <div className="text-container"> 
      <p style={{color: randColor()}} className="text">Thortful Ltd</p>
      <p style={{color: randColor()}} className="text">June 2019 - Present</p>
      <p style={{color: randColor()}} className="text">Junior Frontend Developer</p>
    </div>
  </Layout>
)

export default Employment